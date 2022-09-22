import axios from 'axios'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './Index.module.css'
import { Link } from 'react-router-dom';

export default function Movies() {
  const [trendingMovies, setTrendingMovies] = useState([]);

 async function getTrending(mediaTypeShow , callback){
  let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${mediaTypeShow}/week?api_key=f1aca93e54807386df3f6972a5c33b50`);

  callback(data.results)
  }
   useEffect(() => {
    getTrending('movie',setTrendingMovies);
   }, [])
  return (
   <>
      <div className='row my-5'>
 
 <div className="col-md-4 d-flex align-items-center">
   <div className='movies'>
     <div className={`${styles.border} mb-3 w-25`}></div>
       <h2 className='text-white'>  Trending Movies <br/> to Watch Right Now <br />
         <p className='text-muted h6 my-1'> most watched movies by days </p>
       </h2>
    <div className={`${styles.border} mt-4`}></div>
  </div>
 </div>
 
 {trendingMovies.map((movie , i)=> <div key={i} className='col-md-2'>  
   <div className="movies">
          <Link to={`/MovieDetails/${movie.id}`} className='text-decoration-none'>
          <img className='w-100' src={'https://image.tmdb.org/t/p/w500'+movie.poster_path} alt="" />
          <h3 className='h6 text-center text-white my-1'> {movie.title} </h3>
         </Link>
   </div>
 </div>)}
</div>
   </>
  )
}
