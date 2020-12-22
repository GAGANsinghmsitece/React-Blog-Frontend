import React from 'react';
import {useParams} from 'react-router-dom';
import {withRouter} from 'react-router';
import Header from '../components/Header.js';
import Banner from '../components/Banner.js';
import Reserved from '../components/Reserved.js';
import ShowPost from '../components/ShowPost.js';
class MainPost extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isLoading:false,
      post:undefined
    };
  }
  componentDidMount(){
    const id=this.props.match.params.id;
    fetch('/api/post/'+id)
    .then(res=>res.json())
    .then((result)=>{
      this.setState({
        isLoading:true,
        post:result.post
      });
    });
  }
  render(){
    const{isLoading,post}=this.state;
    if(isLoading)
       return(
         <div>
            <Header/>
            <Banner text={post.headline}/>
            <ShowPost data={post}/>
            <Reserved/>
         </div>
       );
    else
        return(
          <div>
             <Header/>
             <Reserved/>
          </div>
        );
  }
}
export default withRouter(MainPost);
