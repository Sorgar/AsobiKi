import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import GameListScreen from './screens/GameListScreen';
import GameDetailScreen from './screens/GameDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'AsobiKi' }}
        />
        <Stack.Screen 
          name="GameList" 
          component={GameListScreen} 
          options={{ title: 'Jeux du studio' }}
        />
        <Stack.Screen 
          name="GameDetail" 
          component={GameDetailScreen} 
          options={{ title: 'Détail du jeu' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
