import React from 'react';
import { Cell } from 'fixed-data-table';

const DateCell = ({ rowIndex, data, columnKey, ...props }) => {
	let cts = data[rowIndex][columnKey];
	let cdate = new Date(cts);
	return (
		<Cell {...props}>
			{ cdate.toLocaleString("gregory", { "month": "long", "day": "2-digit", "year": "numeric" }) + " @ " + cdate.toLocaleTimeString("gregory", { "hour12": false, "hour": "2-digit", "minute": "2-digit" }) }
		</Cell>
	);
}

export default DateCell;
