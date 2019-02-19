import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { connect } from 'react-redux';
import { getAllVideos } from '../store/videos';

import { CardHeader } from '@material-ui/core';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videoList: [] };
  }
  // componentDidMount() {
  //   this.props.getAllVideos();
  // const allVideos = [];
  // firebase.auth().onAuthStateChanged(function(user) {
  //   if (user) {
  //     const ref = firebase.database().ref('videos');
  //     ref.on('value', function(snapshot) {
  //       const videos = snapshot.val();
  //       for (let key in videos) {
  //         let singleVideo = {
  //           key: key,
  //           brand: videos[key].brand,
  //           name: videos[key].name,
  //           url: videos[key].storageRef,
  //           views: videos[key].totalViews
  //         };
  //         allVideos.push(singleVideo);
  //       }
  //     });
  //   }
  // });
  // // console.log('this stuff all videos before setting state', allVideos);
  // this.setState({ videoList: allVideos });
  // console.log('this videos list is ', this.state.videosList);
  // }
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
          welcome!!
        </Typography>
        <Button
          variant="contained"
          title="login"
          text="login"
          style={{
            marginLeft: '25%',

            fontSize: 30,
            backgroundColor: '#03A9F4'
          }}
          textStyle={{ color: 'white' }}
          component={Link}
          to={{
            pathname: '/Login'
          }}
        >
          <Typography variant="display1" align="center">
            Login
          </Typography>
        </Button>
        <Button
          variant="contained"
          style={{
            marginLeft: '30%',

            fontSize: 30,
            backgroundColor: '#00BCD4',
            color: 'white'
          }}
          component={Link}
          to={{
            pathname: '/Signup'
          }}
          title="sign up"
        >
          <Typography variant="display1" align="center">
            Sign up
          </Typography>
        </Button>
        <CardContent align="center">
          <CardMedia
            component="img"
            style={{ height: '50%', width: '50%' }}
            image="https://cdn140.picsart.com/287223507017201.jpg?c480x480"
            title="road"
          />
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
const mapStateToProps = state => {
  return {
    ...state,
    videoList: state.videoList,
    views: state.views
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     getAllVideos: () => {
//       dispatch(getAllVideos());
//     }
//   };
// };
export default connect(mapStateToProps, null)(Home);
