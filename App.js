import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/components/Home';
import Difficulty from './src/components/Difficulty';
import Tip from './src/components/Tip';
import Question from './src/components/Question';
import End from './src/components/End';
import { DifficultyContext } from './src/context/DifficultyContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <DifficultyContext>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Difficulty" component={Difficulty} />
          <Stack.Screen name="Tip" component={Tip} />
          <Stack.Screen name="Question" component={Question} />
          <Stack.Screen name="End" component={End} />
        </Stack.Navigator>
      </DifficultyContext>
    </NavigationContainer>
  )
}