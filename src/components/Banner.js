import React from 'react';
import "../assets/css/Banner.css";
import {FiArrowRight} from 'react-icons/fi';
function Banner(props){
	return(
		<div className="banner-area relative">
		    <div className="overlay overlay-bg"></div>
		    <div style={{marginTop:'0px'}} className="container box_1170">
		    <div className="row1 d-flex align-items-center justify-content-center">
		        <div className="about-content col-lg-12">
					<h1 className="text-white">
						{props.text}
					</h1>
					<p className="text-white link-nav"><a href="/">Home </a>
					<FiArrowRight value={{className:'arrow'}}/>
					<a href="">
							{props.text}</a></p>
				</div>
			</div>
		    </div>
		</div>
		);
}
export default Banner;
