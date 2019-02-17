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

import { CardHeader } from '@material-ui/core';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <AppBar position="fixed" style={{ background: '#26C6DA' }}>
          <Toolbar>
            {/* <div className={classes.search}>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                onChange={event =>
                  this.setState({ searchStock: event.target.value })
                }
                value={this.state.searchStock}
              />
            </div>
            <IconButton
              component={Link}
              to={{
                pathname: '/Stock',
                state: this.state.searchStock
              }}
            >
              <SearchIcon />
            </IconButton> */}
            <Button
              variant="contained"
              style={{ backgroundColor: '#ef9a9a', marginLeft: 10 }}
              component={Link}
              to={{
                pathname: '/AddVideo'
              }}
            >
              Add New Video
            </Button>
            <Button
              variant="contained"
              style={{ backgroundColor: '#ef9a9a', marginLeft: 10 }}
              component={Link}
              to={{
                pathname: '/Track'
              }}
            >
              Track History
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
                Track Views
              </Button>
              <Button
                variant="contained"
                style={{ backgroundColor: '#ef9a9a', marginLeft: 10 }}
                component={Link}
                to={{
                  pathname: '/Keyword'
                }}
              >
                Search Videos By Keyword
              </Button>
            </div>
          </Toolbar>
        </AppBar>
        <Card
          style={{
            float: 'none',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          {' '}
          <Typography
            variant="h3"
            style={{ fontFamily: 'Signika' }}
            align="center"
          >
            welcome!!
          </Typography>
          <CardContent align="center">
            <CardMedia
              component="img"
              style={{ height: '60%', width: '60%' }}
              image="https://cdn140.picsart.com/287223507017201.jpg?c480x480"
              title="road"
            />
          </CardContent>
          <CardContent align="center">
            <Typography variant="h2" style={{ fontFamily: 'Signika' }}>
              what would you like to do? option buttons
            </Typography>
          </CardContent>
          <CardContent align="center">
            <Button
              variant="contained"
              style={{ backgroundColor: '#ef9a9a' }}
              onClick={() => this.handleSubmit()}
            >
              Submit
            </Button>
            <Button
              variant="contained"
              style={{ backgroundColor: '#ef9a9a' }}
              onClick={() => this.handleSubmit()}
            >
              Submit
            </Button>
            <Button
              variant="contained"
              style={{ backgroundColor: '#ef9a9a' }}
              onClick={() => this.handleSubmit()}
            >
              Submit
            </Button>
          </CardContent>
        </Card>
      </div>
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
