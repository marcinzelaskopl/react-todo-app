import React, { Component } from 'react';
import './ToDoInput.css'

class ToDoInput extends Component {
    constructor(props){
        super(props);

        this.state = {
            value: 'test',
        }
    }

    handleChange = () => {
      console.log('change here');
    };

    addToDo = todo => {
      console.log('todo: ', todo);
    };
    render(){
        return (
            <div>
                <input type={'text'} value={''} onChange={this.handleChange}/>
                <button onClick={() => this.addToDo(this.state.value)} className={'btn btn-main'}>Submit</button>
            </div>
        )
    }
}


export default ToDoInput