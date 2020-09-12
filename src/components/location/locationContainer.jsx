import React from 'react';
import WithPagesComponent from './location';
import { connect } from 'react-redux';
import { setLocation, setAllPages, setNexPage, setImageResident, getLocationsThCr } from '../../redux/locationReducer';
class LocationContainer extends React.Component {
	componentDidMount = () => {
		this.props.getLocationsThCr(this.props.currentPage);
	};
	setCurrentPage = (page) => {
		this.props.getLocationsThCr(page);
	};
	render() {
		return (
			<WithPagesComponent
				locations={this.props.locations}
				allPages={this.props.allPages}
				currentPage={this.props.currentPage}
				setCurrentPage={this.setCurrentPage}
			/>
		);
	}
}

let mapStateToPRops = (state) => {
	return {
		locations: state.locationsPage.locations,
		currentPage: state.locationsPage.currentPage,
		allPages: state.locationsPage.allPages
	};
};
let mapDispathToProps = {
	setLocation,
	setAllPages,
	setNexPage,
	setImageResident,
	getLocationsThCr
};

export default connect(mapStateToPRops, mapDispathToProps)(LocationContainer);
