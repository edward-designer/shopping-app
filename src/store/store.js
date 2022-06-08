import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
//import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'

import { rootReducer } from './root-reducer';
import { rootSaga } from './root-saga';

const persistConfig = {
    key: 'root',  // the root level
    storage,
    whitelist: ['cart'],
}

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig,rootReducer);

//const middlewares = [process.env.NODE_ENV === 'development' && logger, thunk].filter(Boolean);
const middlewares = [process.env.NODE_ENV === 'development' && logger, sagaMiddleware].filter(Boolean);

// use chrome redux devtools
const composeEnhancer = (process.env.NODE_ENV !== 'development' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composeEnhancers = composeEnhancer(applyMiddleware(...middlewares));

//export const store = createStore(rootReducer, undefined, composeEnhancers);
export const store = createStore(persistedReducer, undefined, composeEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);