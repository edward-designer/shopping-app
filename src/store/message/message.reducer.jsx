import { MESSAGE_ACTION_TYPES } from './message.type'

const INITIAL_STATE = {
    message: null,
    showMessage: false,
};

export const messageReducer = (state = INITIAL_STATE, action) => { 
    const { type, payload } = action;
    switch (type) {
        case MESSAGE_ACTION_TYPES.SET_MESSAGE:
            return {
                ...state, 
                message: payload
            }
        case MESSAGE_ACTION_TYPES.SHOW_MESSAGE:
             return {
                ...state, 
                showMessage: payload
            }    
        default: 
            return state; 
    }
}


