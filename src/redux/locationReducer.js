import {
    locationAPI
} from '../API/API'
const SET_LOCATIONS = 'SET-LOCATIONS',
    SET_ALL_PAGES = 'SET-ALL-PAGES',
    SET_NEXT_PAGE = 'SET_NEXT_PAGE',
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
        case SET_ALL_PAGES: {
            return {
                ...state,
                allPages: action.allPages
            }
        }
        case SET_NEXT_PAGE: {
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
    type: SET_ALL_PAGES,
    allPages
})
export const setNexPage = (nextPage) => ({
    type: SET_NEXT_PAGE,
    nextPage
})

export const getLocationsThCr = (currentPage) => (dispatch) => {
    locationAPI.getLocations(currentPage)
        .then(data => {
            dispatch(setLocation(data.results));
            dispatch(setAllPages(data.info.pages));
            dispatch(setNexPage(currentPage));

        })
}