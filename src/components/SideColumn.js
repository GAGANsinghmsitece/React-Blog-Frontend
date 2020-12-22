import React from 'react';
import Author from './Author.js';
import Categories from './Categories.js';
import PostTags from './PostTags.js';
import '../assets/css/SideColumn.css';
function SideColumn(){
	return(
		<div className="SideColumn">
		    <Author/>
		    <Categories/>
		    <PostTags/>
		</div>
		);
}
export default SideColumn;