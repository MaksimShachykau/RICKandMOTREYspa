import *as axios from 'axios';

const instanceAxios = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/'
})

   
export const charactersAPI =  {
    getCharacters: (currentPage) => {
        return( 
            instanceAxios.get(`character/?page=${currentPage}`)
        ).then(responce => responce.data)
    },
    getFilterCharacters: (page, filter) => {
        return(
            instanceAxios.get(`character/?page=${page}&${filter}`)
        ).then(responce => responce.data)
    },
    getCharacterInfo: (UserId) => {
        return(
            instanceAxios.get(`character/${UserId}`)
        ).then(responce=> responce.data)
    }
}
export const locationAPI = {
    getLocations: (currentPage) => {
        return(
            instanceAxios.get(`location/?page=${currentPage}`)
        ).then(responce => responce.data)
    },
    getNexPageLocations: () => {
        
    }
}