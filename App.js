import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet,SafeAreaView,  Insets, ImageBackground, Text,  ScrollView, View } from 'react-native';

export default class App extends Component {
  
constructor(){
  super();
  
  this.state={
    temp:'',
    city:'',
    feels_like:"",
    temp_min: '',
    temp_max: '',
    pressure: '',
    humidity: ''
  }
  this.getWeather();
};

getLocation = ()=>{
  
}

 getWeather = async() => {
     const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=raipur&units=metric&appid=bdcbe61c5d0c6df231e5493976c83b5b");
     const data =await response.json();
     console.log(data.main.temp) 
     this.setState({
        temp: data.main.temp,
        city: data.name,
        feels_like:data.main.feels_like,
        temp_min:data.main.temp_min,
        temp_max:data.main.temp_max,
        pressure:data.main.pressure,
        humidity:data.main.humidity
      })
  };

  

  render(){
    return (
        <ScrollView>
          
          <SafeAreaView style={{flex:1}}>
          <ImageBackground style={{height:400, width:'100%'}}
                           source={{uri: 'https://t3.ftcdn.net/jpg/02/11/52/42/360_F_211524227_Ett8aboQvVnROAFtqu3S1pW99Y3Th9vm.jpg'}}
          />
            
          
            <View bottom={16}>  
              <Text style={{fontWeight:'bold', fontSize:80, textAlign:'center', textDecorationLine: 'underline'}}> {this.state.city} </Text>
              <Text style={{ fontSize:40,textAlign:'center'}}>Temperature: {this.state.temp} &deg;C </Text>
              <Text style={{ fontSize:20,textAlign:'right'}}>FEELS LIKE: {this.state.feels_like}&deg;C </Text>
              <Text style={{ fontSize:20,textAlign:'right'}}>MINIMUM TEMPERATURE: {this.state.temp_min}&deg;C </Text>
              <Text style={{ fontSize:20,textAlign:'right'}}>MAXIMUM TEMPERATURE: {this.state.temp_max} &deg;C</Text>
              <Text style={{ fontSize:20,textAlign:'right'}}>PRESSURE: {this.state.pressure} Pa </Text>
              <Text style={{ fontSize:20,textAlign:'right'}}>HUMIDITY: {this.state.humidity} g.m-3 </Text>
            </View>
            <StatusBar style="auto" />
          </SafeAreaView> 

      </ScrollView>
    );
  }
}
