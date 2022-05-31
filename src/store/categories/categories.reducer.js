import { CATEGORIES_ACTION_TYPES } from './categories.type'

const INITIAL_STATE = {
    categories: []
};

// provider

export const categoriesReducer = (state = INITIAL_STATE, action={}) => { //receive every action!!!
    const { type, payload } = action;

    switch (type) {
        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
            return {
                ...state, 
                categories: payload
            }
        default: 
            return state; 
    }
}

