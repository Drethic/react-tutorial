import * as actionTypes from '../actions';

const initialState = {
    price: 4
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_PRICE:
            return state;

        default:
            return state;
    }
};

export default reducer;
