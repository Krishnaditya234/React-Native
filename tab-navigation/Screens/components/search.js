import React, { useState } from 'react';
import { Text, StyleSheet, TextInput, View, Button } from 'react-native';
import Card from './card';

export default function Search() {
  const [scr, setScr] = useState('');
  const [scrc, setScrc] = useState('');

  function handleChange(val) {
    setScr(val);
  }
  function handleClick(e) {
    setScrc(scr);
  }

  return (
    <View styles={styles.input}>
      <View style={styles.textInput}>
        <TextInput
          placeholder="City Name"
          value={scr}
          onChangeText={(val) => handleChange(val)}
        />
      </View>

      <View style={styles.button}>
        <Button title="Search" color="#ff9642" onPress={handleClick} />
      </View>
      <Card title={scrc} />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    padding: 20,
    borderWidth: 3,
    borderColor: '#ffe05d',
    margin: 20,
  },
  input: {
    margin: 20,
    position: 'relative',
  },

  button: {
    margin: 20,
    marginTop: 5,
    borderRadius: 100,
  },
});
