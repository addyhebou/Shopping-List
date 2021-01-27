import './App.css';
import Header from './components/Header'

import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       items:[],
       currentItem:{
         text:'',
         key:''
       }
    }
  }

  // addItem = () =>{
  //   this.setState({items: this.state.items.push("prop")})
  // }

  addItem = () =>{
    this.setState({items: this.state.items.push(this.state.key)});
  }

  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now,
      }
    })
  }
  
  render() {
    return (
      <div>
        <h1>Shopping List</h1>
        {/* <Header currentItem = {this.state.currentItem.text}/> */}
        <form onSubmit = {this.addItem}>
          <input
              type = "text"
              placeholder = "Enter task"
              value = {this.state.text}
              onChange = {this.handleInput}/>
          <input onClick = {this.addItem} type = "submit"/>
        </form>
      </div>
    )
  }
}


export default App;
