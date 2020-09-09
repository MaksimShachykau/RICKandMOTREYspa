import {charactersAPI} from '../API/API'

const SET_CHARACTERS = 'SET-CHARACTERS',
        SET_ALL_PAGES = 'SET-ALL-PAGES',
        SET_NEXT_PAGE = 'SET_NEXT_PAGE',
        SET_FILTER = 'SET_FILTER'
const initialState = {
    characters :[],
    allPages: 0,
    currentPage: 1,
    isFetching: true,
    filter: null
}

export const charactersReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_CHARACTERS:{ 
            return{
                ...state,
                characters: action.characters
            }
        }
        case SET_ALL_PAGES:{
            return{
                ...state,
                allPages: action.allPages
            }
        }
        case SET_NEXT_PAGE:{
            return{
                ...state,
                currentPage: action.nextPage
            }
        }
        case SET_FILTER: {
            return{
                ...state,
                filter: action.filter
            }
        }
        default:
            return state
    }
}


export const setCharacters = (characters) => ({type: SET_CHARACTERS, characters})
export const setAllPages = (allPages) => ({type:SET_ALL_PAGES, allPages})
export const setNexPage = (nextPage) => ({type:SET_NEXT_PAGE, nextPage})
export const setFilter = (filter) => ({type:SET_FILTER, filter})

export const getCharacterThCr = (currentPage) => {
    return (dispatch) => {
        charactersAPI.getCharacters(currentPage)
        .then(data => {
            dispatch(setCharacters(data.results));
            dispatch(setAllPages(data.info.pages));
        })
    }
}
export const getFilterThCr = (page, filter) => (dispatch) => {
        dispatch(setNexPage(page));
        dispatch(setFilter(filter));
        charactersAPI.getFilterCharacters(page, filter)
            .then(data => {
                dispatch(setCharacters(data.results));
                dispatch(setAllPages(data.info.pages));
            })
}



/*
setCurrentPageFilter = (page = this.props.currentPage, filter = null) => {
        this.props.setNexPage(page)
        this.props.setFilter(filter)
        charactersAPI.getFilterCharacters(page, filter)
            .then(data => {
                this.props.setCharacters(data.results)
                this.props.setAllPages(data.info.pages)
            })
    }
*/