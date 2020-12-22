import React from 'react';
import '../assets/css/Categories.css';
import Bullet from '../assets/images/bullet.png';
class Categories extends React.Component{
	constructor(props){
		super(props);
		this.state={
			isLoading:false,
			categories:[]
		}
	}
	componentDidMount(){
		fetch("/api/categories")
		.then(res=>res.json())
		.then((result)=>{
			this.setState({
				isLoading:true,
				categories:result.categories
			});
		});
	}
	render(){
		const{isLoading,categories}=this.state;
		if(isLoading)
		return(
			<div className="single-widget category-widget">
			  <h4 className="title">Post Categories</h4>
				<ul>
				<li>
				{categories.map((item)=>

					   <a href="" className="justify-content-between align-items-center d-flex">
						   <p><img src={Bullet}/>{item.text}</p>
						 </a>
				)}
				</li>
				</ul>
			</div>
	);
	else {
		return(
			<div>...Loading</div>
		);
	}
}
}
export default Categories;
