import React, { Component } from 'react';
import Radium from 'radium';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Persons from '../../components/Persons/Persons';
import UserOutput from '../../components/User/UserOutput';

class Task1 extends Component {
    state = {
        names: [
            "first",
            "second",
            "third",
            "bob",
        ],
        ages: [
            23,
            27,
            42,
            12,
        ],
        persons: [{
            id: 'firstPerson',
            name: 'first',
            age: 23
        }, {
            id: 'secondPerson',
            name: 'second',
            age: 27
        }, {
            id: 'thridPerson',
            name: 'thrid',
            age: 42
        }, {
            id: 'fourthPerson',
            name: 'bob',
            age: 12
        }, ],
        showOutput: false,
        showAge: false,
        showPersons: false,
        showTask1: false,
    };

    stateModifyHandler = (key, event) => {
        let names = [...this.state.names];
        names[key] = event.target.value;
        this.setState({
            names: names
        });
    };

    toggleTask1 = (event) => {
        this.setState({
            showTask1: !this.state.showTask1
        });
    };

    toggleOutput = (event) => {
        this.setState({
            showOutput: !this.state.showOutput
        });
    };

    toggleAge = (event) => {
        this.setState({
            showAge: !this.state.showAge
        });
    };

    togglePersons = (event) => {
        this.setState({
            showPersons: !this.state.showPersons
        });
    };

    stateModifyPersonNameHandler = (key, event) => {
        const persons = [...this.state.persons];
        const personIndex = persons.findIndex(p => (p.id === key));
        persons[personIndex].name = event.target.value;
        this.setState({
            persons: persons
        });
    }

    stateModifyPersonAgeHandler = (key, event) => {
        const persons = [...this.state.persons];
        const personIndex = persons.findIndex(p => (p.id === key));
        persons[personIndex].age = event.target.value;
        this.setState({
            persons: persons
        });
    }

    render() {
        let output = null,
            age = null,
            task1 = null,
            persons = null;

        const buttonStyle = {
            backgroundColor: '#eee',
            color: 'black',
            font: 'inherit',
            border: '1px solid #ccc',
            padding: '8px',
            cursor: 'pointer',
            display: 'block',
            ':hover': {
                backgroundColor: '#aaa',
                color: 'white'
            }
        };

        if (this.state.showPersons) {
            persons = (
                <Persons
                    persons = {this.state.persons}
                    changeName = {this.stateModifyPersonNameHandler}
                    changeAge = {this.stateModifyPersonAgeHandler}
                />
            );
        }

        if (this.state.showOutput) {
            output = (
                <div>
                    {this.state.names.map((name, key) => (
                        <UserOutput
                            name = {name}
                            key = {key}
                            change = {this.stateModifyHandler.bind(this, key)}
                        />
                    ))}
                </div>
            );
        }

        if (this.state.showAge) {
            age = ( < div > < p > States
                for Ages array: {
                    this.state.ages.join(', ')
                } < /p></div >
            );
        }

        if (this.state.showTask1) {
            task1 = (
                <div>
                    <ol>
                        <li>Create TWO new components: UserInput and UserOutput </li>
                        <li>UserInput should hold an input element, UserOutput two paragraphs</li>
                        <li>Output multiple UserOutput components in the App component(any paragraph texts of your choice)</li>
                        <li>Pass a username(of your choice) to UserOutput via props and display it there</li>
                        <li>Add state to the App component( => the username) and pass the username to the UserOutput component</li>
                        <li>Add a method to manipulate the state( => an event - handler method)</li>
                        <li>Pass the event - handler method reference to the UserInput component and bind it to the input - change event</li>
                        <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
                        <li>Add two - way - binding to your input( in UserInput) to also display the starting username</li>
                        <li> Add styling of your choice to your components/elements in the components - both with inline styles and stylesheets</li>
                    </ol>
                    <button className = "btn" onClick = {this.toggleOutput}>Toggle Output</button>
                    {output}
                    <button className = "btn" onClick = {this.toggleAge}>Toggle Age</button>
                    {age}
                    <button className = "btn" onClick = {this.togglePersons}>Toggle Persons</button>
                    {persons}
                </div>
            );
        }

        return(
            <Auxiliary>
                <button onClick={() => {this.setState({showPersons: true, showTask1: true})}}>Always True</button>
                <button style={buttonStyle} key="task1" onClick={this.toggleTask1}>Toggle Task 1</button>
                {task1}
            </Auxiliary>
        );
    }
}

export default Radium(Task1);
