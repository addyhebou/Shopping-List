import './App.css';
import Header from './components/Header'
import ListItems from './ListItems'

import React, { Component } from 'react'
// import { library }

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
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }


  // addItem = () =>{
  //   this.setState({items: this.state.items.push("prop")})
  // }

  addItem(e){
    e.preventDefault(); 
    const newItem = this.state.currentItem;
    console.log(newItem.text, newItem.key);
    if (newItem.text != ""){
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem:{
          text:'',
          key:''
        }
      })
    }
  }

  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now(),
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
        <ListItems items ={this.state.items} />
      </div>
    )
  }
}


export default App;
