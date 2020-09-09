import React from 'react'
import style from './series.module.css'
const Series = (props) => {
    


    /*for(let key in props.sezon_1){
        sezon_1.push(<div className = {style.serie}><iframe className = {style.serie} width="560" height="315" src = {props.sezon_1[key]} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><div>подпись к серии</div></div>)
    }*/
    return (
        <div>
            <div className = {style.seriesBlock}>
                <p>SESON 1</p>
                    <div className = {style.serie} >
                    {props.sezon_1.map(el => (
                    <div className = {style.serie}>
                        <iframe className = {style.serie} width="500" height="315" src = {el.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>))}
                </div>
                 
            </div>
            
        </div>
    )
}

export default Series;