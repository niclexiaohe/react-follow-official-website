import React, { Component } from 'react';
import Clock from "./components/Clock"
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
      console.log(this.props);
    return (
      <div className="App">
        <p className="App-intro">
            {this.props.name}
        </p>
          <Clock />
      </div>
    );
  }
}

export default App;
