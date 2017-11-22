import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import _ from 'lodash';

class Orders extends Component {
    state = {
        orders: [],
        loading: true,
    };

    componentDidMount() {
        axios.get('/orders.json')
            .then(response => {
                const fetchedOrders = _.map(response.data, (value, key) => (
                    {
                        ...value,
                        id: key,
                    }
                ));
                this.setState({loading: false, orders: fetchedOrders});
            })
            .catch(error => {
                console.log(error);
                this.setState({loading: false});
            });
    }

    render() {
        return(
            <div>
                {this.state.orders.map(order => (
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={+order.price}
                    />
                ))}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);
