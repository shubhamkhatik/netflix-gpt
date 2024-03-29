import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const TrailerContainer = () => {
  const movies = useSelector((store)=> store.movies?.nowPlayingMovies)
  if(!movies) return;

 const firstMovie = movies[0];

  const { original_title, overview, id } = firstMovie;
  return (
    <div className="pt-[30%] bg-black md:pt-0">
    <VideoTitle title={original_title} overview={overview} movieId={id}/>
    <VideoBackground movieId={id}/>
    </div>
  )
}

export default TrailerContainer