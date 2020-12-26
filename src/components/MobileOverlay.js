import React from 'react';
import {Link} from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi';
import "../assets/css/MobileOverlay.css";
//style="touch-action: pan-y;"
function MobileOverlay(props){
  const[menu,setMenu]=React.useState(false);
  var menu_style={};
  var link_style={};
  var icon_style={};
  function handleClick(e){
		if(menu===true){
			setMenu(false);
		}else{
			setMenu(true);
		}
	}
  if(menu===true){
    link_style={left:'0px'};
    menu_style={display:'block'};
    icon_style={display:'none'};
  }else{
    link_style={left:'-260px'}
    menu_style={};
    icon_style={};
  }

  return(
    <div>
    <button id="mobile-nav-toggle" onClick={handleClick} className="Hooker1">
       <GiHamburgerMenu style={icon_style}/>
		</button>
    <div id="mobile-nav" style={link_style}>
       <ul className=""  id="">
			     <li className="menu-active"><Link to="/">Home</Link></li>
			     <li><Link to="/Category">Category</Link></li>
			     <li><Link to="/Tags">Post Tags</Link></li>
			 </ul>
    </div>
    <div id="mobile-body-overly" onClick={handleClick} style={menu_style}></div>
    </div>
  );
}
export default MobileOverlay;
