import React from 'react';
import Routes from './routes';
import { Navbar } from './components';
import { connect } from 'react-redux';
import { getAllVideos } from './store/videos';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div
          style={{
            left: '10%',
            marginTop: '3%',
            height: '25%',
            padding: 10
          }}
        >
          <Routes />
        </div>
      </div>
    );
  }
}

export default App;
