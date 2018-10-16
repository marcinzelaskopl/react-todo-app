import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Header";
import ToDoInput from "./Components/ToDoInput";
import ToDoItem from './Components/ToDoItem'

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
    let ToDos = this.state.ToDos.slice();
    ToDos.push({id: this.state.nextId, text: toDoText});
    this.setState({
        ToDos: ToDos,
        nextId: ++this.state.nextId
    })
};
  removeToDo = (id) => {
    this.setState({
        ToDos: this.state.ToDos.filter((todo, index) => todo.id !== id)
    });
  };
  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <Header/>
          <ToDoInput todoText={''} addToDo={this.addToDo}/>
          <ul>
              {
                this.state.ToDos.map((todo) => {
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
