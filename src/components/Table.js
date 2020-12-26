import React from 'react';
import TableRow from './TableRow.js';
import '../assets/css/Table.css';
function Table(props){
	const data=props.res;
	return(
		<div className="Table-wrap">
		<div className="Table">
		    <div className="Table-Head">
		        <div className="serial">#</div>
		        <div className="country">{props.headname}</div>
				<div className="visit">Number Of Posts</div>
			</div>
			{data.map((message,idx) =><TableRow link={props.link} rowindex={idx} id={message.id} text={message.text} count={message.count} />)}
		</div>
		</div>
	);
}
export default Table;
