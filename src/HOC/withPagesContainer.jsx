import React from 'react';

export const WithPagesContainer = (Component) => {
	let WithPagesComponent = (props) => {
		let allPages = [];
		for (let i = 1; i <= props.allPages; i++) {
			allPages.push(i);
		}
		return <Component {...props} allPages={allPages} />;
	};
	return WithPagesComponent;
};
