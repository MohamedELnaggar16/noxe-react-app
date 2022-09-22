import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function MovieDetails() {

    let parameters = useParams();
    const [movieDetails, setMovieDetails] = useState();

  async function showMovieDetails(id){

    let {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=f1aca93e54807386df3f6972a5c33b50`);
    setMovieDetails(data);
    }
    useEffect(() => {
      showMovieDetails(parameters.id)
    }, [])
    
  return (
    <>
{movieDetails? <div className="row my-5 text-white vh-100">
    <div className="col-md-3">
         <img className='w-100' src={'https://image.tmdb.org/t/p/w500'+movieDetails.poster_path} alt="" />
    </div>
    <div className="col-md-9">
        <h2 className='my-5'>{movieDetails.title}</h2>
        <h5>Release Date : {movieDetails.release_date}</h5>
        <p>{movieDetails.overview}</p>
        <p>Vote : {movieDetails.vote_average}</p>
    </div>
</div> : <div className='d-flex justify-content-center align-items-center text-white vh-100'>
                    <i className='fas fa-spinner fa-spin fa-4x'> </i>
        </div>}
    </>
  )
}
