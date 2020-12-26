import React from 'react';
import '../assets/css/Author.css';
import {FiFacebook} from 'react-icons/fi';
import {AiOutlineTwitter} from 'react-icons/ai';
import Server from "../api/Main.js";
class Author extends React.Component{
	constructor(props){
		super(props);
		this.state={
			isLoading:false,
			author:undefined
		}
	}
	componentDidMount(){
		this.fetchData();
	}
	fetchData(){
		fetch(Server+'/api/author')
    .then(res=>res.json())
    .then((result)=>{
      this.setState({
        isLoading:true,
        author:result.writer
      });
    });
	}
	render(){
		const {isLoading,author}=this.state;
		if(isLoading){
			const imageurl=Server+author.pic;
		 return(
			 <div className="single-widget Portfolio-widget">
			   <img className="img-fluid" src={imageurl} alt=""/>
				 <a href="#">
				    <h4>{author.name}</h4>
				 </a>
				 <p className="p-text">
				    {author.bio}
				 </p>
			</div>
		);
	  }
		else{
			return(
				<div>...Loading</div>
			);
		}
	}
}
/*
for future versions
<ul className="social-links">
	<li><a href=""><FiFacebook/></a></li>
	<li><a href=""><i className="fa fa-twitter"><AiOutlineTwitter/></i></a></li>
	<li><a href=""></a></li>
</ul>*/
export default Author;
