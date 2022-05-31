import { MESSAGE_ACTION_TYPES } from './message.type';

export const setMessage = (message) => ({type: MESSAGE_ACTION_TYPES.SET_MESSAGE, payload: message});

export const setShowMessage = (showMessage) => ({type: MESSAGE_ACTION_TYPES.SHOW_MESSAGE, payload: showMessage});