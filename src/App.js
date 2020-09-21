import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component{
  state = ({
    person: [
      { name : 'teja' },
      { name : 'suresh' },
      { name : 'jnani' }
    ]
  });  

switchNameHandler = (newName) => {
  //  console.log('was clicked...!');
  // don't do thid=>  this.state.person[0].name = 'jnani';

  this.setState({
    person: [
       { name : 'jnani' },
       { name : 'teja' },
       { name : newName }
    ]
  })
}
namechangeHandler =(event) => {
  this.setState({
    person : [
      { name: event.target.value },
      { name: event.target.value },
      { name: event.target.value}
    ]
  })
}
  render(){
    return(
      <div className="App">
        <h1> Hi, I'm React App </h1>
        <p> This is Really Cool..! </p>
      <button onClick={this.switchNameHandler.bind(this,'kiduo')}>Switch Name</button>
      <Person name={this.state.person[0].name} click = {this.switchNameHandler.bind(this,'gojenjiii')} changed = {this.namechangeHandler}/>
      <Person name ={this.state.person[1].name} changed = {this.namechangeHandler} />
      <Person name ={this.state.person[2].name} changed = {this.namechangeHandler} />    
      </div>
    );
  }
}

export default App;


