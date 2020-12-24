import React from 'react';
import {withRouter} from 'react-router';
import Header from "../components/Header.js";
import Banner from  "../components/Banner.js";
import MainContent from "../components/MainContent.js";
import Reserved from "../components/Reserved.js";
class TagDetail extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isLoading:false,
      text:undefined,
      posts:undefined
    };
  }
  componentDidMount(){
    const id=this.props.match.params.id;
    this.fetchData(id);
  }
  componentDidUpdate(prevProps){
    if(prevProps.match.params.id!==this.props.match.params.id){
      this.fetchData(this.props.match.params.id);
    }
  }
  fetchData(id){
    fetch('/api/posttags/'+id)
    .then(res=>res.json())
    .then((result)=>{
      this.setState({
        isLoading:true,
        text:result.tag,
        posts:result.posts
      });
    });
  }
  render(){
    const {isLoading,posts,text}=this.state;
    if(isLoading)
      return(
        <div>
          <Header/>
          <Banner text={text}/>
          <MainContent posts={posts}/>
			    <Reserved/>
        </div>
      );
    else {
      return(
        <div>
        ...Loading
        </div>
      );
    }
  }
}
export default withRouter(TagDetail);
