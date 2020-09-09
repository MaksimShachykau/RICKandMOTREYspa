import React from 'react'
import style from './home.module.css'
import bgVideo from '../../assets/Data.mp4'
import RiM from '../../assets/image/image2.png'
const Home = () => {
    
    return (
        <div className = {style.homeBlock}>
            <div className={style.content}>
                <img src = {RiM}/>
            </div>
            <video className = {style.bgVideo} autoPlay muted loop>
                <source src={bgVideo} type='video/mp4'></source>
            </video>
        </div>
    )
}

export default Home;