import React from 'react';
const person  = (props) => {
    return(
        <div>
            <p onClick={props.click}> I'm a {props.name}..! and I am {Math.floor(Math.random()*30)} years old.  </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}></input>
        </div>
    )
}

export default person ;

