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
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Icon from '@material-ui/core/Icon';
import Home from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import HistoryIcon from '@material-ui/icons/History';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { connect } from 'react-redux';
import { getAllVideos } from '../store/videos';

import { CardHeader } from '@material-ui/core';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videoList: [] };
    // this.listAllVideos = this.listAllVideos.bind(this);
  }
  async componentDidMount() {
    // await this.props.getAllVideos();
    await this.props.getAllVideos();
  }
  render() {
    return (
      <AppBar position="fixed" style={{ background: '#26C6DA' }}>
        <Toolbar>
          <IconButton
            component={Link}
            to={{
              pathname: '/'
            }}
          >
            <Home />
          </IconButton>
          <Button
            variant="contained"
            style={{ backgroundColor: '#ef9a9a', marginLeft: 10 }}
            component={Link}
            to={{
              pathname: '/AddVideo'
            }}
          >
            <AddIcon />
            Video
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: '#ef9a9a', marginLeft: 10 }}
            component={Link}
            to={{
              pathname: '/Track'
            }}
          >
            <VideoLibraryIcon />
            Watch
          </Button>
          <div style={{ flexGrow: 1 }}>
            <Typography align="center" variant="h4" color="inherit" noWrap>
              Coding Challenge Submission: Kristin
            </Typography>
          </div>
          <div style={{ float: 'right' }}>
            <Button
              variant="contained"
              style={{ backgroundColor: '#ef9a9a', marginLeft: 10 }}
              component={Link}
              to={{
                pathname: '/ViewHistory'
              }}
            >
              <HistoryIcon />
              Views
            </Button>
            <Button
              variant="contained"
              style={{ backgroundColor: '#ef9a9a', marginLeft: 10 }}
              component={Link}
              to={{
                pathname: '/Keyword'
              }}
            >
              <SearchIcon />
              By Keyword
            </Button>
          </div>
        </Toolbar>
      </AppBar>
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

const mapDispatchToProps = dispatch => {
  return {
    getAllVideos: () => {
      dispatch(getAllVideos());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
