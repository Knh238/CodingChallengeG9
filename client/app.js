import React from 'react';
import Routes from './routes';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          position: 'absolute',
          left: '10%',
          width: '80%',
          top: '5%',
          height: '25%',
          padding: 10
        }}
      >
        <Routes />
      </div>
    );
  }
}

export default App;
