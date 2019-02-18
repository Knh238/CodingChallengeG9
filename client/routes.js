import React, { Component } from 'react';

import { withRouter, Route, Switch } from 'react-router-dom';

import PropTypes from 'prop-types';

import {
  Home,
  CreateVideo,
  TrackVideo,
  VideoViews,
  KeywordListing
} from './components';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/AddVideo" component={CreateVideo} />
        <Route exact path="/Track" component={TrackVideo} />
        <Route exact path="/ViewHistory" component={VideoViews} />
        <Route exact path="/Keyword" component={KeywordListing} />
      </Switch>
    );
  }
}
