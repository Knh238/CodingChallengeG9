import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import firebase from '../firebase';
import { connect } from 'react-redux';
import { getViewReport } from '../store/videos';
import ReactPlayer from 'react-player';
import moment from 'moment';

class VideoViews extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: '', viewReport: {} };
  }
  componentDidMount() {
    const self = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        self.setState({ user: user.email });
      } else {
        self.setState({ user: '' });
      }
    });
  }
  handleSubmit() {
    const id = this.state.id;
    const self = this;
    try {
      let videoViews = {};
      const ref = firebase
        .database()
        .ref('/videos')
        .once('value')
        .then(function(snapshot) {
          var videos = snapshot.val();
          for (let key in videos) {
            if (key === id) {
              const published = moment(videos[key].publishedDate).format(
                'MMMM DoYYYY, h:mm:ss a'
              );
              videoViews.brand = videos[key].brand;
              videoViews.name = videos[key].name;
              videoViews.Published = published;
              videoViews.totalViews = videos[key].totalViews;
              videoViews.url = videos[key].storageRef;
            }
          }
          self.setState({ viewReport: videoViews });
        });
    } catch (err) {
      console.log('not setting stuff');
      console.error(err);
    }
    this.setState({ id: '' });
  }
  returnReport() {
    return (
      <Card
        style={{
          float: 'none',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        <CardContent align="center">
          <Typography
            variant="h4"
            style={{ fontFamily: 'Signika' }}
            align="center"
          >
            {this.state.viewReport.name}
          </Typography>
        </CardContent>
        <CardContent align="center">
          <Typography
            variant="h4"
            style={{ fontFamily: 'Signika' }}
            align="center"
          >
            {this.state.viewReport.brand}
          </Typography>
        </CardContent>
        <CardContent align="center">
          <ReactPlayer url={this.state.viewReport.url} controls={true} />
        </CardContent>
        <CardContent align="center">
          <Typography
            variant="h4"
            style={{ fontFamily: 'Signika' }}
            align="center"
          >
            published: {this.state.viewReport.Published}
          </Typography>
        </CardContent>
        <CardContent align="center">
          <Typography
            variant="h4"
            style={{ fontFamily: 'Signika' }}
            align="center"
          >
            total views: {this.state.viewReport.totalViews}
          </Typography>
        </CardContent>
      </Card>
    );
  }

  render() {
    const loggedIn = this.state.user;

    return loggedIn ? (
      <Card
        style={{
          float: 'none',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        <Typography
          variant="h3"
          style={{ fontFamily: 'Signika' }}
          align="center"
        >
          Generate a report of video views
        </Typography>
        <CardContent align="center">
          <CardMedia
            component="img"
            style={{ height: '20%', width: '20%' }}
            image="https://cdn130.picsart.com/287703920011201.jpg?c480x480"
            title="home"
          />
        </CardContent>
        <CardContent align="center">
          <TextField
            id="outlined-multiline-flexible"
            classes={{
              root: styles.inputRoot,
              input: styles.inputInput
            }}
            value={this.state.id}
            onChange={event => this.setState({ id: event.target.value })}
            margin="normal"
            variant="outlined"
            label="video id:"
            centered
          />
        </CardContent>
        <CardContent align="center">
          <Button
            variant="contained"
            style={{ backgroundColor: '#ef9a9a' }}
            onClick={() => this.handleSubmit()}
          >
            Submit
          </Button>
        </CardContent>
        {this.state.viewReport.name ? this.returnReport() : null}
      </Card>
    ) : (
      <Card
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          height: '25%'
        }}
      >
        <Typography
          variant="h3"
          style={{ fontFamily: 'Signika' }}
          align="center"
        >
          Sign up and Login for the love!!
        </Typography>
      </Card>
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
    getViewReport: id => {
      dispatch(getViewReport(id));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(VideoViews);
