// import React, { Component } from 'react';
import React, { PureComponent } from 'react';
import Radium from 'radium';
import classes from './App.css';
import Cockpit from '../../components/Cockpit/Cockpit';
import Auxiliary from '../../hoc/Auxiliary';
// import WithClass from '../../hoc/WithClass';
import withClassFunc from '../../hoc/withClassFunc';

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

    state = {};

    render() {
        console.log('[App.js] Inside render()');

        return (
            //<WithClass classes="App">
            <Auxiliary>
                <Cockpit appTitle = {this.props.title} />
            </Auxiliary>
        );
    }
}

export default withClassFunc(Radium(App), classes.App);
