import React, { Component } from 'react';
import UserInput from '../../User/UserInput';

class Person extends Component {
    render() {
        return(
            <div>
                <p onClick={this.props.clicked}>I am {this.props.name}, and I am {this.props.age}</p>
                <p>{this.props.children}</p>
                <UserInput change={this.props.changeName} name={this.props.name} id={this.props.id} label="Name: " />
                <UserInput change={this.props.changeAge} name={this.props.age} id={this.props.id} label="Age: " />
            </div>
        );
    }
};

export default Person;
