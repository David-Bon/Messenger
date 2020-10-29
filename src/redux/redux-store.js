import {applyMiddleware, combineReducers, createStore} from "redux";
import {Reducer} from "./reducer";
import thunk from "redux-thunk";


const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {};

const reducers = combineReducers({
    Reducer
})

let store = createStore(reducers, persistedState, applyMiddleware(thunk));

store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
});

window.store = store;

export default store