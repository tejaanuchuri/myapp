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
  switchNameHandler = () => {
    //  console.log('was clicked...!');
    // don't do thid=>  this.state.person[0].name = 'jnani';

    this.setState({
      person:[
         { name : 'jnani' },
         { name : 'teja' },
         { name : 'suresh' }
      ]
    })
  } 
  render() {
    return(
      <div className="App">
      <h1> Hi, I'm React App </h1>
      <p> This is Really Cool..! </p>
      <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person name={this.state.person[0].name}> I'm computer science graduated...!</Person>
      <Person name ={this.state.person[1].name}/>
      <Person name ={this.state.person[2].name}/>    
      </div>
    ); 
  }
}

export default App;