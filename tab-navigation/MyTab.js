import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WeatherScreen from './Screens/Weather';
import CalculatorScreen from './Screens/Calculator';
import { Ionicons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

export default function MyTab() {
  return(
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ foucsed, color, size }) => {
        var iconName;

        if (route.name === 'Home') {
          iconName = foucsed ? 'calculator-box1' : 'calculator-outline';
        } else if (route.name === 'Settings'){
          iconName = foucsed ? 'ios-list-box' : 'ios-list';
        }
        else if (route.name === 'Setting'){
          iconName = foucsed ? 'ios-list-box' : 'ios-list';
        }

        return <Ionicons name={iconName} size={size} color={color}/>
      }
    })}
    tabBArOptions={{
      activeTintColor: "red",
      inactiveTintColor: "black"
    }}
    >
      <Tab.Screen name="Weather" component={WeatherScreen} />
      <Tab.Screen name="Calculator" component={CalculatorScreen} />
    </Tab.Navigator>
  );
}