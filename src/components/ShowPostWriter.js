import React from 'react';
import Server from '../api/Main.js';
import "../assets/css/ShowPostWriter.css";
function ShowPostWriter(props){
  const imgurl=Server+props.writerinfo.pic;
  return(
    <div className="media">
        <div className="media-body">
            <h5>{props.writerinfo.name}</h5>
            <p>{props.postdate}</p>
        </div>
        <div className="d-flex">
            <img className="d-flex-img" src={imgurl} alt=""/>
        </div>
    </div>
  );
}
export default ShowPostWriter;
