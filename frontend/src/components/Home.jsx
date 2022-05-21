import React from "react";
// importing Link from react-router-dom to navigate to
// different end points.

import { NavLink } from "react-router-dom";

const Home = () => {

   

return (
	<div>
        <h1>

        Cloud Deployment Assignment
        </h1>
        <ol>
            <li>
            Create a static site on S3 with Javascript/React code. Create a service in EC2 using NodeJS.You may use a service you have created for the previous assignment. The react code will call the NodeJS services to fetch data.
(This is actually the simplest way to create a Working website and is very popular for smaller sites)
            </li>
            <li>
            List 2 drawbacks of creating a website like this.
            </li>
        </ol>
      
<hr></hr>
<p id="answer">Answer 2.
    <br></br>
    Disadvantages of creating websites like this are:
    <ol>
        <li>
            S3 is used to host single page applications only, like React Js, Angular JS, Vue JS etc. We cannot use S3 to make webpages that are dynamic, that means which use server side scripting such as PHP, JSP, ASP.net etc.
        </li>
        <li>
            S3 doesn't supports HTTPS. However this can be achieved on S3 with the help of Amazon CloudFront, but it is not possible to directly host the HTTPS websites through S3.
        </li>
    </ol>
</p>
    </div>
	
	
		
);
};

export default Home;
