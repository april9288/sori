import React from 'react';

const Emotion = ({emotion}) => {
	let sorted_data = [];
	for (let data in emotion) {
		sorted_data.push([data, emotion[data]]);
	}; 
	sorted_data.sort((a,b)=> b[1]- a[1]);

	if (emotion.length === 0) {
		return (
			<div>No Data Found
			</div>
			);		
	} else {
		const style1 = {width: sorted_data[0][1]*100 + "%"};
		const style2 = {width: sorted_data[1][1]*100 + "%"};
		const style3 = {width: sorted_data[2][1]*100 + "%"};
		const style4 = {width: sorted_data[3][1]*100 + "%"};
		const style5 = {width: sorted_data[4][1]*100 + "%"};
		return (
			<div><h3>Most likely emotions on your speech are... </h3>
				<div className="container" style={{marginTop: "30px"}}>
				  <div className="row">
				    <div className="col-md-3 col-sm-12">
				    </div>
				    <div className="col-md-1 col-sm-12" style={{fontSize : "1.5rem", paddingRight:"12%"}}>
						{sorted_data[0][0]}
				    </div>
				    <div className="col-md-6 col-sm-12">
						<div className='progress' style={{height: "36px", borderRadius:"10px"}}>
							<div className="progress-bar progress-bar-success" style={style1} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><p>{Math.trunc(sorted_data[0][1]*100) + "%"}</p></div>
						</div>
				    </div>
				  </div>
				  <div className="row">
				    <div className="col-md-3 col-sm-12">
				    </div>
				    <div className="col-md-1 col-sm-12" style={{fontSize : "1.5rem", paddingRight:"12%"}}>
						{sorted_data[1][0]}
				    </div>
				    <div className="col-md-6 col-sm-12">
						<div className='progress' style={{height: "36px", borderRadius:"10px"}}>
							<div className="progress-bar progress-bar-info" style={style2} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><p>{Math.trunc(sorted_data[1][1]*100) + "%"}</p></div>
						</div>
				    </div>
				  </div>
				  <div className="row">
				    <div className="col-md-3 col-sm-12">
				    </div>
				    <div className="col-md-1 col-sm-12" style={{fontSize : "1.5rem", paddingRight:"12%"}}>
						{sorted_data[2][0]}
				    </div>
				    <div className="col-md-6 col-sm-12">
						<div className='progress' style={{height: "36px", borderRadius:"10px"}}>
							<div className="progress-bar progress-bar-primary" style={style3} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><p>{Math.trunc(sorted_data[2][1]*100) + "%"}</p></div>
						</div>
				    </div>
				  </div>
				  <div className="row">
				    <div className="col-md-3 col-sm-12">
				    </div>
				    <div className="col-md-1 col-sm-12" style={{fontSize : "1.5rem", paddingRight:"12%"}}>
						{sorted_data[3][0]}
				    </div>
				    <div className="col-md-6 col-sm-12">
						<div className='progress' style={{height: "36px", borderRadius:"10px"}}>
							<div className="progress-bar progress-bar-warning" style={style4} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><p>{Math.trunc(sorted_data[3][1]*100) + "%"}</p></div>
						</div>
				    </div>
				  </div>
				  <div className="row">
				    <div className="col-md-3 col-sm-12">
				    </div>
				    <div className="col-md-1 col-sm-12" style={{fontSize : "1.5rem", paddingRight:"12%"}}>
						{sorted_data[4][0]}
				    </div>
				    <div className="col-md-6 col-sm-12">
						<div className='progress' style={{height: "36px", borderRadius:"10px"}}>
							<div className="progress-bar progress-bar-danger" style={style5} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><p>{Math.trunc(sorted_data[4][1]*100) + "%"}</p></div>
						</div>
				    </div>
				  </div>
				</div>
			</div>
			);
	}
}

export default Emotion;
