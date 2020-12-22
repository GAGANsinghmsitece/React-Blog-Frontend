import React from 'react';
import '../assets/css/TableRow.css';
function TableRow(props){
	return(
			<a href="/category/Anime/">
				<div className="table-row">
					<div className="serial">{props.rowindex+1}</div>
					<div className="country">{props.text}</div>
					<div className="visit">{props.count}</div>
				</div>
		    </a>

	);
}
export default TableRow;
