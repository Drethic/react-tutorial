import React from 'react';
import UserInput from './UserInput';
import './User.css';

const style = {
    margin: '10px auto',
    padding: '10px 0'
}

const userOutput = (props) => (
    <div style={style} className="User">
        <p>Passed name: {props.name}</p>
        <p>This is the first paragraph.</p>
        <p>This is the second paragraph.</p>
        <UserInput change={props.change} name={props.name} />
    </div>
);

export default userOutput;
