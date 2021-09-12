import React from 'react';
import Home from './src/scenes/home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewCustomer from './src/scenes/addNewCustomer';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="NewCustomer" component={NewCustomer} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

// export default App;
