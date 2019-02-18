import React from 'react';
import ReactPlayer from 'react-player';
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

//gonna need to get all the views
//then gonna need to map through to display below
//then gonna need to add a play or watch this video button
//that button will add a view
//pressing view might just open it in another window

export default class TrackVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videoId: '', name: '', brand: '' };
  }

  addView() {
    // const input = this.state.title;
    //user: Kristin
    console.log('miss vanjie!');
    // this.setState({ title: '' });
  }
  render() {
    return (
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
          Watch something
        </Typography>
        <CardContent align="center">
          <ReactPlayer
            url="https://youtu.be/kHUz0Z_xFXw"
            controls={true}
            onStart={() => this.addView()}
          />
        </CardContent>
        <CardContent align="center">
          <Typography
            variant="h2"
            style={{ fontFamily: 'Signika', color: '#ef9a9a' }}
          >
            video details: videoId, name, brand
          </Typography>
          <CardContent align="center">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=M7nCOJHRcN8"
              controls={true}
              onStart={() => this.addView()}
            />
          </CardContent>

          <CardContent align="center">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=1OadSg3Qu58&list=RD1OadSg3Qu58&start_radio=1"
              controls={true}
              onStart={() => this.addView()}
            />
            {/* // https://www.youtube.com/watch?v=M7nCOJHRcN8
            //maru boxes https://www.youtube.com/watch?v=2XID_W4neJo */}
          </CardContent>
          <CardContent align="center">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=2XID_W4neJo"
              controls={true}
              onStart={() => this.addView()}
            />
          </CardContent>
          <CardContent align="center">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=9rkVTfEGK8Q"
              controls={true}
              onStart={() => this.addView()}
            />
          </CardContent>
          <CardContent align="center">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=e-7UbU45a1U"
              controls={true}
              onStart={() => this.addView()}
            />
          </CardContent>
        </CardContent>
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
