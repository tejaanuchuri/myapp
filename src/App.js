import React, { Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return(
      <div className="App">
      <h1> Hi, I'm React App </h1>
      <p> This is Really Cool..! </p>
      <Person name="Teja"> I'm computer science graduated...!</Person>
      <Person name ="suresh"/>
      <Person name ="shiva" />    
      </div>
    ); 
  }
}

export default App;