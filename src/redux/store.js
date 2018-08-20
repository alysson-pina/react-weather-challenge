import { applyMiddleware, combineReducers, createStore } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
// const reducer = combineReducers(reducers);

const store = createStoreWithMiddleware(reducers,
    window.devToolsExtension ? window.devToolsExtension() : f => f /*for debugging on React plugin on dev tools*/
);

// const store = createStore(reducers);
export default store;

