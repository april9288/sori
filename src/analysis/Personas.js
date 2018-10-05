import React from 'react';

const Personas = ({personas}) => {
	let sorted_data = [];
	for (let data in personas) {
		sorted_data.push([data, personas[data]]);
	}; 
	sorted_data.sort((a,b)=> b[1]- a[1]);

	if (personas.length === 0) {
		return (
			<div>No Data Found
			</div>
			);		
	} else {
		return (
		<div>
		<h3>Your most likely personality types are... </h3>
		<h1 style={{color: "#4C73DD"}}>{sorted_data[0][0]}  <span className="badge badge-pill badge-primary">{Math.trunc(sorted_data[0][1]*100) + "%"}</span></h1>
		<h2 style={{color: "#4C73DD"}}>{sorted_data[1][0]}  <span className="badge badge-pill badge-primary">{Math.trunc(sorted_data[1][1]*100) + "%"}</span></h2>
		<h3 style={{color: "#84a0ed"}}>{sorted_data[2][0]}  <span className="badge badge-pill badge-primary">{Math.trunc(sorted_data[2][1]*100) + "%"}</span></h3>
		<h3 style={{color: "#8f9cc1"}}>{sorted_data[3][0]}  <span className="badge badge-pill badge-primary">{Math.trunc(sorted_data[3][1]*100) + "%"}</span></h3>
		</div>
			);

	}

}

export default Personas;

