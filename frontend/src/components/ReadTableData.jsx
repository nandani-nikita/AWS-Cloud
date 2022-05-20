import React from "react";
import { useEffect } from "react";

const AllData = () => {
	useEffect(() => {
		fetch('http://3.110.43.41:8080/')
			.then(response => {
				if(response.status == 200) {
					return response.json();
				} else {
					document.getElementById('dataDiv').innerText = "No Data Fetched";
					throw response
				}
			})
			.then(result => {
				console.log(result);
				const data = result.msg;
				document.getElementById('dataDiv').innerText = "";

				if (data.length > 0) {
					let table = document.createElement('table');
					table.setAttribute('id', 'table');
					let tHead = document.createElement('thead');
					let keys = Object.keys(data[0]);
					for (let key in keys) {
						let th = document.createElement('th');
						let textNode = document.createTextNode(keys[key].toUpperCase());
						th.appendChild(textNode);
						tHead.appendChild(th);
					}
					table.appendChild(tHead);
					for (let ele in data) {
						let tRow = document.createElement('tr');
						for (let item in data[ele]) {

							let tData = document.createElement('td');
							let text = document.createTextNode(data[ele][item]);
							tData.appendChild(text);
							tRow.appendChild(tData);
						}
						table.appendChild(tRow);
					}
					document.getElementById('dataDiv').appendChild(table);
				}

			}).catch(err => {
				console.log(err);
			})
	}, []);
	return (
		<div>
			<h1>Table Data</h1>
			<div id="dataDiv">

			</div>
		</div>
	);
};

export default AllData;
