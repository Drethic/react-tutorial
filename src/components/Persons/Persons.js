import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    render() {
        return (<div>
        {this.props.persons.map((person, index) => (
            <Person
                name={person.name}
                key={person.id}
                id={person.id}
                age={person.age}
                clicked={this.props.clicked ? this.props.clicked.bind(this, index) : null}
                changeName={this.props.changeName.bind(this, person.id)}
                changeAge={this.props.changeAge.bind(this, person.id)}
            />
        ))}
        </div>);
    }
};

export default Persons;
