import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Card from '@material-ui/core/Card';

export default class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      name: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const email = this.state.email;
    const pass = this.state.password;
    const displayName = this.state.name;
    const portfolio = {
      cashBalance: 500000,
      estValueOfHoldings: 0,
      transactionHistory: [],
      currHoldings: []
    };

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, pass)
      .catch(function(error) {
        console.error(error);
        window.alert(error);
      });

    firebase.auth().onAuthStateChanged(function(user) {
      let n = 0;
      if (user && n === 0) {
        n++;
        const uid = user.uid;
        firebase
          .database()
          .ref('users/' + uid)
          .set({
            displayName,
            email,
            portfolio
          });
      }
    });
    this.props.history.push('/Login');
  }

  render() {
    return (
      <div style={{ position: 'relative' }}>
        <Card
          style={{
            backgroundColor: 'grey',
            height: '40%',
            width: '40%',
            marginLeft: '20%',
            marginTop: '10%'
          }}
        >
          <form onChange={this.handleChange}>
            <FormGroup style={{ margin: '1em' }}>
              <FormControl>
                <InputLabel>Name</InputLabel>
                <Input name="name" type="text" required />
              </FormControl>
              <FormControl>
                <InputLabel>E-mail</InputLabel>
                <Input name="email" type="email" required />
              </FormControl>
              <FormControl>
                <InputLabel>Password</InputLabel>
                <Input name="password" type="password" required />
              </FormControl>
              <br />
              <Button onClick={this.handleSubmit} type="submit">
                <Link to="/login" replace>
                  SIGNUP
                </Link>
              </Button>
              <Button>
                <Link to="/login" replace>
                  Back to Login
                </Link>
              </Button>
            </FormGroup>
          </form>
        </Card>
      </div>
    );
  }
}
