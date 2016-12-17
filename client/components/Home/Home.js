import React from 'react';
import { browserHistory } from 'react-router';
import Box from './../sandBox/sandBox.js';
import SideBar from './../sideBar/sideBar.js';
import analyzeText from './../../analyzeText.js';

class Home extends React.Component {
  constructor(props) {
	  super(props);
	  this.state = {
      finalText: ''
	  };
  this.settings = {
        continuous:true, // Don't stop never because i have https connection
        onResult:function(text){
        // text = the recognized text
        console.log(text)
        this.setState({finalText: text})
        console.log(this.state)
      }.bind(this),
      onStart:function(){
        console.log("Dictation started by the user");
      },
      onEnd:function(){
        analyzeText.analyze(this.state.finalText)
        this.setState({finalText: 'done'})
        console.log("Dictation stopped by the user");
      }.bind(this)
    }
  this.UserDictation = artyom.newDictation(this.settings);
  }
  


  startRecognition() {
    this.UserDictation.start();
  }
   
  stopRecognition() {
    this.UserDictation.stop();
  }

  render() {
    return (
      <div id='HomePage'>
        <div>
          <input type="button" onClick={() => this.startRecognition()} value="Recognize text" />
          <input type="button" onClick={() => this.stopRecognition()} value="stop recognition" />
        </div>
        <div className='sideBar'>
          <div className='sideBarTitle'>Elements</div>
          {analyzeText.elementsCreated.map((element) => <SideBar key={element.class} element={element}/>)}
        </div>
        <div>
          <Box state={this.state.finalText}/>
        </div>
      </div>
    );

  }
}

export default Home;