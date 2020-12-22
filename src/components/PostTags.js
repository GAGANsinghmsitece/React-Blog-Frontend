import React from 'react';
import '../assets/css/PostTags.css';
class PostTags extends React.Component{
	constructor(props){
		super(props);
		this.state={
			isLoading:false,
			tags:[]
		};
	}
	componentDidMount(){
		fetch("/api/posttags")
		.then(res=>res.json())
		.then((result)=>{
			this.setState({
				isLoading:true,
				tags:result.posttags
			});
		});
	}
	render(){
		const{isLoading,tags}=this.state;
		if(isLoading)
		return(
			<div className="single-widget tags-widget">
			   <h4 className="title">Post Tags</h4>
				 <ul>
				 {tags.map((item)=><li><a href="">{item.text}</a></li>)}
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
export default PostTags;
