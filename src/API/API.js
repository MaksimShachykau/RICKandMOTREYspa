import *as axios from 'axios';

const instanceAxios = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/'
})
/*

const instanceAxios = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers:{'API-KEY': 'c04a6b20-2980-47da-9776-18429c0b4a30'}
})


export const charactersAPI = {
    getUsers: (currentPage, usersInPage) => {
        return(
            instanceAxios.get(`users?page=${currentPage}&count=${usersInPage}`)
        ).then(response => response.data)
    }
} 
    */
   
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