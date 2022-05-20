import React from "react";
// importing Link from react-router-dom to navigate to
// different end points.

import {useEffect} from "react";
import { Link } from "react-router-dom";

const Home = () => {

    useEffect(() => {
        fetch('http://3.110.43.41:8080/',{
        mode: 'no-cors',
        })
        .then(response =>{
            console.log('abc');
            return response.json();
        })
        .then(data => console.log(data))
        }, []);

return (
	<div>
	<h1>Home Page</h1>
	<br />
	<ul>
		<li>
		{/* Endpoint to route to Home component */}
		<Link to="/">Home</Link>
		</li>
		<li>
		{/* Endpoint to route to About component */}
		<Link to="/about">About</Link>
		</li>
		<li>
		{/* Endpoint to route to Contact Us component */}
		<Link to="/contactus">Contact Us</Link>
		</li>
	</ul>
	</div>
);
};

export default Home;
