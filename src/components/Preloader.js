import React from 'react';
import "../assets/css/Preloader.css";
function Preloader(){
  return(
    <div class="preloader_container">
       <div class="lds-ripple"><div></div><div></div></div>
    </div>
  );
}
export default Preloader;
