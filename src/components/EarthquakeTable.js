import React, { Component } from 'react';
import { Table, Column, Cell } from 'fixed-data-table';
import '../css/fixed-data-table.css';

import TextCell from './TextCell';
import DateCell from './DateCell';
import DetailsButton from './DetailsButton';

class EarthquakeTable extends Component {
	render() {
		let { earthquakes, isLoading, onFilterChange } = this.props;
		if (isLoading === true) {
			return <div>LOADING</div>;
		} else {
			return (
				<div>
					<h1>
						EARTHQUAKES
					</h1>
					<h3>
						Search Location:
						<div>
							<input
							onChange={onFilterChange}
							placeholder="Enter Location"
							/>
						</div>
					</h3>
					<div>
						<Table
							rowHeight={100}
							rowsCount={earthquakes.length}
							width={1000}
							height={500}
							headerHeight={50}
							{...this.props}>
							<Column
								columnKey="mag"
								header={<Cell>MAGNITUDE</Cell>}
								cell={<TextCell data={earthquakes} />}
								width={150}
							/>
							<Column
								columnKey="time"
								header={<Cell>TIME</Cell>}
								cell={<DateCell data={earthquakes} />}
								flexGrow={1}
								width={150}
							/>
							<Column
								columnKey="place"
								header={<Cell>PLACE</Cell>}
								cell={<TextCell data={earthquakes} />}
								flexGrow={1}
								width={125}
							/>
							<Column
								header={<Cell>DETAILS</Cell>}
								cell={<DetailsButton data={earthquakes} />}
								flexGrow={1}
								width={145}
							/>
							<Column
								columnKey="id"
								header={<Cell>ID</Cell>}
								cell={<TextCell data={earthquakes} />}
								width={125}
							/>
						</Table>
					</div>
				</div>
			);
		}
	}
}

export default EarthquakeTable;
