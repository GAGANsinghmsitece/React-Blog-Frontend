import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/TableRow.css';
function TableRow(props){
	var url=props.link+props.id;
	return(
			<Link to={url}>
				<div className="table-row">
					<div className="serial">{props.rowindex+1}</div>
					<div className="country">{props.text}</div>
					<div className="visit">{props.count}</div>
				</div>
		    </Link>

	);
}
export default TableRow;
