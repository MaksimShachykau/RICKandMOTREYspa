import React from 'react';
import style from './location.module.css';
import { WithPagesContainer} from '../../HOC/withPagesContainer'


const Location = (props) => {
	/*let allPages = [];
	for (let i = 1; i <= props.allPages; i++) {
		allPages.push(i);
	}*/
 
	return (
		<div>
			<div className={style.navLocatinsBlock}>
				{props.allPages.map((el) => (
					<span
						className={props.currentPage === el ? style.active : style.point}
						onClick={() => props.setCurrentPage(el)}
						key={el}
					>
						{el}
					</span>
				))}
			</div>
			<div className={style.locationsBlock}>
				{props.locations.map((el) => (
					<div className={style.location} key={el.id}>
						<h4>NAME: {el.name}</h4>
						<p>TYPE: {el.type}</p>
						<p>DIMENSION: {el.dimension}</p>
						<p>number of residents from the series: {el.residents.length}</p>
					</div>
				))}
			</div>
		</div>
	);
};

let WithPagesComponent = WithPagesContainer(Location)

export default WithPagesComponent;
