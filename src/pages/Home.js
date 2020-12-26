import React from 'react';
import {withRouter} from 'react-router';
import Header from '../components/Header.js';
import MainContent from '../components/MainContent.js';
import Reserved from '../components/Reserved.js';
import Preloader from '../components/Preloader.js';
class Home extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			latest_post: [],
			main_post:[],
			totalpage:undefined,
			currentpage:1
		};
	}
	MainFetch(id){
		var url="/api";
		if(id!==undefined){
			url=url+"?page="+id;
			this.setState({
				currentpage:parseInt(id)
			});
		}
		fetch(url)
		.then(res=>res.json())
		    .then((result)=> {
		    	this.setState({
						isLoaded:true,
						latest_post:result.latest_post,
						main_post:result.main_post,
						totalpage:parseInt(result.pages)
					});
		    });
	}
	componentDidMount() {
		this.MainFetch(this.props.match.params.pagenumber);
	}
	componentDidUpdate(prevProps){
		if(prevProps.match.params.pagenumber!=this.props.match.params.pagenumber){
			this.setState({isLoaded:false});
			this.MainFetch(this.props.match.params.pagenumber);
		}
	}
	render(){
		const {isLoaded,latest_post,main_post,totalpage,currentpage}=this.state;
		if(isLoaded)
		return(
			<div>
			    <Header/>
			    <MainContent posts={main_post} totalpage={totalpage} currentpage={currentpage}/>
			    <Reserved/>
			</div>
		);
		else {
			return(
				<div><Preloader/></div>
			);
		}
	}
}
export default withRouter(Home);
