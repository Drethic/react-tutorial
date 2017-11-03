import React from 'react';
import classes from './Char.css';

const char = (props) => {
    return(
        <div>
            {props.text.split('').map((character, index) => (
                <span className={classes.Char} key={index} onClick={props.delete.bind(this, index)}>{character}</span>
            ))}
        </div>
    );
}

export default char;
