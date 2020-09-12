import React from 'react';
import style from './home.module.css';
import bgVideo from '../../assets/Data.mp4';
import RiM from '../../assets/image/image2.png';
const Home = () => {
	return (
		<div className={style.homeBlock}>
			<div className={style.content}>
				<img src={RiM} alt = 'rick and mortey'/>
			</div>
			<div className={style.videoBlock}>
				<video className={style.bgVideo} autoPlay muted loop>
					<source src={bgVideo} type="video/mp4" />
				</video>
			</div>
		</div>
	);
};

export default Home;
