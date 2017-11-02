// import React, { Component } from 'react';
import React, { PureComponent } from 'react';
import Radium from 'radium';
import './App.css';
import UserOutput from '../components/User/UserOutput';
import Persons from '../components/Persons/Persons';
import { lengthVal as Length } from '../components/Validation/Validation';
import Char from '../components/Char/Char';
import Cockpit from '../components/Cockpit/Cockpit';

// class App extends Component {
class App extends PureComponent {
    constructor(props) {
        super(props); //must be called since we are overriding Reacts default constructor
        console.log('[App.js] Inside Constructor', props);
    }

    componentWillMount() {
        console.log('[App.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[App.js] Inside componentDidMount()');
    }

    // Commented out because it's covered by PureComponent
    // shouldComponentUpdate(nextProps, nextState) {
    //     // State driven changes
    //     console.log('[UPDATE App.js] Inside shouldComponentUpdate()', nextProps, nextState);
    //     // return true; //Must return a bool - false kills the update process
    //     // return nextProps.persons !== this.props.persons;
    //     // return true; //Commenting out to check specific state items
    //     return nextState.persons !== this.state.persons ||
    //     nextState.showPersons !== this.state.showPersons;
    // }

    componentWillUpdate(nextProps, nextState) {
        // State driven changes
        console.log('[UPDATE App.js] Inside componentWillUpdate()', nextProps, nextState);
    }

    componentDidUpdate() {
        // State driven changes
        console.log('[UPDATE App.js] Inside componentDidUpdate()', this.props, this.state);
    }

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
        appPersons: [{
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
            age: 42,
            hobbies: 'Racing'
        }, {
            id: 'fourthPerson',
            name: 'bob',
            age: 12
        }, ],
        text: '',
        showOutput: false,
        showAge: false,
        showPersons: false,
        showTask1: false,
        showTask2: false,
        showMainApp: false,
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

    toggleTask2 = (event) => {
        this.setState({
            showTask2: !this.state.showTask2
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

    toggleMainApp = (event) => {
        this.setState({
            showMainApp: !this.state.showMainApp
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

    changeHandler = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    deleteLetterHandler = (key) => {
        const text = this.state.text.split('');
        text.splice(key, 1);
        this.setState({
            text: text.join('')
        });
    }

    stateModifyAppPersonNameHandler = (key, event) => {
        const persons = [...this.state.appPersons];
        const personIndex = persons.findIndex(p => (p.id === key));
        persons[personIndex].name = event.target.value;
        this.setState({
            appPersons: persons
        });
    }

    stateModifyAppPersonAgeHandler = (key, event) => {
        const persons = [...this.state.appPersons];
        const personIndex = persons.findIndex(p => (p.id === key));
        persons[personIndex].age = event.target.value;
        this.setState({
            appPersons: persons
        });
    }

    deletePersonHandler = (key) => {
        const persons = [...this.state.appPersons];
        persons.splice(key, 1);
        this.setState({
            appPersons: persons
        });
    }

    render() {
        console.log('[App.js] Inside render()');
        let output = null,
            age = null,
            task1 = null,
            task2 = null,
            persons = null,
            mainApp = null;

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
        }

        const appButtonStyle = {
            ...buttonStyle,
            backgroundColor: 'green',
            color: 'white',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        }

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

        if (this.state.showTask2) {
            task2 = (
                <div>
                    <ol>
                        <li>Create an input field( in App component) with a change listener which outputs the length of the entered text below it(e.g.in a paragraph).</li>
                        <li>Create a new component( => ValidationComponent) which receives the text length as a prop</li>
                        <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length(e.g.take 5 as a minimum length)</li>
                        <li>Create another component( => CharComponent) and style it as an inline box( => display: inline - block, padding: 16 px, text - align: center, margin: 16 px, border: 1 px solid black).</li>
                        <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text( in the initial input field) as a prop.</li>
                        <li> When you click a CharComponent, it should be removed from the entered text.</li>
                    </ol>
                    <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
                    <input type = "text" onChange = {this.changeHandler} value = {this.state.text} />
                    <p> Text Length: {this.state.text.length}</p><Length length={this.state.text.length} />
                    <Char text = {this.state.text} delete = {this.deleteLetterHandler} />
                </div>
            );
        }

        if (this.state.showMainApp) {
            appButtonStyle.backgroundColor = 'red';
            appButtonStyle[':hover'].backgroundColor = 'salmon';
            appButtonStyle[':hover'].color = 'black';
            const assignedClasses = [];
            if (this.state.appPersons.length <= 2) {
                assignedClasses.push('red');
            }
            if (this.state.appPersons.length <= 1) {
                assignedClasses.push('bold');
            }
            mainApp = (
                <div>
                    <p className = {assignedClasses.join(' ')} > This is really working! </p>
                    <Persons persons = {this.state.appPersons} clicked = {this.deletePersonHandler} changeName = {this.stateModifyAppPersonNameHandler} changeAge = {this.stateModifyAppPersonAgeHandler} />
                </div>
            );
        }

        return (
            <div className = "App">
                <button onClick={() => {this.setState({showPersons: true, showTask1: true})}}>Always True</button>
                <Cockpit appTitle = {this.props.title} />
                <button style = {buttonStyle} key = "task1" onClick = {this.toggleTask1}>Toggle Task 1</button>
                {task1}
                <button style = {buttonStyle} key = "task2" onClick = {this.toggleTask2}>Toggle Task 2</button>
                {task2}
                <button style = {appButtonStyle} key = "mainApp" onClick = {this.toggleMainApp}>Toggle Main App</button>
                {mainApp}
            </div>
        );
    }
}

export default Radium(App);
