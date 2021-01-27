import React, { Component } from 'react'

class Task extends Component {
    render() {
        return (
            <div>
                <p>{this.props.taskName}</p>
            </div>
        )
    }
}

export default Task
