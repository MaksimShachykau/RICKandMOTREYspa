import React from 'react';
import style from './series.module.css';
const Series = (props) => {
	return (
		<div>
			<div className={style.seriesBlock}>
				<p>SESON 1</p>
				<div className={style.series}>
					{props.sezon_1.map((el) => (
						<div className={style.serie} key = {el.url}>
							<iframe
								src={el.url}
								title = 'video'
								frameborder="0"
								allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
								type="video/mp4"
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Series;
