import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './nav.module.css';
const NavBar = () => {
	return (
		<nav className={style.navBlock}>
			<NavLink className={style.item} to="/" >
				HOME
			</NavLink>
			<NavLink className={style.item} to="/characters" activeClassName={style.active}>
				CHARACTERS
			</NavLink>
			<NavLink className={style.item} to="/series" activeClassName={style.active}>
				SERIES LIST
			</NavLink>
			<NavLink className={style.item} to="/location" activeClassName={style.active}>
				LOCATIONS
			</NavLink>
		</nav>
	);
};

export default NavBar;
