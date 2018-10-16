import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Header";
import ToDoInput from "./Components/ToDoInput";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <Header/>
          <ToDoInput/>
        </div>
      </div>
    );
  }
}

export default App;
