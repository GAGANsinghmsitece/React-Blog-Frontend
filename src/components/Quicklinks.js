import React from 'react';
import "../assets/css/Quicklinks.css";
function Quicklinks(props){
  if(props.left==="True")
  return(
    <div className="l1 col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center d11">
      <div className="detials">
         <p>Prev Post</p>
          <a href="/post/1">
            <h4>Kimetsu no yaiba:- anime review</h4>
          </a>
      </div>
    </div>
  );
  else {
    return(
      <div className="l1 col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-start align-items-center d11">
        <div className="detials">
           <p>Next Post</p>
            <a href="/post/1">
              <h4>Kimetsu no yaiba:- anime review</h4>
            </a>
        </div>
      </div>
    );
  }
}
export default Quicklinks;
