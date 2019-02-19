import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Icon from '@material-ui/core/Icon';
import Home from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import HistoryIcon from '@material-ui/icons/History';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { connect } from 'react-redux';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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

export default connect(mapStateToProps, null)(Navbar);
