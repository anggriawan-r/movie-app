import { DimensionValue, StyleProp, ViewStyle } from 'react-native'

export type MovieListProps = {
  title: string
  path: string
  coverType: 'poster' | 'backdrop'
}

export type MovieItemProps = {
  movie: Movie
  size?: { width?: DimensionValue; height?: DimensionValue }
  coverType: 'poster' | 'backdrop'
  containerStyles?: StyleProp<ViewStyle>
}

export type Movie = {
  backdrop_path: string
  genres: { id: number; name: string }
  homepage: string
  id: number
  original_title: string
  overview: string
  popularity: number
  poster_path: number
  original_language: string
  production_companies: {
    id: number
    logo_path: string
    name: string
    origin_country: string
  }
  production_countries: {
    iso_3166_1: string
    name: string
  }
  release_date: Date
  revenue: number
  runtime: number
  spoken_languages: {
    english_name: string
    iso_639_1: string
    name: string
  }
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export type MovieInfo = {
  label: string
  value: string | number | Date
  isDate?: boolean
}

export const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as const

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const
