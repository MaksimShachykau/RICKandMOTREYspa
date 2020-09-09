import {charactersAPI} from '../API/API'

const SET_CHARACTERS_DATA = 'SET-CHARACTERS-DATA'
const initialState = {
    characterData: null
}

export const charactersInfoReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_CHARACTERS_DATA: 
            return{
                ...state,
                characterData: action.data
            }
        default:
            return state
    }
}


export const setCharactersData = (data) => ({type: SET_CHARACTERS_DATA, data});

export const getCharacterInfoThCr = (UserId) => (dispatch) => {
    charactersAPI.getCharacterInfo(UserId)
            .then(data => { 
                dispatch(setCharactersData(data));
            }); 
}