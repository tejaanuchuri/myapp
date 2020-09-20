import React, { createElement } from 'react';
import './App.css';

function App() {
  render(){
    return React.createElement('div',className={'App'},React.createElement('h1',className={'App-child'},'Hello Teja...!'));
  }
}

export default App;
createElemen