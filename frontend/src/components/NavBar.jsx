import React from "react";
// importing Link from react-router-dom to navigate to
// different end points.

import { NavLink } from "react-router-dom";

const NavBar = () => {



  return (
    <nav>
      <NavLink to="/" className='navLink'>
        <span className="nav">Home</span>
      </NavLink>
      <NavLink to="/create" className='navLink'>
        <span className="nav">Create Table</span>
      </NavLink>
      <NavLink to="/insert" className='navLink'>
        <span className="nav">Insert Data</span>
      </NavLink>
      <NavLink to="/read" className='navLink'>
        <span className="nav">Get Data</span>
      </NavLink>
      <NavLink to="/update" className='navLink'>
        <span className="nav">Update Data</span>
      </NavLink>
      <NavLink to="/delete" className='navLink'>
        <span className="nav">Delete Data</span>
      </NavLink>
      <NavLink to="/drop" className='navLink'>
        <span className="nav">Drop Table</span>
      </NavLink>

    </nav>



  );
};

export default NavBar;
