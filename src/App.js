import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
    <div className = "App"> <header className = "App-header"> <img src = {
      logo
    }
    className = "App-logo" alt = "logo" / > < h1 className = "App-title" > Welcome to React < /h1> < /header > < p className = "App-intro" > To get started,
    edit < code > src / App.js < /code> and save to reload. < /p > < HelloMessage firstName = "Steve" lastName = "Bill" / > < HelloMessage firstName = "Jess" lastName = "Johnson" / > < HelloMessage firstName = "Brian" lastName = "King" / > < /div>
    );
  }
}

class HelloMessage extends React.Component {
  render() {
    return <div>
      <h2> Hello </h2> 
      <p> {this.props.firstName} {this.props.lastName} </p> 
      </div>;
  }
}

export default App;