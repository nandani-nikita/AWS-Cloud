import React from "react";
import { useEffect } from "react";

const InsertData = () => {
	useEffect(() => {
		fetch('http://3.110.43.41:8080/insertRecord')
			.then(response => {
                console.log(response);
					return response.json();
			})
			.then(data => {
				console.log(data);

				document.getElementById('dataDiv').innerText = "";
				document.getElementById('dataDiv').innerText = data.msg;

			}).catch(err => {
				console.log(err);
			})
	}, []);
return (
	<div>
	<h1>Insert Record</h1>
    <div id="dataDiv"></div>
	</div>
);
};

export default InsertData;
