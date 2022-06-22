import 'react-native-gesture-handler'
import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../screens/HomeScreen'
import DetailScreen from '../screens/DetailScreen';

const Stack = createStackNavigator()

const StackNav = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Home' >     
        <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name='Detail' component={DetailScreen}/>

        
    </Stack.Navigator>
</NavigationContainer>
  )
}

export default StackNav