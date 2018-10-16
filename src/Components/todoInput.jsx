import React, { Component } from 'react';
import './todoInput.css'

class todoInput extends Component {
    constructor(props){
        super(props);

        this.state = {

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

export default todoInput