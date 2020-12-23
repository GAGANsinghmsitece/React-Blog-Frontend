import React from 'react';
import {Link} from 'react-router-dom';
import "../assets/css/Quicklinks.css";
function Quicklinks(props){
  var posturl="/Post/"+props.data.id;
  var postheadline=props.data.headline;
  if(props.data.id==undefined){
    return(
      <div className="l1 col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center d11">
        <div className="detials">
        </div>
      </div>
    );
  }
  if(props.left==="True")
  return(
    <div className="l1 col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center d11">
      <div className="detials">
         <p>Prev Post</p>
          <Link to={posturl}>
            <h4>{postheadline}</h4>
          </Link>
      </div>
    </div>
  );
  else {
    return(
      <div className="l1 col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-start align-items-center d11">
        <div className="detials">
           <p>Next Post</p>
            <Link to={posturl}>
              <h4>{postheadline}</h4>
            </Link>
        </div>
      </div>
    );
  }
}
export default Quicklinks;
