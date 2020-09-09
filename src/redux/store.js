import {createStore, combineReducers, applyMiddleware} from 'redux';
import {charactersReducer} from './characterReducer'
import {seriesReducer} from './seriesReducer' 
import {charactersInfoReducer} from './characterInfoReducer'
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    charactersPage: charactersReducer,
    seriesPage: seriesReducer,
    charactersInfo: charactersInfoReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;