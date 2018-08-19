import { applyMiddleware, combineReducers, createStore } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

const crateStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const reducer = combineReducers(reducers);

const store = crateStoreWithMiddleware(reducer,
    window.devToolsExtension ? window.devToolsExtension() : f => f /*for debugging on React plugin on dev tools*/
);

export default store;


