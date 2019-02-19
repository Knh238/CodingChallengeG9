import React from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { addNewView } from '../store/videos';
import firebase from '../firebase';

class TrackVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      videoId: '',
      name: '',
      brand: '',
      videoList: []
    };
  }
  componentDidMount() {
    const allVideos = [];
    const self = this;

    const ref = firebase
      .database()
      .ref('/videos')
      .once('value')
      .then(function(snapshot) {
        var videos = snapshot.val();
        for (let key in videos) {
          let singleVideo = {
            key: key,
            brand: videos[key].brand,
            name: videos[key].name,
            url: videos[key].storageRef,
            totalViews: videos[key].totalViews
          };
          allVideos.push(singleVideo);
        }
        self.setState({ videoList: allVideos, user: 'kristin' });
      });
  }

  addView(videoId, brand, views) {
    const platform = 'app';
    const user = this.state.user;
    const updatedViews = views + 1;

    this.props.addNewView(videoId, brand, platform, user, updatedViews);
  }

  render() {
    const videoList = this.state.videoList.length;

    return (
      <Paper style={{ height: 500 }}>
        <Typography
          variant="h2"
          style={{ fontFamily: 'Signika' }}
          align="center"
        >
          Watch something
        </Typography>

        {videoList >= 1 ? (
          this.state.videoList.map(video => {
            return (
              <Card key={video.key}>
                <CardContent key={video.key} align="center">
                  <ReactPlayer
                    url={video.url}
                    controls={true}
                    onStart={() =>
                      this.addView(video.key, video.brand, video.totalViews)
                    }
                  />
                </CardContent>
                <CardContent align="center">
                  <Typography
                    variant="h3"
                    style={{ fontFamily: 'Signika', color: '#ef9a9a' }}
                  >
                    {video.name}
                  </Typography>
                </CardContent>
                <CardContent align="center">
                  <Typography
                    variant="h4"
                    style={{ fontFamily: 'Signika', color: '#ef9a9a' }}
                  >
                    {video.brand}
                  </Typography>
                </CardContent>
              </Card>
            );
          })
        ) : (
          <Card>
            <CardContent align="center">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=M7nCOJHRcN8"
                controls={true}
                onStart={() => this.addView()}
              />
            </CardContent>
            <CardContent align="center">
              <Typography
                variant="h4"
                style={{ fontFamily: 'Signika', color: '#ef9a9a' }}
              >
                name: brand:
              </Typography>
            </CardContent>
          </Card>
        )}
      </Paper>
    );
  }
}

const styles = {
  card: {
    maxWidth: 345,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  media: {
    objectFit: 'cover'
  }
};

const mapStateToProps = state => {
  return {
    ...state,
    videos: state.videoList,
    views: state.views
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNewView: (videoId, brand, platform, user, updatedViews) => {
      dispatch(addNewView(videoId, brand, platform, user, updatedViews));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TrackVideo);
