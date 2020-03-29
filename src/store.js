import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';

import rootReducer from './reducers';

export default createStore(rootReducer, composeWithDevTools(
    applyMiddleware(reduxThunk)
));
