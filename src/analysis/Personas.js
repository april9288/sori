import React from 'react';

const Personas = ({personas}) => {
	// console.log("personas : ", personas);
	let sorted_data = [];
	for (let data in personas) {
		sorted_data.push([data, personas[data]]);
	}; 
	sorted_data.sort((a,b)=> b[1]- a[1]);
	// console.log("sorted data is :", sorted_data);

	if (personas.length === 0) {
		return (
			<div>No Data Found
			</div>
			);		
	} else {
		return (
		<div>
		<h3>Your most likely personality types are... </h3>
		<h1 style={{color: "#4C73DD"}}>{sorted_data[0][0]}</h1>
		<h2 style={{color: "#4C73DD"}}>{sorted_data[1][0]}</h2>
		<h1 style={{color: "#84a0ed"}}>{sorted_data[2][0]}</h1>
		<h3 style={{color: "#8f9cc1"}}>{sorted_data[3][0]}</h3>
		</div>
			);

	}

}

export default Personas;

