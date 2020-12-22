import React from 'react';
import "../assets/css/ShowFirstImage.css";
function ShowFirstImage(props){
  return(
    <div>
    <img className="blogimg" src={props.url}/>
    </div>
  );
}
export default ShowFirstImage;
