import React from "react";
import { useEffect } from "react";

const UpdateData = () => {
	useEffect(() => {
		fetch('http://3.110.43.41:8080/updateRecord')
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
	<h1>Update Table Data</h1>
    <div id="dataDiv"></div>
	</div>
);
};

export default UpdateData;
