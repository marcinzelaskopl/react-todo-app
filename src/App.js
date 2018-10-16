import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Header";
import ToDoInput from "./Components/ToDoInput";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      ToDos: [
          {id:0, text: 'Make dinner!'},
          {id: 1, text: 'Laundry'},
          {id: 2, text: 'Make a React App'}
      ],
        nextId: 3
    }
  }

  addToDo = (toDoText) => {
    console.log('Todo added', toDoText)
};
  removeToDo = (id) => {
    console.log('ToDo removed: ', id)
  };
  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <Header/>
          <ToDoInput todoText={''} addToDo={this.addToDo}/>
          <ul>
              {
                this.state.todos.map((todo) => {
                  return <ToDoItem todo={todo} key={todo.id} id={todo.id} removeToDo={this.removeToDo}/>
                })
              }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
