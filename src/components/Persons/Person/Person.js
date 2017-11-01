import React from 'react';
import UserInput from '../../User/UserInput';

const person = (props) => (
    <div>
        <p onClick={props.clicked}>I am {props.name}, and I am {props.age}</p>
        <p>{props.children}</p>
        <UserInput change={props.changeName} name={props.name} id={props.id} label="Name: " />
        <UserInput change={props.changeAge} name={props.age} id={props.id} label="Age: " />
    </div>
);

export default person;
