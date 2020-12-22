import React from 'react';
import '../assets/css/rowPost.css';
function RowPost(){
	return(
		<div className="rowPost">
		   <div className="stories-thumb">
		   <img className="img-fluid" src="http://127.0.0.1:8000/media/PostImage/751214.jpg" alt=""/>
		   </div>
		   <div className="stories-details">
		   <h6><a href="/post/2">Kimi No Na wa:- a anime</a></h6>
		   <p>18 Sep 2020</p>
		   </div>
						
		</div>
		);
}
export default RowPost;