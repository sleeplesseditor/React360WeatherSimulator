import React, { Component } from 'react';
import { AppRegistry, asset, Pano, Text, View } from 'react-vr';
import WeatherCard from './vr/components/WeatherCard';

const api_key = 'bb436a3872095967e4e3e692b1690156';

class WeatherSimulator extends Component {
  constructor() {
    super();

    this.state = {
      weatherObject: {}
    }
  }

  componentDidMount() {
    //Can change city query here
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=SanFrancisco&app=${api_key}`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(json => this.setState({weatherObject: json}));
  }

  //Can change city image here
  render() {
    return (
      <View style={{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'}}
      >
        <Pano source={asset('lombard-vr.jpg')}></Pano>
        <WeatherCard weatherObject={this.state.weatherObject}/>
      </View>
    )
  }
};

AppRegistry.registerComponent('WeatherSimulator', () => WeatherSimulator);