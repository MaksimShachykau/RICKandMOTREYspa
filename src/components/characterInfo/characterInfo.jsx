import React from 'react'
import style from './characterInfo.module.css'


const CharacterInfo = (props) => {
    let data = props.characterData;
    if(props.characterData){
        return(

            <div className = {style.character}>
                <img src={data.image} alt={data.name}/>
                <div className = {style.characterInfo}>
                    <h3>{data.name}</h3>    
                    <p>SPECIES : {data.species}</p>
                    <p>GENDER : {data.gender}</p>
                    <p>STATUS : {data.status}</p>
                    <p>LOCATION : {data.location.name}</p>
                    <p>ORIGINAL CHARACTER : {data.name} from {data.origin.name}</p>
                    <p>participated in {data.episode.length} episodes</p>
                </div>
            </div>
        )
    }else{
        return(
            <></>
        )
    }
}

export default CharacterInfo