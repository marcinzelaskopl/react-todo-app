import React, { Component } from 'react';
import './ToDoInput.css'

class ToDoInput extends Component {
    constructor(props){
        super(props);

        this.state = {
            value: ''
        }
    }

    handleChange = (e) => {
      this.setState({
          value: e.target.value,
      })
    };

    addToDo = todo => {
        if (todo.length > 0) {
            this.props.addToDo(todo);
            this.setState({
                value: '',
            })
        }
    };
    render(){
        return (
            <div>
                <input type={'text'} value={this.state.value} onChange={this.handleChange}/>
                <button onClick={() => this.addToDo(this.state.value)} className={'btn btn-main'}>Submit</button>
            </div>
        )
    }
}


export default ToDoInput