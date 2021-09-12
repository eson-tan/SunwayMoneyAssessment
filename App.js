import React from 'react';
import Home from './src/scenes/home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewCustomer from './src/scenes/addNewCustomer';
import {NavigationContainer} from '@react-navigation/native';

import {enableScreens} from 'react-native-screens';

enableScreens();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="NewCustomer" component={NewCustomer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

