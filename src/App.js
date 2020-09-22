import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component{
  state = ({
    person: [
      { id:'agcdhgf',name : 'teja' },
      { id:'agcdh', name : 'suresh' },
      { id:'aghgf', name : 'jnani' }
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

deletePersonHandler = (personIndex) =>{
  //const person = this.state.person; // slice apprach
  const person = [...this.state.person];
  person.splice(personIndex,1);
  this.setState({person:person})
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

    let person = null;
    if(this.state.showPerson){
      person = (
        <div>
          {this.state.person.map((p,index) => {
            return <Person 
                    key = {p.id}
                    click ={() => this.deletePersonHandler(index)} 
                    name={p.name} 
                    changed = {this.namechangeHandler}/>
          })}   
        </div>
      );
    }
    return(
      <div className="App">
        <h1> Hi, I'm React App </h1>
        <p> This is Really Cool..! </p>
      <button style ={style} onClick={this.togglePersonHandler}>Switch Name</button>
      {person}
      </div>
    );
  }
}

export default App;


