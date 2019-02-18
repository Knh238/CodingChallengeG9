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
import MenuItem from '@material-ui/core/MenuItem';
const brands = [
  {
    value: 'Thrillist',
    label: 'Thrillist'
  },
  {
    value: 'Seeker',
    label: 'Seeker'
  },
  {
    value: 'TheDodo',
    label: 'The Dodo'
  },
  {
    value: 'NowThis',
    label: 'Now This'
  }
];
export default class CreateVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      brand: '',
      storageReference: '',
      primaryVideoCategory: '',
      keywords: []
    };
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  handleSubmit() {
    const input = this.state.title;

    console.log('text', input);
    this.setState({ title: '' });
    //then redirect to home
  }
  render() {
    const { classes } = this.props;
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
                style={{ height: '20%', width: '20%' }}
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
            <CardContent align="center">
              <TextField
                id="outlined-multiline-flexible"
                classes={{
                  root: styles.inputRoot,
                  input: styles.inputInput
                }}
                label="name"
                value={this.state.name}
                onChange={event => this.setState({ name: event.target.value })}
                margin="normal"
                variant="outlined"
                centered
              />
            </CardContent>
            <CardContent align="center">
              <TextField
                id="outlined-select-currency"
                select
                label="Select"
                value={this.state.brand}
                onChange={this.handleChange('brand')}
                helperText="Select Brand"
                margin="normal"
                variant="outlined"
              >
                {brands.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </CardContent>
            <CardContent align="center">
              <TextField
                id="outlined-multiline-flexible"
                classes={{
                  root: styles.inputRoot,
                  input: styles.inputInput
                }}
                value={this.state.storageReference}
                onChange={event => this.setState({ title: event.target.value })}
                margin="normal"
                variant="outlined"
                label="uri"
                centered
              />
            </CardContent>
            <CardContent align="center">
              <TextField
                id="outlined-multiline-flexible"
                classes={{
                  root: styles.inputRoot,
                  input: styles.inputInput
                }}
                value={this.state.primaryVideoCategory}
                onChange={event => this.setState({ title: event.target.value })}
                margin="normal"
                variant="outlined"
                label="primary category"
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
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});
