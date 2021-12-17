import React from 'react';
import {StyleSheet, View } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { } from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import Email from './screens/Email';


const Stack = createStackNavigator();

export default function App(){
  return (
    
    
    <NavigationContainer theme={DarkTheme}>

      <Stack.Navigator >                
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Email" component={Email} options={{title: 'Email'}}/>        
      </Stack.Navigator>
  
    </NavigationContainer>

  );
}
