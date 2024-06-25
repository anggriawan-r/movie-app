import { View, ScrollView, StyleSheet, StatusBar } from 'react-native'
import { MovieListProps } from '../types/app'
import React from 'react'
import MovieList from '../components/movies/MovieList'

const movieList: MovieListProps[] = [
  {
    title: 'Now Playing in Theater',
    path: 'movie/now_playing?language=en-US&page=1',
    coverType: 'backdrop',
  },
  {
    title: 'Upcoming Movies',
    path: 'movie/upcoming?language=en-US&page=1',
    coverType: 'poster',
  },
  {
    title: 'Top Rated Movies',
    path: 'movie/top_rated?language=en-US&page=1',
    coverType: 'poster',
  },
  {
    title: 'Popular Movies',
    path: 'movie/popular?language=en-US&page=1',
    coverType: 'poster',
  },
]

const Home = (): JSX.Element => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {movieList.map((item) => (
          <MovieList
            title={item.title}
            path={item.path}
            coverType={item.coverType}
            key={item.title}
          />
        ))}
        <StatusBar translucent={true} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight! + 16,
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 16,
  },
})

export default Home
