import Reducer from './reducer.js'
import {createStore} from 'redux';
const store=createStore(Reducer,
    window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION());
export default store;














