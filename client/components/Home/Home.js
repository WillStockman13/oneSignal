import React from 'react';
import { browserHistory } from 'react-router';


class Home extends React.Component {
  constructor(props) {
	  super(props);
	  this.state = {
      location: []
	  };
    
    }
  
  componentWillMount() {
    var location = {x: 0, y: 0};
    navigator.geolocation.getCurrentPosition(showPosition);
    function showPosition(position) {
      location.x = position.coords.latitude; 
      location.y = position.coords.longitude; 
      $.ajax({
        url: '/api/getWeather',
        method: 'POST',
        data: JSON.stringify(location),
        contentType: 'application/json',
        error: (error) => {
          console.log(error)
        },
        success: (data) => {
          document.getElementById('weather').innerText = 'Weather:' + data.main + '  ' + data.description;
        }
      })
    }
  }
  

  render() {
    return (
      <div id='HomePage'>
        <div id='weather'>
        </div>
      </div>
    );

  }
}

export default Home;