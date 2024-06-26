import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Movie, MovieListProps } from '../../types/app'
import { API_ACCESS_TOKEN } from '@env'
import MovieItem from './MovieItem'

const coverImageSize = {
  backdrop: {
    width: 280,
    height: 160,
  },
  poster: {
    width: 100,
    height: 160,
  },
}

const MovieList = ({
  title,
  path,
  coverType,
}: MovieListProps): JSX.Element | null => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getMovieList = async (): Promise<void> => {
    setIsLoading(true)
    const url = `https://api.themoviedb.org/3/${path}`
    const options: RequestInit = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_ACCESS_TOKEN}`,
      },
    }

    try {
      const response = await fetch(url, options)
      const result = await response.json()
      setMovies(result.results)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getMovieList()
  }, [])

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.purpleLabel}></View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <FlatList
        style={{
          ...styles.movieList,
          maxHeight: coverImageSize[coverType].height,
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={{ gap: 4 }}
        data={movies}
        renderItem={({ item }) => (
          <MovieItem
            movie={item}
            size={coverImageSize[coverType]}
            coverType={coverType}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    marginLeft: 6,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  purpleLabel: {
    width: 10,
    height: 25,
    borderRadius: 20,
    backgroundColor: '#8978A4',
    marginRight: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '900',
  },
  movieList: {
    paddingLeft: 4,
    marginTop: 8,
  },
})

export default MovieList
