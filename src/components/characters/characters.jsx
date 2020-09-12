import React from 'react';
import style from './characters.module.css';
import { NavLink } from 'react-router-dom';
import { WithPagesContainer } from '../../HOC/withPagesContainer';

class Characters extends React.Component {
	state = {
		showFilterGender: false,
		showFilterStatus: false,
		showFilterSpecies: false
	};
	toggleShowFilters = {
		toggleShowFilterGender: () => {
			this.setState({
				showFilterGender: !this.state.showFilterGender,
				showFilterStatus: false,
				showFilterSpecies: false
			});
		},
		toggleShowFilterStatus: () => {
			this.setState({
				showFilterStatus: !this.state.showFilterStatus,
				showFilterGender: false,
				showFilterSpecies: false
			});
		},
		toggleShowFilterSpecies: () => {
			this.setState({
				showFilterSpecies: !this.state.showFilterSpecies,
				showFilterStatus: false,
				showFilterGender: false
			});
		},
		onShowFilter: () => {
			this.setState({
				showFilterSpecies: false,
				showFilterStatus: false,
				showFilterGender: false
			});
		}
	};

	render() {
		let filterGender = [ 'female', 'male', 'genderless', 'unknown' ];
		let filterStatus = [ 'alive', 'dead', 'unknown' ];
		let species = [
			'Humanoid',
			'human',
			'alien',
			'Poopybutthole',
			'Mythological',
			'Disease',
			'Cronenberg',
			'Animal',
			'Robot',
			'unknown'
		];

		return (
			<div>
				<div className={style.navCharacterBlock}>
					{this.props.allPages.map((el) => (
						<span
							className={this.props.currentPage === el ? style.active : style.point}
							onClick={() => this.props.setCurrentPageFilter(el, this.props.filter)}
							key={el}
						>
							{el}
						</span>
					))}
				</div>
				<div className={style.filtersBlock}>
					<div className={style.filterBlock} onMouseLeave={this.toggleShowFilters.onShowFilter}>
						<h4 onClick={this.toggleShowFilters.toggleShowFilterGender}>Gender</h4>
						{this.state.showFilterGender && (
							<div>
								{filterGender.map((el) => (
									<span
										className={
											this.props.filter === `gender=${el}` ? (
												style.activeFilterPoint
											) : (
												style.filterPoint
											)
										}
										onClick={() => {
											this.props.setCurrentPageFilter(1, `gender=${el}`);
										}}
										key={el}
									>
										{el}
									</span>
								))}
							</div>
						)}
					</div>
					<div className={style.filterBlock} onMouseLeave={this.toggleShowFilters.onShowFilter}>
						<h4 onClick={this.toggleShowFilters.toggleShowFilterStatus}>Status</h4>
						{this.state.showFilterStatus && (
							<div>
								{filterStatus.map((el) => (
									<span
										className={
											this.props.filter === `status=${el}` ? (
												style.activeFilterPoint
											) : (
												style.filterPoint
											)
										}
										onClick={() => this.props.setCurrentPageFilter(1, `status=${el}`)}
										key={el}
									>
										{el}
									</span>
								))}
							</div>
						)}
					</div>
					<div className={style.filterBlock} onMouseLeave={this.toggleShowFilters.onShowFilter}>
						<h4 onClick={this.toggleShowFilters.toggleShowFilterSpecies}>Species</h4>
						{this.state.showFilterSpecies && (
							<div>
								{species.map((el) => (
									<span
										className={
											this.props.filter === `species=${el}` ? (
												style.activeFilterPoint
											) : (
												style.filterPoint
											)
										}
										onClick={() => this.props.setCurrentPageFilter(1, `species=${el}`)}
										key={el}
									>
										{el}
									</span>
								))}
							</div>
						)}
					</div>
				</div>
				<div className={style.characterBlock}>
					{this.props.characters.map((el) => (
						<div className={style.character} key={el.id}>
							<NavLink to={`/character/${el.id}`}>
								<img src={el.image} alt={el.name} />
							</NavLink>
						</div>
					))}
				</div>
			</div>
		);
	}
}
let WithPagesCharacters = WithPagesContainer(Characters);
export default WithPagesCharacters;
