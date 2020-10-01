import React,{Component} from "react";

const NavBar = ({totalCounters}) => {
return(<nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <a className="navbar-brand" href="#">
  Navbar <span className="badge badge-pill badge-secondary">
  {totalCounters}
  </span>
  
  </a>
  </nav>);
};
// class NavBar extends Component {
  
//   render(){
    
//   }
// }

export default NavBar;