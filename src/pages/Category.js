import React from 'react';
import '../assets/css/Category.css';
import Header from '../components/Header.js';
import Banner from '../components/Banner.js';
import Table from '../components/Table.js';
import Reserved from '../components/Reserved.js';
import Server from '../api/Main.js';
import Preloader from '../components/Preloader.js';
class Category extends React.Component{
	constructor(props){
		super(props);
		this.state={
			isLoading:false,
			categories:[]
		};
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
		const {isLoading,categories}=this.state;
		if(isLoading)
		return(
			<div>
			    <Header/>
			    <Banner text="Categories"/>
			    <h3 className="mb-30">Categories</h3>
			    <Table headname="Category" res={categories} link="/Category/"/>
			    <Reserved/>
			</div>
		);
		else
			return(
		        <div><Preloader/></div>
		    );
	}
}
export default Category;
