import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
    render(){
        return (
            <div>
                <h1>React To-Do List</h1>
                <h3>You can click on ToDo item to change it color.</h3>
            </div>
        )
    }
}

export default Header