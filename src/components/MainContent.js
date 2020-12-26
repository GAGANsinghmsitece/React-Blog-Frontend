import React from 'react';
import SinglePostContainer from './singlePostContainer.js';
import SideColumn from './SideColumn.js';
import '../assets/css/MainContent.css';
function MainContent(props){
	return(
		<div className="MainContent">
		    <SinglePostContainer posts={props.posts} totalpage={props.totalpage} currentpage={props.currentpage}/>
		    <SideColumn/>
		</div>
	);
}
export default MainContent;
