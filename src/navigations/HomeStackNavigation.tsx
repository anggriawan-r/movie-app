import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import MovieDetail from '../screens/MovieDetail'
import Favorite from '../screens/Favorite'

export type HomeStackNavigationProps = {
  Home: undefined
  MovieDetail: { id: string }
  Favorite: undefined
}

const Stack = createNativeStackNavigator<HomeStackNavigationProps>()

const HomeStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="MovieDetail" component={MovieDetail} />
    </Stack.Navigator>
  )
}

export default HomeStackNavigation
