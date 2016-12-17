import React from 'react';
import { browserHistory } from 'react-router';
import analyze from '../../analyzeText.js';

class sideBar extends React.Component {
  constructor(props) {
	  super(props);
	  this.state = {
	  };
  }

  selectDiv(e) {
    if(document.getElementsByClassName(this.props.element.class + 'a')[0].style.background === 'green') {
      document.getElementsByClassName(this.props.element.class + 'a')[0].style.background = 'white';
      var index = analyze.elementsSelected.indexOf(this.props.element.class);
      console.log(analyze)
      analyze.elementsSelected.splice(index, 1)
      console.log(analyze)
    } else{
      document.getElementsByClassName(this.props.element.class + 'a')[0].style.background = 'green';
      analyze.elementsSelected.push(this.props.element.class)  
    }
  }

  render() {
    return (
      <div className={this.props.element.class + 'a elementSideBar'} onClick={(e) => this.selectDiv(e)}>
        <div>
          Element Type: {this.props.element.element}
        </div>
        <div>
          Text: {this.props.element.text}
        </div>
      </div>
    );

  }
}

export default sideBar;