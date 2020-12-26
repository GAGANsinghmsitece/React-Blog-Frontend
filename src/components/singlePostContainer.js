import React from 'react';
import SinglePost from './singlePost.js';
import '../assets/css/SinglePostContainer.css';
import {BsArrowLeftShort,BsArrowRightShort} from 'react-icons/bs';
import {Link} from 'react-router-dom';
function SinglePostContainer(props){
	const data=props.posts;
	const currentpage=props.currentpage;
	const totalpage=props.totalpage;
	var array=[];
	var prev='';
	var next='';
	if(currentpage==1){
		prev=<li className="page-item disabled"><a className="page-link ArrowChange" aria-label="Previous"><BsArrowLeftShort/></a></li>;
	}else{
		var prevpage=currentpage-1;
		prevpage="/page/"+prevpage;
		prev=<li className="page-item disabled"><Link to={prevpage} className="page-link ArrowChange" aria-label="Previous"><BsArrowLeftShort/></Link></li>;
	}
	if(currentpage===totalpage){
		next=<li className="page-item"><a className="page-link ArrowChange" aria-label="Next"><BsArrowRightShort/></a></li>;
	}else{
		var nextpage=currentpage+1;
		nextpage="/page/"+nextpage;
		next=<li className="page-item"><Link to={nextpage} className="page-link ArrowChange" aria-label="Next" ><BsArrowRightShort/></Link></li>;
	}
	var displaynumber="";
	if(currentpage<10){
		displaynumber='0'+currentpage;
	}else{
		displaynumber=currentpage;
	}
	let x=['pagination'];
	if(currentpage===undefined){
		x.push('hide-pagination');
	}

	return(
		<div className="MainPostColumn">
		{data.map((message,idx) =><SinglePost data={message}/>)}
		<div className="main_pagination">
		  <nav className="blog-pagination justify-content-center d-flex">
			<ul className={x.join(' ')}>
			{prev}
			<li className=" page-item active"><a className="page-link" href="">{displaynumber}</a></li>
			{next}
			</ul>
			</nav>
		</div>
		</div>
		);
}
export default SinglePostContainer;
