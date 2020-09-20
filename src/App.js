import React, { Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    person:[
      { name : 'teja' },
      { name : 'suresh' },
      { name : 'jnani' }
    ]
  } 
  render() {
    return(
      <div className="App">
      <h1> Hi, I'm React App </h1>
      <p> This is Really Cool..! </p>
      <button>Switch Name</button>
      <Person name={this.state.person[0].name}> I'm computer science graduated...!</Person>
      <Person name ={this.state.person[1].name}/>
      <Person name ={this.state.person[2].name}/>    
      </div>
    ); 
  }
}

export default App;