import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    constructor(props) {
        super(props); //must be called since we are overriding Reacts default constructor
        console.log('[Persons.js] Inside Constructor', props);
    }

    componentWillMount() {
        console.log('[Persons.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Persons.js] Inside componentDidMount()');
    }

    componentWillUnmount() {
        // Component is about to get removed => Perform any cleanup work here!
        console.log('I\'m about to be removed!');
        console.log('[Persons.js] Inside componentWillUnmount()');
    }

    render() {
        console.log('[Persons.js] Inside render()');
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
