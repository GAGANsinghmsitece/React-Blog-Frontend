import React from 'react';
import '../assets/css/Reserved.css';
function Reserved(){
	return(
		<div className="row footer-bottom d-flex justify-content-between align-items-center">
		    <p className="col-lg-12 footer-text text-center">
		        Copyright ©2019-<script>document.write(new Date().getFullYear());</script>2020 All rights reserved |Sapora inc.
		    </p>
	    </div>
	    );
}
export default Reserved;