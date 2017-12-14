import * as actionTypes from './actionTypes';
import axios from '../../axios';
import _ from 'lodash';
import queryString from 'query-string';

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData,
    };
};

export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BUGER_FAIL,
        error: error,
    };
};

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START,
    };
};

export const purchaseBurger = (orderData, token) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post('/orders.json?auth=' + token, orderData)
            .then(response => {
                console.log(response.data);
                dispatch(purchaseBurgerSuccess(response.data.name, orderData));
            })
            .catch(error => {
                console.log(error);
                dispatch(purchaseBurgerFail(error));
            });
    }
};

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT,
    };
};

export const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders,
    };
};

export const fetchOrdersFail = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: error,
    };
};

export const fetchOrderStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START,
    }
};

export const fetchOrders = (token, userId) => {
    return dispatch => {
        dispatch(fetchOrderStart());
        const query = {
            auth: token,
            orderBy: JSON.stringify("userId"),
            equalTo: JSON.stringify(userId)
        }
        console.log({queryString: queryString.stringify(query), token: token, userId: userId});
        axios.get('/orders.json?' + queryString.stringify(query))
            .then(response => {
                console.log(response.data);
                const fetchedOrders = _.map(response.data, (value, key) => (
                    {
                        ...value,
                        id: key,
                    }
                ));
                dispatch(fetchOrdersSuccess(fetchedOrders));
            })
            .catch(error => {
                console.log(error);
                dispatch(fetchOrdersFail(error));
            });
    };
};
