import React, { Component } from 'react';
import { Cell } from 'fixed-data-table';

import DetailsCell from './DetailsCell';

const button = {
	backgroundColor: "#229ac8",
	backgroundImage: "linear-gradient(to bottom, #23a1d1, #1f90bb)",
	backgroundRepeat: "repeat-x",
	borderColor: "#1f90bb #1f90bb #145e7a",
	color: "#ffffff",
	textShadow: "0 -1px 0 rgba(0, 0, 0, 0.25)",
	borderTopLeftRadius: 6,
	borderTopRightRadius: 6,
	borderBottomRightRadius: 6,
	borderBottomLeftRadius: 6
}

class DetailsButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showDetails: false
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		const reveal = this.state.showDetails === false ? true : false;
		this.setState({ showDetails: reveal });
	}

	render() {
		let earthquakes = this.props.data;
		let rowIndex = this.props.rowIndex;
		return (
			<Cell>
				<button style={button} type="button" onClick={this.handleClick}>Click for Geographical Location</button>
				{ this.state.showDetails ? <DetailsCell rowIndex={rowIndex} data={earthquakes} /> : null }
			</Cell>
		)
	}
}

export default DetailsButton;
