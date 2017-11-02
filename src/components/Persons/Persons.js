import React from 'react';
import Person from './Person/Person';

const persons = (props) => (
    <div>
    {props.persons.map((person, index) => (
        <Person
            name={person.name}
            key={person.id}
            id={person.id}
            age={person.age}
            clicked={props.clicked ? props.clicked.bind(this, index) : null}
            changeName={props.changeName.bind(this, person.id)}
            changeAge={props.changeAge.bind(this, person.id)}
        />
    ))}
    </div>
);

export default persons;
