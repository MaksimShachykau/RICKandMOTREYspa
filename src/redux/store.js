import {createStore, combineReducers, applyMiddleware} from 'redux';
import {charactersReducer} from './characterReducer'
import {seriesReducer} from './seriesReducer' 
import {charactersInfoReducer} from './characterInfoReducer'
import {locationsReducer} from './locationReducer'
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    charactersPage: charactersReducer,
    seriesPage: seriesReducer,
    charactersInfo: charactersInfoReducer,
    locationsPage: locationsReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;