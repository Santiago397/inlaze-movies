import { useDispatch, useSelector } from "react-redux"
import Navbar from "../../components/navbar/Navbar"
import { useEffect, useState } from "react"
import { getAllMovies, getNowPlaying, getPopular, getTopRated, getUpcoming } from "../../redux/api/movies"

const HomePage = () => {

  const dispatch = useDispatch()
  const moviesState = useSelector((state) => state.movies)
  const moviesDiscoverState = useSelector((state) => moviesState.list.discover.data.results)

  useEffect(() => {
    if (moviesState.list.discover.status === 'idle') {
      dispatch(getAllMovies())
      dispatch(getPopular())
      dispatch(getNowPlaying())
      dispatch(getTopRated())
      dispatch(getUpcoming())
    } 
  }, [dispatch, moviesDiscoverState])

  
  return (
    <>
      <div>
        {
          moviesDiscoverState ?
          moviesDiscoverState.map((movie, index) => {
            return (
              <div key={index}>
                <span>{movie.title}</span>
              </div>
            )
          })
          :
          []
        }
      </div>
    </>
  )
}

export default HomePage
