import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <Header/>
        </div>
      </div>
    );
  }
}

export default App;
