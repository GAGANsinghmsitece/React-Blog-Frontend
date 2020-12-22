import React from 'react';
import '../assets/css/Author.css';
import {FiFacebook} from 'react-icons/fi';
import {AiOutlineTwitter} from 'react-icons/ai';
function Author(){
	return(
	<div className="single-widget Portfolio-widget">
	    <img className="img-fluid" src="http://127.0.0.1:8000/media/PostImage/1081220.jpg" alt=""/>
	    <a href="#">
	        <h4>Author</h4>
	    </a>
	    <p className="p-text">
	        Music
	    </p>
	    <ul className="social-links">
	        <li><a href=""><FiFacebook/></a></li>
	        <li><a href=""><i className="fa fa-twitter"><AiOutlineTwitter/></i></a></li>
		    <li><a href=""></a></li>
	    </ul>
	</div>
					);
}
export default Author;
