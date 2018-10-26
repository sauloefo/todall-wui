import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const App = class extends Component {
  render() {
    return <h1>Hello React App!</h1>;
  }
}

const root = document.getElementById('root');

ReactDOM.render(<App />, root);