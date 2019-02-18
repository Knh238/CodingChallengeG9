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

export default class VideoViews extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', brand: '' };
  }

  handleSubmit() {
    const input = this.state.title;

    console.log('text', input);
    this.setState({ title: '' });
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
          Generate a report of video views
        </Typography>
        <CardContent align="center">
          <CardMedia
            component="img"
            style={{ height: '30%', width: '20%' }}
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
            value={this.state.title}
            onChange={event => this.setState({ title: event.target.value })}
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
