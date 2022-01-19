import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { HeaderButton } from "react-navigation-header-buttons";
//import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AboutScreen from './screens/AboutScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator()

const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
          //title: 'First Page', headerStyle: {
            title: 'หน้าหลัก', headerStyle: {
            backgroundColor: '#0068FF',
           // backgroundColor: '#E9BFE2',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="AboutScreen" component={AboutScreen} options={{
          title: 'Second Page', headerStyle: {
            backgroundColor: '#E9BFE2',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App