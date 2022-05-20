import React from "react";
import {useEffect} from "react";

const CreateTable = () => {
    useEffect(() => {
		fetch('http://3.110.43.41:8080/createTable')
			.then(response => {
                console.log(response);
					return response.json();
			})
			.then(data => {
				console.log(data);

				document.getElementById('dataDiv').innerText = "";
				document.getElementById('dataDiv').innerText = data;

			}).catch(err => {
				console.log(err);
			})
	}, []);
return (
	<div>
	<h1>Create Table</h1>
    <div id="dataDiv"></div>
	</div>
);
};

export default CreateTable;
