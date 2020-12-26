import React from 'react';
import '../assets/css/Category.css';
import Header from '../components/Header.js';
import Banner from '../components/Banner.js';
import Table from '../components/Table.js';
import Reserved from '../components/Reserved.js';
import Server from '../api/Main.js';
import Preloader from '../components/Preloader.js';
class PostTags extends React.Component{
	constructor(props){
		super(props);
		this.state={
			isLoading:false,
			posttags:[]
		};
	}
	componentDidMount(){
		fetch(Server+"/api/posttags")
		.then(res=>res.json())
		.then((result)=>{
			this.setState({
				isLoading:true,
				posttags:result.posttags
			});
		});
	}
	render(){
		const {isLoading,posttags}=this.state;
		if(isLoading)
		return(
			<div>
			    <Header/>
			    <Banner text="Post Tags"/>
			    <h3 className="mb-30">Post Tags</h3>
			    <Table headname="Post Tags" res={posttags} link="/Tags/"/>
			    <Reserved/>
			</div>
		);
		else
			return(
		        <div><Preloader/></div>
		    );
	}
}
export default PostTags;
