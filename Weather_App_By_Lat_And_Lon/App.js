import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';

const WEATHER_API_KEY = 'e040c710b86e3d1d39ae7115047d4d3c'
const BASE_WEATHER_URL = `http://api.openweathermap.org/data/2.5/weather?`

export default function App() {

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
    }
  }
  return (
    <View style={styles.container}>
      <Text>
        Tempreture in Kelvines : {temp}
      </Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
