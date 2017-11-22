import React from 'react';
import classes from './Order.css';
import _ from 'lodash';

const order = (props) => {
    const ingredients = _.map(props.ingredients, (qty, name) => (
            {
                name: name,
                amount: qty,
            }
        ));

    const ingredientOutput = ingredients.map((ig) => (<span className={classes.OrderIngredient} key={ig.name}>{ig.name} ({ig.amount})</span>));

    return(
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>USD {props.price.toFixed(2)}</strong></p>
        </div>
    );
};

export default order;
