import { View, Text, Button } from 'react-native'
import React from 'react'

const MovieDetail = ({ route, navigation }: any) => {
  const fetchData = async (): Promise<void> => {
    const ACCESS_TOKEN =
      'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjQyNWFkNjAyNzk5YTIyODg5YjQwZDBjZmUwNjk4NSIsIm5iZiI6MTcxOTIzMDc5OS44NjYxMzYsInN1YiI6IjY2NzY1NjE5MzdjZGFmMTQ4MDNiMDUzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ra7aG492hyglzCr7xv4G8DXunZN5Sc994EIihw_nAvI'
    const url =
      'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'

    const options: RequestInit = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    }

    try {
      const response = await fetch(url, options)
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
