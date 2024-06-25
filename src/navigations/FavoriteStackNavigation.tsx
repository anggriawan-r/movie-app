import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MovieDetail from '../screens/MovieDetail'
import Favorite from '../screens/Favorite'

export type FavoriteStackNavigationProps = {
  Favorite: undefined
  MovieDetail: { id: string }
}

const Stack = createNativeStackNavigator<FavoriteStackNavigationProps>()

const FavoriteStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Favorite">
      <Stack.Screen
        name="Favorite"
        component={Favorite}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="MovieDetail" component={MovieDetail} />
    </Stack.Navigator>
  )
}

export default FavoriteStackNavigation
