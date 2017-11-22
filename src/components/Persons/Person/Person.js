import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserInput from '../../User/UserInput';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';

class Person extends Component {
    constructor(props) {
        super(props); //must be called since we are overriding Reacts default constructor
        console.log('[Person.js] Inside Constructor', props);
    }

    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount()');
        if (0 === this.props.position) {
            this.inputElement.focus();
        }
    }

    componentWillUnmount() {
        // Component is about to get removed => Perform any cleanup work here!
        console.log('I\'m about to be removed!');
        console.log('[Person.js] Inside componentWillUnmount()');
    }

    render() {
        console.log('[Person.js] Inside render()');
        return(
            <Auxiliary>
                <p onClick={this.props.clicked}>I am {this.props.name}, and I am {this.props.age}</p>
                <p>{this.props.children}</p>
                <UserInput reference={(input) => {this.inputElement = input}} change={this.props.changeName} name={this.props.name} id={this.props.id} label="Name: " />
                <UserInput change={this.props.changeAge} name={this.props.age} id={this.props.id} label="Age: " />
            </Auxiliary>
        );
    }
};

Person.propTypes = {
    clicked: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changeName: PropTypes.func,
    changeAge: PropTypes.func,
    id: PropTypes.string
}

export default Person;
