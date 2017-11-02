// import React, { Component } from 'react';
import React, { PureComponent } from 'react';
import Person from './Person/Person';

// class Persons extends Component {
class Persons extends PureComponent {
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

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.js] Inside componentWillReceiveProps()', nextProps);
    }

    // Covered automatically by PureComponent
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[UPDATE Persons.js] Inside shouldComponentUpdate()', nextProps, nextState);
    //     // return true; //Must return a bool - false kills the update process
    //     return nextProps.persons !== this.props.persons;
    //     // return true; //Overriding so that our Always True button works.
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] Inside componentWillUpdate()', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('[UPDATE Persons.js] Inside componentDidUpdate()', this.props, this.state);
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
                position={index}
                clicked={this.props.clicked ? this.props.clicked.bind(this, index) : null}
                changeName={this.props.changeName.bind(this, person.id)}
                changeAge={this.props.changeAge.bind(this, person.id)}
            />
        ))}
        </div>);
    }
};

export default Persons;
