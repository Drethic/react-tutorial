import React from 'react';

const userInput = (props) => (
    <div>
        <label htmlFor={props.id}>{props.label}</label>
        <input ref={props.reference} type="text" onChange={props.change} id={props.id} value={props.name} />
    </div>
);

export default userInput;
