import React, { Component } from 'react';
import './ToDoItem.css'

class ToDoItem extends Component {
    constructor(props){
        super(props);

        this.state = {
            color: '',
        }
    }

    removeToDo = (id) => {
      this.props.removeToDo(id)
    };

    handleClick = () => {
        if (this.state.color === '') {
            this.setState({
                color: 'green',
            })
        } else if (this.state.color === 'green') {
            this.setState({
                color: 'red',
            })
        } else if (this.state.color === 'red') {
            this.setState({
                color: 'green',
            })
        }
    };
    render(){
        return (
            <div style={{color: this.state.color}} onClick={this.handleClick} className={'toDoWrapper'}>
                <button onClick={(e) => this.removeToDo(this.props.id)} className={'removeToDo'}>Remove</button>{this.props.todo.text}
            </div>
        )
    }
}

export default ToDoItem