import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello User Welcome To this page!</Text>
      <Text>I would like get some informatio about ☺.</Text>
      <TextInput
        placeholder="Enter Your Name Here ☺"
        style={{ borderColor:"black", textAlign:"center" }}
      />
      <TextInput
        placeholder="Enter Your Email Adderes Here ☺"
        style={{ borderColor:"black", textAlign:"center" }}
      />
      <TextInput
        placeholder="Enter Your Phone Number Here ☺"
        style={{ borderColor:"black", textAlign:"center" }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
