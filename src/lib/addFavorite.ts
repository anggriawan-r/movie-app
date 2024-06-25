import AsyncStorage from '@react-native-async-storage/async-storage'
import { Movie } from '../types/app'

export const addFavorite = async (
  movie: Movie,
  setIsFavorite: (arg: boolean) => void,
): Promise<void> => {
  try {
    const initialData: string | null =
      await AsyncStorage.getItem('@FavoriteList')

    let favMovieList: Movie[] = []

    if (initialData !== null) {
      favMovieList = [...JSON.parse(initialData), movie]
    } else {
      favMovieList = [movie]
    }

    await AsyncStorage.setItem('@FavoriteList', JSON.stringify(favMovieList))
    setIsFavorite(true)
  } catch (error) {
    console.log(error)
  }
}
