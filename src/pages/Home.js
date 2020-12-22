import React from 'react';
import Header from '../components/Header.js';
import MainContent from '../components/MainContent.js';
import Reserved from '../components/Reserved.js';
class Home extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			latest_post: [],
			main_post:[]
		};
	}
	MainFetch(){
		fetch("/api")
		.then(res=>res.json())
		    .then((result)=> {
		    	this.setState({
						isLoaded:true,
						latest_post:result.latest_post,
						main_post:result.main_post,
					});
		    });
	}
	componentDidMount() {
		this.MainFetch();
	}
	render(){
		const {isLoaded,latest_post,main_post}=this.state;
		if(isLoaded)
		return(
			<div>
			    <Header/>
			    <MainContent posts={main_post}/>
			    <Reserved/>
			</div>
		);
		else {
			return(
				<div>...Loading</div>
			);
		}
	}
}
export default Home;
