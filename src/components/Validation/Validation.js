import React from 'react';

const validLength = 'Text long enough';
const invalidLength = 'Text too short';
const minLength = 5;

const lengthVal = (props) => (
    <p>{props.length < minLength ? invalidLength : validLength}</p>
);

export { lengthVal };
