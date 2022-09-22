import axios from 'axios'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Index.module.css'

export default function Homepage() {

  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingTv, setTrendingTv] = useState([]);
  const [trendingPeople, setTrendingPeople] = useState([]);

 async function getTrending(mediaTypeShow , callback){
  let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${mediaTypeShow}/week?api_key=f1aca93e54807386df3f6972a5c33b50`);

  callback(data.results.slice(0,10))
  }
   useEffect(() => {
    getTrending('movie',setTrendingMovies);
    getTrending('tv',setTrendingTv);
    getTrending('person',setTrendingPeople);

   }, [])
   
  return (
    <>
    <div className='row my-5 py-2'>
 
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
          <h3 className='h6 text-center text-white my-2'> {movie.title} </h3>
         </Link>
        </div>
      </div>)}
    </div>
    <div className={`${styles.border} mb-3 w-75 ms-auto`}></div>

    <div className='row my-5 py-2'>
 
 <div className="col-md-4 d-flex align-items-center">
   <div className='tv'>

     <div className={`${styles.border} mb-3 w-25`}></div>
       <h2 className='text-white'>  Trending TV <br/> to Watch Right Now <br />
         <p className='text-muted h6 my-2'> most watched tv by days </p>
       </h2>
    <div className={`${styles.border} mt-4`}></div>
  </div>
 </div>
 
 {trendingTv.map((tv , i)=> <div key={i} className='col-md-2'>  
   <div className="tv">
   <Link to={`/TvDetails/${tv.id}`} className='text-decoration-none'>
     <img className='w-100' src={'https://image.tmdb.org/t/p/w500'+tv.poster_path} alt="" />
     <h3 className='h6 text-center text-white my-1'> {tv.name} </h3>
    </Link>
   </div>
 </div>)}
    </div>

    <div className={`${styles.border} mb-3 w-75 ms-auto`}></div>

    <div className='row my-5 py-2'>
 
 <div className="col-md-4 d-flex align-items-center">
   <div className='tv'>
     <div className={`${styles.border} mb-3 w-25`}></div>
       <h2 className='text-white'>  Trending People <br/> to Watch Right Now <br />
         <p className='text-muted h6 my-2'> most watched people by days </p>
       </h2>
    <div className={`${styles.border} mt-4`}></div>
  </div>
 </div>
 
 {trendingPeople.map((person , i)=> <div key={i} className='col-md-2'>  
   <div className="movies">
     <img className='w-100 ' src={'https://image.tmdb.org/t/p/w500'+person.profile_path} alt="Not Found" />
     <h3 className='h6 text-center text-white my-1'> {person.name} </h3>
   </div>
 </div>)}
    </div>
    </>
  )
}
