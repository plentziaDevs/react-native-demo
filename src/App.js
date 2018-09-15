import React from 'react';
import { Button, SafeAreaView, Text } from 'react-native';

import styles from './App.style';
import PKG from '../package.json';

const App = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.text}>
      {`${PKG.name} ${PKG.version}`}
    </Text>
    <Button title="Press me" />
  </SafeAreaView>
);

export default App;
