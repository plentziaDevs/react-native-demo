import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import { Button } from './components';
import styles from './App.style';
import PKG from '../package.json';

const App = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.text}>
      {`${PKG.name} ${PKG.version}`}
    </Text>
    <Button title="Presioname" />
  </SafeAreaView>
);

export default App;
