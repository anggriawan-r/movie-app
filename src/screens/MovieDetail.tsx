import { API_ACCESS_TOKEN } from '@env'
import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from 'react-native'
import { days, months, Movie, MovieInfo } from '../types/app'
import { LinearGradient } from 'expo-linear-gradient'
import { FontAwesome } from '@expo/vector-icons'
import MovieList from '../components/movies/MovieList'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { HomeStackNavigationProps } from '../navigations/HomeStackNavigation'

const MovieInfoItem = ({
  label,
  value,
  isDate = false,
}: MovieInfo): JSX.Element => {
  const checkIsDate = (value: string | number | Date): string => {
    if (isDate) {
      const date = new Date(value)
      const day = date.getDay()
      const month = date.getMonth()
      const year = date.getFullYear()
      return `${days[day]} ${months[month]} ${day} ${year}`
    }
    return value.toString()
  }

  return (
    <View>
      <Text style={{ fontWeight: 'bold' }}>{label}</Text>
      <Text style={{ fontSize: 14 }}>{checkIsDate(value)}</Text>
    </View>
  )
}

type Props = NativeStackScreenProps<HomeStackNavigationProps, 'MovieDetail'>

const MovieDetail = ({ route }: Props) => {
  const [movie, setMovies] = useState<Movie>()
  const { id } = route.params

  const getMovie = async (): Promise<void> => {
    const url = `https://api.themoviedb.org/3/movie/${id}`
    const options: RequestInit = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_ACCESS_TOKEN}`,
      },
    }
    const response = await fetch(url, options)
    const result: Movie = await response.json()
    setMovies(result)
  }

  useEffect(() => {
    getMovie()
  }, [])

  return (
    <ScrollView>
      <View style={styles.container}>
        {movie && (
          <>
            <ImageBackground
              resizeMode="cover"
              style={{
                width: '100%',
                height: 250,
              }}
              source={{
                uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
              }}
            >
              <LinearGradient
                colors={['#00000000', 'rgba(0, 0, 0, 0.7)']}
                locations={[0.6, 0.8]}
                style={styles.gradientStyle}
              >
                <Text style={styles.movieTitle}>{movie.title}</Text>
                <View style={styles.ratingContainer}>
                  <FontAwesome name="star" size={16} color="yellow" />
                  <Text style={styles.rating}>
                    {movie.vote_average.toFixed(1)}
                  </Text>
                </View>
              </LinearGradient>
            </ImageBackground>

            <View
              style={{
                marginHorizontal: 16,
                marginVertical: 16,
                display: 'flex',
                gap: 16,
              }}
            >
              <Text style={styles.movieOverview}>{movie.overview}</Text>

              <View style={styles.infoContainer}>
                <View style={styles.infoWrapper}>
                  <MovieInfoItem
                    label="Original Language"
                    value={movie.original_language}
                  />
                  <MovieInfoItem
                    label="Release Date"
                    value={movie.release_date}
                    isDate={true}
                  />
                </View>
                <View style={styles.infoWrapper}>
                  <MovieInfoItem label="Popularity" value={movie.popularity} />
                  <MovieInfoItem label="Vote Count" value={movie.vote_count} />
                </View>
              </View>
            </View>
          </>
        )}

        <View style={{ marginVertical: 16 }}>
          <MovieList
            title="Recommendation"
            path={`/movie/${id}/recommendations`}
            key={movie?.title}
            coverType="poster"
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    minHeight: '100%',
  },
  infoContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 48,
  },
  infoWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  movieOverview: {
    fontSize: 14,
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: '500',
    color: 'white',
  },
  ratingContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  rating: {
    fontSize: 16,
    fontWeight: '500',
    color: 'yellow',
  },
  gradientStyle: {
    padding: 8,
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    paddingBottom: 16,
    paddingLeft: 16,
  },
})

export default MovieDetail
