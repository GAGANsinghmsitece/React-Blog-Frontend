import React from 'react';
import '../assets/css/SinglePost.css';
import {BsFillCalendarFill} from 'react-icons/bs';
import Server from '../api/Main.js';
function SinglePost(props){
	const imageurl=Server+props.data.image;
	return(
		<div className="cover-post-item">
		<div className="single-post-item">
		    <div className="post-thumb">
				<img className="post-img-fluid" src={imageurl} alt=""/>
			</div>
			<div className="post-details">
				<h4><a href="/post/4">{props.data.headline}</a></h4>
				<p>{props.data.summary}</p>
			<div className="blog-meta">
				<a href="#" className="m-gap"><BsFillCalendarFill/> {props.data.date}</a>
			</div>
		</div>
		</div>
		</div>
		);
}
export default 	SinglePost;
