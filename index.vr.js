import React, { Component } from 'react';
import { AppRegistry, asset, Pano, View } from 'react-vr';
import WeatherCard from './vr/components/WeatherCard';
import WindCloudObject from './vr/components/WindCloudObject';

const api_key = 'bb436a3872095967e4e3e692b1690156';

class WeatherSimulator extends Component {
  constructor() {
    super();

    this.state = {
      weatherObject: {
        name: '',
        main: {
          temp: 0
        },
        weather: [
          {description: ''}
        ],
        wind: {
          deg: 1,
          speed: 1
        }
      }
    }
  }

  componentDidMount() {
    //Can change city query here with OpenWeatherMap city id code
    fetch(`http://api.openweathermap.org/data/2.5/weather?id=5391959&appid=${api_key}`, {
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
        <WindCloudObject wind={this.state.weatherObject.wind}/>
      </View>
    )
  }
};

AppRegistry.registerComponent('WeatherSimulator', () => WeatherSimulator);