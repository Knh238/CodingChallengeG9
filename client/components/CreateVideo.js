import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default class CreateVideo extends React.Component {
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
      <Paper style={{ height: 500 }}>
        <div>
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
              Lets add a video!
            </Typography>
            <CardContent align="center">
              <CardMedia
                align="center"
                style={{ height: '30%', width: '30%' }}
                component="img"
                image="https://cdn130.picsart.com/280711530004201.jpg?c480x480"
                title="home"
              />
            </CardContent>
          </Card>
        </div>
        <div>
          <Card
            style={{
              float: 'none',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            <CardContent>
              <Typography
                variant="h4"
                style={{ fontFamily: 'Signika' }}
                align="center"
              >
                options buttons here
              </Typography>
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
        </div>
        <div>
          <Card
            style={{
              float: 'none',
              height: '30%',
              marginLeft: 'auto',
              marginRight: 'auto',
              backgroundColor: '#009688'
            }}
          >
            <CardContent align="center">
              <Typography
                paragraph
                gutterBottom
                variant="h5"
                style={{
                  fontFamily: 'Signika'
                }}
              >
                stuff here?
              </Typography>
            </CardContent>
          </Card>
        </div>
      </Paper>
    );
  }
}
const styles = theme => ({
  card: {
    maxWidth: 345,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  media: {
    objectFit: 'cover'
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200
    }
  }
});
