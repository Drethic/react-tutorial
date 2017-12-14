import React, { Component } from 'react';
import { connect } from 'react-redux';
// import React, { PureComponent } from 'react';
import Radium from 'radium';
import classes from './App.css';
import Cockpit from '../../components/Cockpit/Cockpit';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
// import WithClass from '../../hoc/WithClass/WithClass';
import withClassFunc from '../../hoc/WithClassFunc/withClassFunc';
import Layout from '../../hoc/Layout/Layout';
import BurgerBuilder from '../BurgerBuilder/BurgerBuilder';
import Checkout from '../Checkout/Checkout';
import Orders from '../Orders/Orders';
import Auth from '../Auth/Auth';
import Logout from '../Auth/Logout/Logout';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import * as actions from '../../store/actions';

class App extends Component {
// class App extends PureComponent {
//     constructor(props) {
//         super(props); //must be called since we are overriding Reacts default constructor
//         console.log('[App.js] Inside Constructor', props);
//     }

    componentWillMount() {
        console.log('[App.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[App.js] Inside componentDidMount()');
        this.props.onTryAutoSignUp();
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
        console.log('[UPDATE App.js] Inside componentWillUpdate()', this.props, nextProps, this.state, nextState);
    }

    componentDidUpdate() {
        // State driven changes
        console.log('[UPDATE App.js] Inside componentDidUpdate()', this.props, this.state);
    }

    state = {};

    render() {
        console.log('[App.js] Inside render()');

        let routes = (
            <Switch>
                <Route path="/checkout" component={Checkout} />
                <Route path="/tasks" component={Cockpit} />
                <Route path="/auth" component={Auth} />
                {this.props.isAuthenticated ? <Route path="/orders" component={Orders} /> : null}
                {this.props.isAuthenticated ? <Route path="/logout" component={Logout} /> : null}
                <Route path="/" exact component={BurgerBuilder} />
                <Redirect to="/" />
            </Switch>
        );

        return (
            //<WithClass classes="App">
            <Auxiliary>
                <Layout>
                    {routes}
                </Layout>
            </Auxiliary>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignUp: () => dispatch(actions.authCheckState()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withClassFunc(Radium(App), classes.App)));
