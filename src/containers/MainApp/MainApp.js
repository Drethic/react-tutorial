import React, { Component } from 'react';
import Radium from 'radium';
import classes from './MainApp.css';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Persons from '../../components/Persons/Persons';

class MainApp extends Component {
    state = {
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
        showMainApp: false,
        toggleAppClicked: 0,
    };

    toggleMainApp = (event) => {
        this.setState((prevState, props) => (
            {
                showMainApp: !this.state.showMainApp,
                toggleAppClicked: prevState.toggleAppClicked + 1
            }
        ));
    };

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
        let mainApp = null;
        const buttonStyle = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid #ccc',
            padding: '8px',
            cursor: 'pointer',
            display: 'block',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        }

        if (this.state.showMainApp) {
            buttonStyle.backgroundColor = 'red';
            buttonStyle[':hover'].backgroundColor = 'salmon';
            buttonStyle[':hover'].color = 'black';
            const assignedClasses = [];
            if (this.state.appPersons.length <= 2) {
                assignedClasses.push(classes.red);
            }
            if (this.state.appPersons.length <= 1) {
                assignedClasses.push(classes.bold);
            }
            mainApp = (
                <div>
                    <p className={assignedClasses.join(' ')} > This is really working! </p>
                    <Persons
                        persons={this.state.appPersons}
                        clicked={this.deletePersonHandler}
                        changeName={this.stateModifyAppPersonNameHandler}
                        changeAge={this.stateModifyAppPersonAgeHandler}
                    />
                </div>
            );
        }

        return(
            <Auxiliary>
                <button style={buttonStyle} key="mainApp" onClick={this.toggleMainApp}>Toggle Main App</button>
                {mainApp}
            </Auxiliary>
        );
    }
}

export default Radium(MainApp);
