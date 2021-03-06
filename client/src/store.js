import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = [thunk];
const initialState = {};

const store = createStore( //parameters
    //when we dont have yet reducers, data, 
    /* () => [],                                   //reducer
       {},                                         // preloaded data
       applyMiddleware(...middleware) */           //enhancer
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);


export default store;