import React from 'react'
import style from './header.module.css'
import bgHeader from '../../assets/image/header.jpg'
const Header = () => {
    const divStyle = {
        color: 'blue',
        backgroundImage: 'url(' + bgHeader + ')',
      };
      
    return (
        <header className = {style.header} style = {divStyle}>
            <div className="logo">
                <img src='' alt=""/>
                <h1 className = {style.logo}>RICK and MORTY</h1>
                
            </div>
        </header>
    )
}

export default Header;