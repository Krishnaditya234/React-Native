import React from 'react';
import {Header} from 'react-native-elements';

export default function Appbar() {
  return(
    <Header
    backgroundColor={'blue'}
      centerComponent={{
        text: 'WEATHER APP',
        style: { color: '#fff', fontSize: 23, fontFamily:'algerian' },
      }}    
    />
  );
}