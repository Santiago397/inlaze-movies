import { createSlice } from "@reduxjs/toolkit"
import { getAllMovies, getNowPlaying, getPopular, getTopRated, getUpcoming } from "../api/movies"

function getAllMoviesHandler(builder) {
  return builder.addCase(getAllMovies.pending, (state, action) => {
    state.list.discover.status = 'pending'
  }).addCase(getAllMovies.fulfilled, (state, action) => {
    state.list.discover.status = 'succeed'
    state.list.discover.data = action.payload
  }).addCase(getAllMovies.rejected, (state, action) => {
    state.list.discover.status = action.error.message ?? 'error'
  })
}

function getPopularHandler(builder) {
  builder.addCase(getPopular.pending, (state, action) => {
    state.list.popular.status = 'pending'
  }).addCase(getPopular.fulfilled, (state, action) => {
    state.list.popular.status = 'succeed'
    state.list.popular.data = action.payload
  }).addCase(getPopular.rejected, (state, action) => {
    state.list.popular.status = action.error.message ?? 'error'
  })
}

function getNowHandler(builder) {
  builder.addCase(getNowPlaying.pending, (state, action) => {
    state.list.now.status = 'pending'
  }).addCase(getNowPlaying.fulfilled, (state, action) => {
    state.list.now.status = 'succeed'
    state.list.now.data = action.payload
  }).addCase(getNowPlaying.rejected, (state, action) => {
    state.list.now.status = action.error.message ?? 'error'
  })
}

function getTopRatedHandler(builder) {
  builder.addCase(getTopRated.pending, (state, action) => {
    state.list.rated.status = 'pending'
  }).addCase(getTopRated.fulfilled, (state, action) => {
    state.list.rated.status = 'succeed'
    state.list.rated.data = action.payload
  }).addCase(getTopRated.rejected, (state, action) => {
    state.list.rated.status = action.error.message ?? 'error'
  })
}

function getUpcomingHandler(builder) {
  builder.addCase(getUpcoming.pending, (state, action) => {
    state.list.upcoming.status = 'pending'
  }).addCase(getUpcoming.fulfilled, (state, action) => {
    state.list.upcoming.status = 'succeed'
    state.list.upcoming.data = action.payload
  }).addCase(getUpcoming.rejected, (state, action) => {
    state.list.upcoming.status = action.error.message ?? 'error'
  })
}

const initialState = {
  list: {
    discover: {
      status: 'idle',
      data: [],
      page: 1
    },
    now: {
      status: 'idle',
      data: [],
      page: 1
    },
    popular: {
      status: 'idle',
      data: [],
      page: 1
    },
    rated: {
      status: 'idle',
      data: [],
      page: 1
    },
    upcoming: {
      status: 'idle',
      data: [],
      page: 1
    },
  },
  movie: {
    status: 'idle'
  }
}

const movieSlicer = createSlice({
  name: 'movies',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    getAllMoviesHandler(builder)
    getPopularHandler(builder)
    getNowHandler(builder)
    getTopRatedHandler(builder)
    getUpcomingHandler(builder)
  }
})

export default movieSlicer.reducer

