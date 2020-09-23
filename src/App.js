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
namechangeHandler =(event,id) => {
  const personIndex = this.state.person.findIndex(p => {
    return p.id === id;
  });
  
  const perSon = this.state.person[personIndex];

  perSon.name = event.targert.value;
  const person = [...this.state.person];
  person[personIndex] = perSon;

  this.setState({person:person})
}
  
  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  }
  render(){
    const style = {
      backgroundColor: 'green',
      color: 'white',
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
                    changed = {(event) => this.namechangeHandler(event,p.id)}/>
          })}   
        </div>
      );
       style.backgroundColor = 'blue';
    }

    let classes = [];
    if(this.state.person.length<=2){
        classes.push('red');
    }
    if(this.state.person.length<=1){
        classes.push('bold')
    }

    return(
      <div className="App">
        <h1> Hi, I'm React App </h1>
        <p className={classes.join(' ')}> This is Really Cool..! </p>
      <button style ={style} onClick={this.togglePersonHandler}>Switch Name</button>
      {person}
      </div>
    );
  }
}

export default App;


