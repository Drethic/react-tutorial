import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => (
                <BurgerIngredient key={igKey + i} type={igKey} />
            ));
        })
        .reduce((arr, el) => (arr.concat(el)), []);
        if (0 === transformedIngredients.length) {
            transformedIngredients = <p>Please start adding ingredients!</p>;
        }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;