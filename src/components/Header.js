import React,{useEffect} from 'react';
import '../assets/css/Header.css';
import bloglogo from '../assets/images/logo.png';
import {BsSearch} from 'react-icons/bs';
import {Link} from 'react-router-dom';
function Header(){
	//initialise value of scrolled as false and setScrolled can be used to update it.
	const[scrolled,setScrolled]=React.useState(false);
	const handleScroll=()=>{
		//it will handle the logic
		const offset=window.scrollY;
		if(offset>50){
			setScrolled(true);
		}
		else
			setScrolled(false);
	}
	//useeffect is used to tell react to do something after it has rendered the component
	useEffect(()=>{
		//we are attaching handlescroll to scroll event of window.
		window.addEventListener("scroll",handleScroll);
	});

	let x=['Navbar'];
	if(scrolled){
		x.push('scrolled');
	}
	return(
		<div>
		<div className="Header">
		    <div className="title_row">
		        <div className="title_container">
		            <img className="blog_logo" src={bloglogo} alt="logo"/>
		        </div>
		        <div className="search_icon">
		        <BsSearch/>
		        </div>
		    </div>
		</div>
		<div className={x.join(' ')}>
		<Link to="/">HOME</Link>
		<Link to="/Category">CATEGORY</Link>
		<Link to="/Tags">POST TAGS</Link>
		</div>
		</div>
		);
}
export default Header;
