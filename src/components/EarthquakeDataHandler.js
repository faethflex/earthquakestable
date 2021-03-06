import React, { Component } from 'react';
import axios from 'axios';

import EarthquakeTable from './EarthquakeTable';

const earthquakesListURL = 'http://interviewtest.getguru.com/seismic/data.json';
let CancelToken = axios.CancelToken;
let source = CancelToken.source();

class EarthquakeDataHandler extends Component {
	constructor(props) {
		super(props);

		this._earthquakes = [];
		this.state = {
			isLoading: true,
			filteredDataList: this._earthquakes
		};

		this._onFilterChange = this._onFilterChange.bind(this);
	}

	componentDidMount() {
		axios
		.get(earthquakesListURL, { cancelToken: source.token
		})
		.then((response) => {
			response.data
			.slice(0, 20)
			.map((earthquakes) => (this._earthquakes.push(earthquakes)));
			this._earthquakes.sort((a, b) => {
				let sortVal = 0;
				let magA = a["mag"];
				let magB = b["mag"];
				if (magA > magB) {
					sortVal = -1;
				}
				if (magA < magB) {
					sortVal = 1;
				}
				if (magA === magB) {
					let timeA = a["time"];
					let timeB = b["time"];
					if (timeA > timeB) {
						sortVal = -1;
					}
					if (timeA < timeB) {
						sortVal = 1;
					}
				}
				return sortVal;
			});
			this.setState({
				isLoading: false
			});
		})
		.catch((thrown) => {
			if (axios.isCancel(thrown)) {
				console.log('Request canceled', thrown.message);
			} else {
				console.log(thrown.message);
			}
		});
	}

	componentWillUnmount() {
		source.cancel();
	}

	_onFilterChange(e) {
		if (!e.target.value) {
			this.setState({
				filteredDataList: this._earthquakes
			});
		}

		let filterBy = e.target.value.toString().toLowerCase();
		let size = this._earthquakes.length;
		let filteredList = [];
		for (var index = 0; index < size; index++) {
			let {place} = this._earthquakes[index];
			if (place.toString().toLowerCase().indexOf(filterBy) !== -1) {
				filteredList.push(this._earthquakes[index]);
			}
		}

		this.setState({
			filteredDataList: filteredList
		});
	}

  render() {
		let isLoading = this.state.isLoading;
		let earthquakes = this.state.filteredDataList;
    return (
      <div>
				<EarthquakeTable
					isLoading={isLoading}
					earthquakes={earthquakes}
					onFilterChange={this._onFilterChange} />
			</div>
    );
  }
}

export default EarthquakeDataHandler;
