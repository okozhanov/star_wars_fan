/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

// redux
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/redux';

// navigation
import RootNavigation from './src/navigation';

function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.app}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  app: {
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
  },
});

export default App;
