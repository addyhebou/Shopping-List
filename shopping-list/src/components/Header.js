import React, { Component } from 'react'

class Header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             text: this.props.currentItem.text
        }
    }

    handleInput = () =>{
        this.setState({text: this.state.text})
    }

    render() {
        console.log("The current item is: ", this.props.currentItem)
        return (
            <div>
                <form onSubmit = {this.addItem}>
                    <input
                        type = "text"
                        placeholder = "Enter task"
                        value = {this.state.text}
                        onChange = {this.handleInput}/>
                    <input onClick = {this.addTask} type = "submit"/>
                </form>
            </div>
        )
    }
}

export default Header
