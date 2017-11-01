import React from 'react';
import './Char.css';

const char = (props) => {
    return(
        <div>
            {props.text.split('').map((character, index) => (
                <span className="Char" key={index} onClick={props.delete.bind(this, index)}>{character}</span>
            ))}
        </div>
    );
}

export default char;
