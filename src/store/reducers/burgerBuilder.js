import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
    building: false,
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            const addIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] + 1};
            const addIngredients = updateObject(state.ingredients, addIngredient);
            const addUpdatedState = {
                ingredients: addIngredients,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
                building: true,
            };
            return updateObject(state, addUpdatedState);

        case actionTypes.REMOVE_INGREDIENT:
            const removeIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] - 1};
            const removeIngredients = updateObject(state.ingredients, removeIngredient);
            const removeUpdatedState = {
                ingredients: removeIngredients,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
                building: true,
            };
            return updateObject(state, removeUpdatedState);

        case actionTypes.SET_INGREDIENTS:
            return updateObject(state, {
                ingredients: action.ingredients,
                totalPrice: 4,
                error: false,
                building: false,
            });

        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return updateObject(state, {error: true});

        default:
            return state;
    }
};

export default reducer;
