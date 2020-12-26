import React from 'react';
import ShowFirstImage from './ShowFirstImage.js';
import ShowPostCategory from './ShowPostCategory.js';
import ShowPostWriter from './ShowPostWriter.js';
import Quicklinks from './Quicklinks.js';
import Server from '../api/Main.js';
import "../assets/css/ShowPost.css";
function ShowPost(props){
  const imgurl=Server+props.data.image;
  const posttags=props.data.posttags;
  return(
    <div className="container box_1170">
       <div className="row change_row_post">
          <div className="col-lg-8">
              <div className="main_blog_details">
                 <ShowFirstImage url={imgurl}/>
                 <h4>{props.data.headline}</h4>
                 <div className="user_details">
                    <div className="float-left">
                    {posttags.map((tag)=><ShowPostCategory showtag={tag}/>)}
                    </div>
                    <div className="float-right">
                      <ShowPostWriter postdate={props.data.date} writerinfo={props.data.writer}/>
                    </div>
                 </div>
                 <div className="Contentpara" dangerouslySetInnerHTML={{__html:props.data.content}}/>
              </div>
              <div className="navigation-area">
                 <div className="row change_row_post">
                 <Quicklinks data={props.prev} left="True"/>
                 <Quicklinks data={props.next}left="False"/>
                 </div>
              </div>
          </div>
       </div>
    </div>
  );
}
export default ShowPost;
