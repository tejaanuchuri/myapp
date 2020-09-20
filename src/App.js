import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {
  const [personState, setPersonState] =  useState({
    person: [
      { name : 'teja' },
      { name : 'suresh' },
      { name : 'jnani' }
    ]
  });  

console.log(personState);
const switchNameHandler = () => {
  //  console.log('was clicked...!');
  // don't do thid=>  this.state.person[0].name = 'jnani';

 setPersonState({
    person:[
       { name : 'jnani' },
       { name : 'teja' },
       { name : 'suresh' }
    ]
  });
}; 
  return(
      <div className="App">
        <h1> Hi, I'm React App </h1>
        <p> This is Really Cool..! </p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personState.person[0].name}> I'm computer science graduated...!</Person>
      <Person name ={personState.person[1].name}/>
      <Person name ={personState.person[2].name}/>    
      </div>
    );
}

export default App;


