import React, { Component } from 'react';
import './App.css';
import recognizeMic from 'watson-speech/speech-to-text/recognize-microphone';
import Personas from './analysis/Personas';
import Emotion from './analysis/Emotion';

let raw_text = [];
let final_text = '';

class App extends Component {
	constructor() {
		super();
		this.state = {
			speech_text : '',
			final_text: '',
			personas: '',
			emotion: '',
			route: ''
		}
	}

  componentDidMount() {
		fetch("https://soriapi.herokuapp.com/")
		.then(()=>console.log("Wake up API!"))
		.catch(e=>console.log(e))
	}

  onClick = () => {
	  	fetch('https://soriapi.herokuapp.com/api/speech-to-text/token')
		  .then(response => response.text())
		  .then(token => {
		    const stream = recognizeMic({
		        token: token,
		        objectMode: true, // send objects instead of text
		        extractResults: true, // convert {results: [{alternatives:[...]}], result_index: 0} to {alternatives: [...], index: 0}
		        format: false // optional - performs basic formatting on the results such as capitals an periods
		    });
		    stream.on('data', (data) => {
		      // console.log(data);
		      
		      if (data.final) {
		      	raw_text = raw_text.concat(data.alternatives[0].transcript);
		      }
		      this.setState({speech_text:data.alternatives[0].transcript});
		    });
		    stream.on('error', (err) => console.log(err));
		    document.querySelector('#stop').onclick = () => {
		      stream.stop();
		      // console.log("Stop Clicked");
		      final_text = raw_text.toString();
		      final_text = final_text.replace(/,/g, " ");
		      final_text = final_text.replace(/%HESITATION/g, " ");
		      // console.log(final_text);
		      this.setState({speech_text: '', final_text: final_text});
		      document.querySelector("#input_result").defaultValue = final_text;
		    };
		  }).catch(err => console.log(err));
  }

  clear = () => {
  	this.setState({
  		speech_text : '',
		final_text: ''
  	})
  	raw_text = [];
  }

  analyze = () => {
	fetch('https://soriapi.herokuapp.com/indico/personas', {
		method: 'post',
		headers: {'Content-Type' : 'application/json'},
		body: JSON.stringify({
			text: this.state.final_text
		})	
	})
	.then(res => res.json())
	.then(res => {
		this.setState({route: "personas", personas: res});
		})
	}

  analyze_emotion = () => {
	fetch('https://soriapi.herokuapp.com/indico/emotion', {
		method: 'post',
		headers: {'Content-Type' : 'application/json'},
		body: JSON.stringify({
			text: this.state.final_text
		})	
	})
	.then(res => res.json())
	.then(res => {
		this.setState({route: "emotion", emotion: res});
		})
	}

  render() {
    return (
      <div className="App">
        <h3 style={{margin: "30px 0"}} className='typography-line'>To start, press [SPEAK]. Introduce yourself. When you finish, press [STOP].</h3>
        <button className='btn btn-outline-primary btn-round' onClick={this.onClick}>Speak</button>
        <button className='btn btn-outline-danger btn-round' id="stop">Stop</button>
        <button className='btn btn-outline-warning btn-round' onClick={this.clear}>Clear All</button>
        <div className='form-group has-success'><h4>Speech Text</h4>
        <input type="text" className="form-control" placeholder="Speech Text" value={this.state.speech_text}/>
        <h4>Result Text</h4>
        <textarea id = 'input_result' type="text" className="form-control" placeholder="Result" value={this.state.final_text} />
        </div>
        <button className='btn btn-danger btn-round' onClick={this.analyze}>Personas Analysis</button>
        <button className='btn btn-info btn-round' onClick={this.analyze_emotion}>Emotion Analysis</button>
        {
        	(this.state.route === "personas") ? <Personas personas = {this.state.personas} /> : <div></div>
        }
        {
			(this.state.route === "emotion") ? <Emotion emotion = {this.state.emotion} /> : <div></div>
        }
        
        
      </div>
    );
  }
}

export default App;


