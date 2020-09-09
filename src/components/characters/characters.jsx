import React from 'react'
import style from './characters.module.css'
import {NavLink} from 'react-router-dom'

const Characters = (props) => {
    
    /*created: "2017-11-04T18:50:21.651Z"
        episode: (41) ["https://rickandmortyapi.com/api/episode/1", "https://rickandmortyapi.com/api/episode/2", "https://rickandmortyapi.com/api/episode/3", "https://rickandmortyapi.com/api/episode/4", "https://rickandmortyapi.com/api/episode/5", "https://rickandmortyapi.com/api/episode/6", "https://rickandmortyapi.com/api/episode/7", "https://rickandmortyapi.com/api/episode/8", "https://rickandmortyapi.com/api/episode/9", "https://rickandmortyapi.com/api/episode/10", "https://rickandmortyapi.com/api/episode/11", "https://rickandmortyapi.com/api/episode/12", "https://rickandmortyapi.com/api/episode/13", "https://rickandmortyapi.com/api/episode/14", "https://rickandmortyapi.com/api/episode/15", "https://rickandmortyapi.com/api/episode/16", "https://rickandmortyapi.com/api/episode/17", "https://rickandmortyapi.com/api/episode/18", "https://rickandmortyapi.com/api/episode/19", "https://rickandmortyapi.com/api/episode/20", "https://rickandmortyapi.com/api/episode/21", "https://rickandmortyapi.com/api/episode/22", "https://rickandmortyapi.com/api/episode/23", "https://rickandmortyapi.com/api/episode/24", "https://rickandmortyapi.com/api/episode/25", "https://rickandmortyapi.com/api/episode/26", "https://rickandmortyapi.com/api/episode/27", "https://rickandmortyapi.com/api/episode/28", "https://rickandmortyapi.com/api/episode/29", "https://rickandmortyapi.com/api/episode/30", "https://rickandmortyapi.com/api/episode/31", "https://rickandmortyapi.com/api/episode/32", "https://rickandmortyapi.com/api/episode/33", "https://rickandmortyapi.com/api/episode/34", "https://rickandmortyapi.com/api/episode/35", "https://rickandmortyapi.com/api/episode/36", "https://rickandmortyapi.com/api/episode/37", "https://rickandmortyapi.com/api/episode/38", "https://rickandmortyapi.com/api/episode/39", "https://rickandmortyapi.com/api/episode/40", "https://rickandmortyapi.com/api/episode/41"]
        gender: "Male"
        id: 2
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
        location: {name: "Earth (Replacement Dimension)", url: "https://rickandmortyapi.com/api/location/20"}
        name: "Morty Smith"
        origin: {name: "Earth (C-137)", url: "https://rickandmortyapi.com/api/location/1"}
        species: "Human"
        status: "Alive"
        type: ""
        url: "https://rickandmortyapi.com/api/character/2" 
    */ 
    let allPages = []
        for(let i = 1; i <= props.allPages; i++){
            allPages.push(i)
        }

    let filterGender = ['female', 'male', 'genderless', 'unknown'];
    let filterStatus  = ['alive', 'dead', 'unknown'];
    let species = ["Humanoid", "human", "alien", "Poopybutthole", "Mythological", "Disease", "Cronenberg", "Animal", "Robot", "unknown"]
    
    return (
        <div >
            <div className = {style.navCharacterBlock}>
                {allPages.map(el => (<span className = {props.currentPage === el ? style.active : style.point} onClick = {() => props.setCurrentPageFilter(el, props.filter)} key = {el}>{el}</span>))}
            </div>
            <div className = {style.filtersBlock}>Filter
                <div className = {style.filterBlock}>
                    <h4>Gender</h4>
                    {filterGender.map(el => (<span className = {props.filter === `gender=${el}` ? style.activeFilterPoint : style.filterPoint} onClick = {() => props.setCurrentPageFilter(1, `gender=${el}` )} key = {el}>{el}</span>))}
                </div>
                <div className = {style.filterBlock}>
                    <h4>Status</h4>
                    {filterStatus.map(el => (<span className = {props.filter === `status=${el}` ? style.activeFilterPoint : style.filterPoint} onClick = {() => props.setCurrentPageFilter(1, `status=${el}` )} key = {el}>{el}</span>))}
                </div>
                <div className = {style.filterBlock}>
                    <h4>species</h4>
                    {species.map(el => (<span className = {props.filter === `species=${el}` ? style.activeFilterPoint : style.filterPoint} onClick = {() => props.setCurrentPageFilter(1, `species=${el}` )} key = {el}>{el}</span>))}
                </div>

            </div>
            <div className = {style.characterBlock}>
            {props.characters.map(el => (
                 <div className = {style.character} key = {el.id}>
                    <NavLink to = {`/character/${el.id}`}>
                        <img src = {el.image}/>
                    </NavLink>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Characters;