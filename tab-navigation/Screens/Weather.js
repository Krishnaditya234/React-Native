import * as React from 'react';
import { Text, View} from 'react-native';
import Appbar from './components/appbar';
import Search from './components/search';

export default function App() {
  return(
    <View>
      <Appbar />
      <Search />
    </View>
  );
}