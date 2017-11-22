import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import queryString from 'query-string';
import _ from 'lodash';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    state = {
        ingredients: null,
        price: 0,
    }

    componentWillMount() {
        if (this.props.location.search) {
            const search = queryString.parse(this.props.location.search);
            let ingredients = {};
            _.forEach(JSON.parse(search.ingredients), (qty, ing) => ingredients[ing] = +qty);
            this.setState({ingredients: ingredients, price: +search.price});
        }
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    };

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    };

    render() {
        return(
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}
                />
                <Route path={this.props.match.path + '/contact-data'} render={(props) => <ContactData ingredients={this.state.ingredients} price={this.state.price} {...this.props} />} />
            </div>
        );
    }
}

export default Checkout;
