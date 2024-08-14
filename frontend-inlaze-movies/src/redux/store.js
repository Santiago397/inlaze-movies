import { configureStore } from '@reduxjs/toolkit'
import movieSlicer from './slices/movies'

export const store = configureStore({
  reducer: {
    movies: movieSlicer
  }
})
