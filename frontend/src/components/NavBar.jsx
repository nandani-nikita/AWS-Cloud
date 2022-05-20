import React from "react";
// importing Link from react-router-dom to navigate to
// different end points.

import { NavLink } from "react-router-dom";

const NavBar = () => {

   

return (
	<nav>
      <NavLink   to="/">
        Home
      </NavLink>
      <NavLink   to="/create">
        Create Table
      </NavLink>
      <NavLink   to="/insert">
        Insert Data
      </NavLink>
      <NavLink   to="/read">
        Get All Data
      </NavLink>
      <NavLink   to="/update">
        Update Data
      </NavLink>
      <NavLink   to="/delete">
        Delete Data
      </NavLink>
      <NavLink   to="/drop">
        Drop Table
      </NavLink>
     
    </nav>
	
	
		
);
};

export default NavBar;
