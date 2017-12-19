import { combineReducers } from 'redux';
import Home from './Home'
 

 
export default function getReducers(navReducer) {
    return combineReducers({
        Home,
        nav: navReducer
    });
}
