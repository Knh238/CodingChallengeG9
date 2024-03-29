import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
          welcome!!
        </Typography>
        <Button
          variant="contained"
          title="login"
          text="login"
          style={{
            marginLeft: '25%',
            fontSize: 20,
            backgroundColor: '#03A9F4'
          }}
          textStyle={{ color: 'white' }}
          component={Link}
          to={{
            pathname: '/Login'
          }}
        >
          <Typography variant="h5" align="center">
            Login
          </Typography>
        </Button>
        <Button
          small
          variant="contained"
          style={{
            marginLeft: '38%',
            fontSize: 20,
            backgroundColor: '#00BCD4',
            color: 'white'
          }}
          component={Link}
          to={{
            pathname: '/Signup'
          }}
          title="sign up"
        >
          <Typography variant="h5" align="center">
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

export default connect(mapStateToProps, null)(Home);
