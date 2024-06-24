import { View, Text, Button } from 'react-native'
import React from 'react'

const Home = ({ navigation }: any): any => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home</Text>
      <Button
        title="Pergi Ke Movie Detail"
        onPress={() => navigation.navigate('MovieDetail', { id: 1 })}
      />
    </View>
  )
}

export default Home
