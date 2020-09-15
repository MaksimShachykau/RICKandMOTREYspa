import {
    locationAPI
} from '../API/API'
const SET_LOCATIONS = 'SET-LOCATIONS',
    SET_ALL_PAGES_LOC = 'SET-ALL-PAGES-LOC',
    SET_NEXT_PAGE_LOC = 'SET_NEXT_PAGE_LOC',
    SET_IMAGE_RESIDENT = 'SET_IMAGE_RESIDENT'

const initialState = {
    locations: [],
    allPages: 0,
    currentPage: 1,
    isFetching: true,
    filter: null,
    residentsImg: []
}

export const locationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOCATIONS: {
            return {
                ...state,
                locations: action.locations
            }
        }
        case SET_ALL_PAGES_LOC: {
            return {
                ...state,
                allPages: action.allPages
            }
        }
        case SET_NEXT_PAGE_LOC: {
            return {
                ...state,
                currentPage: action.nextPage
            }
        }
        case SET_IMAGE_RESIDENT: {
            return {
                ...state,
                residentsImg: action.images

            }
        }
        default:
            return state
    }
}


export const setLocation = (locations) => ({
    type: SET_LOCATIONS,
    locations
})
export const setImageResident = (images, id) => ({
    type: SET_IMAGE_RESIDENT,
    images,
    id
})
export const setAllPages = (allPages) => ({
    type: SET_ALL_PAGES_LOC,
    allPages
})
export const setNexPage = (nextPage) => ({
    type: SET_NEXT_PAGE_LOC,
    nextPage
})

export const getLocationsThCr = (currentPage) => (dispatch) => {
    dispatch(setNexPage(currentPage));
    locationAPI.getLocations(currentPage)
        .then(data => {
            dispatch(setLocation(data.results));
            dispatch(setAllPages(data.info.pages));
        })
}