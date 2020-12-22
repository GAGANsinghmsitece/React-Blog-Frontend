import React from 'react';
import SinglePost from './singlePost.js';
import '../assets/css/SinglePostContainer.css';
function SinglePostContainer(props){
	const data=props.posts;
	return(
		<div className="MainPostColumn">
		{data.map((message,idx) =><SinglePost data={message}/>)}
		</div>
		);
}
export default SinglePostContainer;
