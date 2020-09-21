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
    ],
    showPerson : false
  })
}
namechangeHandler =(event) => {
  this.setState({
    person : [
      { name:'ramana'},
      { name:'rajitha'},
      { name: event.target.value}
    ]
  })
}
  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  }
  render(){
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border : '1px solid blue',
      padding : '8px'
    };
    return(
      <div className="App">
        <h1> Hi, I'm React App </h1>
        <p> This is Really Cool..! </p>
      <button style ={style} onClick={this.togglePersonHandler}>Switch Name</button>
      {
        this.state.showPerson === true ?
        <div>
          <Person name={this.state.person[0].name} click = {this.switchNameHandler.bind(this,'gojenjiii')} />
          <Person name ={this.state.person[1].name} />
          <Person name ={this.state.person[2].name} changed = {this.namechangeHandler} />    
        </div> : null
      }
      </div>
    );
  }
}

export default App;


