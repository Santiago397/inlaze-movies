import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const getAllMovies = createAsyncThunk("movies/getAllMovies", async () => {
  let searchKey = ''

  const type = searchKey ? "search" : "discover"
  const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/${type}/movie`, {
    params: {
      api_key: import.meta.env.VITE_API_KEY,
      query: searchKey
    }
  })

  return data
})

const getNowPlaying = createAsyncThunk("movies/getNowPlaying", async () => {

  const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/movie/now_playing`, {
    params: {
      api_key: import.meta.env.VITE_API_KEY,
    }
  })

  return data
})

const getPopular = createAsyncThunk("movies/getPopular", async () => {

  const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/movie/popular`, {
    params: {
      api_key: import.meta.env.VITE_API_KEY,
    }
  })

  return data
})

const getTopRated = createAsyncThunk("movies/getTopRated", async () => {

  const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/movie/top_rated`, {
    params: {
      api_key: import.meta.env.VITE_API_KEY,
    }
  })

  return data
})

const getUpcoming = createAsyncThunk("movies/getUpcoming", async () => {

  const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/movie/upcoming`, {
    params: {
      api_key: import.meta.env.VITE_API_KEY,
    }
  })

  return data
})

const getMovie = createAsyncThunk("movies/getMovie", async (id) => {
  const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/movie/${id}`, {
    params: {
      api_key: import.meta.env.VITE_API_KEY,
      append_to_response: "video"
    }
  })

  return data
})

export {
  getAllMovies,
  getNowPlaying,
  getPopular,
  getTopRated,
  getUpcoming,
  getMovie
}
