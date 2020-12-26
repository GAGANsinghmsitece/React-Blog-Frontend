import React from 'react';
import {useParams} from 'react-router-dom';
import {withRouter} from 'react-router';
import Header from '../components/Header.js';
import Banner from '../components/Banner.js';
import Reserved from '../components/Reserved.js';
import ShowPost from '../components/ShowPost.js';
import Preloader from '../components/Preloader.js';
class MainPost extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isLoading:false,
      post:undefined,
      prev:undefined,
      next:undefined
    };
  }
  componentDidMount(){
    const id=this.props.match.params.id;
    this.fetchData(id);
  }
  componentDidUpdate(prevProps){
    if(this.props.match.params.id!=prevProps.match.params.id){
      this.setState({isLoading:false});
      this.fetchData(this.props.match.params.id);
    }
  }
  fetchData(id){
    fetch('/api/post/'+id)
    .then(res=>res.json())
    .then((result)=>{
      this.setState({
        isLoading:true,
        post:result.post,
        prev:result.prev,
        next:result.next
      });
    });
  }
  render(){
    const{isLoading,post,prev,next}=this.state;
    if(isLoading)
       return(
         <div>
            <Header/>
            <Banner text={post.headline}/>
            <ShowPost data={post} prev={prev} next={next}/>
            <Reserved/>
         </div>
       );
    else
        return(
          <div>
             <Preloader/>
          </div>
        );
  }
}
export default withRouter(MainPost);
