import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';

const WEATHER_API_KEY = 'e040c710b86e3d1d39ae7115047d4d3c'
const BASE_WEATHER_URL = `http://api.openweathermap.org/data/2.5/weather?`

export default function App() {

  const [errorMessage, setErrorMessage] = useState(null)
  const[currentWeather, setCurrentWeather] = useState(null)
  const [unitSystem, setUnitsSyatem] = useState(null)

  useEffect(() =>{
    load()
  }, [])
  async function load() {
    try{
      let { status } =await Location.requestPermissionsAsync()

      if(status !== 'granted') {
        setErrorMessage('Access to location is needed to run the app!')
        return 
      }
      const location = await Location.getCurrentPositionAsync()

      const {latitude, longitude} = location.coords

      const weatherUrl = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`
      //http://api.openweathermap.org/data/2.5/weather?lat=0&lon=0&appid=e040c710b86e3d1d39ae7115047d4d3c this will acsses your phone's coord and tell thw weather
      const response = await fetch(weatherUrl)

      const result = await response.json()

      if(response.ok) {
        setCurrentWeather(result)
      }    else{
        setErrorMessage(result.message)
      }


    }catch (error) {
    }
  }
  if(currentWeather){
    const { main : {temp} } = currentWeather
  return (
    <View style={styles.container}>
      <Text>
        Tempreture in Celsius : {temp -273.15} 
      </Text>
      <StatusBar style="auto" />
    </View>
  )}
  else{
    return (
      <View style={styles.container}>
        <Text>{errorMessage}</Text>
        <StatusBar style="auto" />
      </View>
    )
  }
}
//
//<Text>
//Latitude : {latitude} 
//</Text>
//<Text>
//Longitude : {longitude} 
//</Text>
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
