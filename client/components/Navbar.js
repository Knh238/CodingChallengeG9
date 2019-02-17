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

import { CardHeader } from '@material-ui/core';

export default class Navbar extends React.Component {
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
            Track
          </Button>
          <div style={{ marginLeft: '20%' }}>
            <Typography
              style={{ flex: 'center' }}
              variant="h4"
              color="inherit"
              noWrap
            >
              App Build Group Nine Media
            </Typography>
          </div>
          <div style={{ marginRight: 0 }}>
            <Button
              variant="contained"
              style={{ backgroundColor: '#ef9a9a', marginLeft: 10 }}
              component={Link}
              to={{
                pathname: '/Views'
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
