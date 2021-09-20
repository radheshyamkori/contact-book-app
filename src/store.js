import {createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index';





//const store = createStore(contactReducer, composeWithDevTools());
const store = createStore(rootReducer, composeWithDevTools());

export default store;   