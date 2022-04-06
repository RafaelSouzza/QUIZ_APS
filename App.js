import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Difficulty from './components/Difficulty';
import Tip from './components/Tip';
import Question from './components/Question';
import End from './components/End';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Difficulty" component={Difficulty} />
        <Stack.Screen name="Tip" component={Tip} />
        <Stack.Screen name="Question" component={Question}/>
        <Stack.Screen name="End" component={End}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}