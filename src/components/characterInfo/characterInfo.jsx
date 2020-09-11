import React from 'react'
import style from './characterInfo.module.css'
import image from '../../assets/image/cb4.png'
import Human from '../../assets/Human.mp4'
import Alien from '../../assets/Alien.mp4'
import Robot from '../../assets/Robot.mp4'
import DiseaseVidio from '../../assets/Disease.mp4'
import Mythological from '../../assets/Mythological Creature.mp4'
import Animal from '../../assets/Animal.mp4'
import BasicVideo from '../../assets/Data1.mp4'
const CharacterInfo = (props) => {
    let data = props.characterData;
    if(data){
        console.log(data.species)
        return(
            <div className = {style.characterInfoBlock}> 
                <div className = {style.character}>
                    <video className = {style.bgVideo} autoPlay muted loop>
                        {data.species === 'Cronenberg' | data.species === 'Humanoid' | data.species === 'Poopybutthole' |
                         data.species === 'unknown'  ? 
                            (<source src={BasicVideo} type='video/mp4'></source>) : 
                            data.species === 'Human' ? (<source src={Human} type='video/mp4'></source>) :
                            data.species === 'Alien' ? (<source src={Alien} type='video/mp4'></source>) :
                            data.species === 'Robot' ? (<source src={Robot} type='video/mp4'></source>) :
                            data.species === 'Disease' ? (<source src={DiseaseVidio} type='video/mp4'></source>) :
                            data.species === 'Mythological Creature' ? (<source src={Mythological} type='video/mp4'></source>) : 
                            data.species === 'Animal' ? (<source src={Animal} type='video/mp4'></source>) : 
                        (<></>)}
                    </video>
                    <img src = {image} className = {style.bg}></img>
                    <img src={data.image} className = {style.characterImage} alt={data.name}/>
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
            </div>
        )
    }else{
        return(
            <></>
        )
    }
}

export default CharacterInfo