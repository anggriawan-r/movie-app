import React from 'react'
import { View, Text, Button } from 'react-native'
import { API_ACCESS_TOKEN, API_URL } from '@env'

const MovieDetail = ({ route, navigation }: any) => {
  const fetchData = async (): Promise<void> => {
    if (API_URL == null || API_ACCESS_TOKEN.length == null) {
      throw new Error('ENV not found')
    }

    const options: RequestInit = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_ACCESS_TOKEN}`,
      },
    }

    try {
      const response = await fetch(API_URL, options)
      const result = await response.json()
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Movie Detail Page</Text>
      <Button title="Fetch Data" onPress={() => fetchData()} />
    </View>
  )
}

export default MovieDetail
