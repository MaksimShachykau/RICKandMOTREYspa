import React from "react";
import style from "./characterInfo.module.css";
import image from "../../assets/image/cb4.png";
import Human from "../../assets/Human.mp4";
import Alien from "../../assets/Alien.mp4";
import Robot from "../../assets/Robot.mp4";
import DiseaseVidio from "../../assets/Disease.mp4";
import Mythological from "../../assets/Mythological Creature.mp4";
import Animal from "../../assets/Animal.mp4";
import BasicVideo from "../../assets/Data1.mp4";

const CharacterInfo = (props) => {
  let setVideoBg = (species) => {
    switch (species) {
      case "Human":
        return Human;
      case "Alien":
        return Alien;
      case "Robot":
        return Robot;
      case "Disease":
        return DiseaseVidio;
      case "Mythological Creature":
        return Mythological;
      case "Animal":
        return Animal;
      default:
        return BasicVideo;
    }
  };
  let data = props.characterData;
  if (data) {
    console.log(data.species);
    return (
      <div className={style.characterInfoBlock}>
        <div className={style.character}>
          <video
            className={style.bgVideo}
            key={data.species}
            autoPlay
            muted
            loop
          >
            <source src={setVideoBg(data.species)} type="video/mp4"></source>
          </video>
          <img src={image} className={style.bg} alt = 'bg'></img>
          <img
            src={data.image}
            className={style.characterImage}
            alt={data.name}
          />
          <div className={style.characterInfo}>
            <h3>{data.name}</h3>
            <p>SPECIES : {data.species}</p>
            <p>GENDER : {data.gender}</p>
            <p>STATUS : {data.status}</p>
            <p>LOCATION : {data.location.name}</p>
            <p>
              ORIGINAL CHARACTER : {data.name} from {data.origin.name}
            </p>
            <p>participated in {data.episode.length} episodes</p>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default CharacterInfo;
