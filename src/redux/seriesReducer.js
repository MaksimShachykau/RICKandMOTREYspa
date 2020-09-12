const SET_DATA_IN_SERIES = 'SET_DATA_IN_SERIES',
    SET_DATA_SERIES = 'SET_DATA_SERIES'

const initialState = {
    sezon_1: [{
            url: 'https://www.youtube.com/embed/CjE-IeoXW5w',
            air_date: null,
            episode: null,
            id: null,
            name: null
        },
        {
            url: 'https://www.youtube.com/embed/AcVcwyG-5G4',
            air_date: null,
            episode: null,
            id: null,
            name: null
        },
        {
            url: 'https://www.youtube.com/embed/qFbYeN1ipZM',
            air_date: null,
            episode: null,
            id: null,
            name: null

        },
        {
            url: 'https://www.youtube.com/embed/i7hWaKw8xH4',
            air_date: null,
            episode: null,
            id: null,
            name: null
        },
        {
            url: 'https://www.youtube.com/embed/IirE4kgy49A',
            air_date: null,
            episode: null,
            id: null,
            name: null
        },
        {
            url: 'https://www.youtube.com/embed/iuiYMAt0_-M',
            air_date: null,
            episode: null,
            id: null,
            name: null
        },
        {
            url: 'https://www.youtube.com/embed/d5n5Y3doN60',
            air_date: null,
            episode: null,
            id: null,
            name: null
        },
        {
            url: 'https://www.youtube.com/embed/HgWSo1N--zA',
            air_date: null,
            episode: null,
            id: null,
            name: null
        },
        {
            url: 'https://www.youtube.com/embed/VwccQriWpzc',
            air_date: null,
            episode: null,
            id: null,
            name: null
        },
        {
            url: 'https://www.youtube.com/embed/BElYkcI25HE',
            air_date: null,
            episode: null,
            id: null,
            name: null
        },
        {
            url: 'https://www.youtube.com/embed/S6aL29sOEBI',
            air_date: null,
            episode: null,
            id: null,
            name: null
        },
    ],

    sezon_2: [

    ],
    sezon_3: [

    ],
    sezon_4: [

    ]
}

export const seriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA_IN_SERIES: {
            return {
                ...state,
                sezon_1_data: action.data
            }
        }
        case SET_DATA_SERIES: {
            return {


            }
        }
        default:
            return state
    }
}
export const setDataInSeries = (data) => ({
    type: SET_DATA_IN_SERIES,
    data
})
export const setDataSeries = (url, air_date, episode, id, name) => ({
    type: SET_DATA_SERIES,
    url,
    air_date,
    episode,
    id,
    name
})