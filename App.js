/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import WordScreen from './src/screens/WordScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Lessons List'}}
        />
        <Stack.Screen
          name="Word"
          component={WordScreen}
          options={{title: 'Words List'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
