import React from 'react';
import { Cell } from 'fixed-data-table';

const DetailsCell = ({ rowIndex, data, ...props }) => (
	<Cell {...props}>
		Latitude: {data[rowIndex].latitude},
		Longitude: {data[rowIndex].longitude}
	</Cell>
);

export default DetailsCell;
