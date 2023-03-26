import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Components


// Screens
import LoginScreen from './src/screens/LoginScreen';
import RoutesScreen from './src/screens/RoutesScreen';
import RouteScreen from './src/screens/RouteScreen';


const Stack = createNativeStackNavigator();

// App
const App = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Routes" component={RoutesScreen} />
        <Stack.Screen name="Route" component={RouteScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;