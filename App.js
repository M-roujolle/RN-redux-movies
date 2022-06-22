import { View, Text } from 'react-native'
import * as React from 'react'
import HomeScreen from './src/screens/HomeScreen'
import StackNav from './src/navigation/StackNav'

const App = () => {
  return (
    <View style={{flex:1}}>
      <StackNav/>
    </View>
  )
}

export default App