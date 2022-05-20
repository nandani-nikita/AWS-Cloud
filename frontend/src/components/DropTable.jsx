import React from "react";
import { useEffect } from "react";

const DropTable = () => {
	useEffect(() => {
		fetch('http://3.110.43.41:8080/dropTable')
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
	<h1>Drop Table</h1>
    <div id="dataDiv"></div>
	</div>
);
};

export default DropTable;
