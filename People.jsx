import axios from 'axios'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './Index.module.css'

export default function People() {
  const [trendingPeople, setTrendingPeople] = useState([]);
 async function getTrending(mediaTypeShow , callback){
  let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${mediaTypeShow}/week?api_key=f1aca93e54807386df3f6972a5c33b50`);

  callback(data.results)
  }
   useEffect(() => {
    getTrending('person',setTrendingPeople);
   }, [])
  return (
  <>
      <div className='row my-5'>
 
 <div className="col-md-4 d-flex align-items-center">
   <div className='tv'>
     <div className={`${styles.border} mb-3 w-25`}></div>
       <h2 className='text-white'>  Trending People <br/> to Watch Right Now <br />
         <p className='text-muted h6 my-1'> most watched people by days </p>
       </h2>
    <div className={`${styles.border} mt-4`}></div>
  </div>
 </div>
 
 {trendingPeople.map((person , i)=> <div key={i} className='col-md-2'>  
   <div className="movies">
     <img className='w-100 text-white' src={'https://image.tmdb.org/t/p/w500'+person.profile_path} alt="Not Found" />
     <h3 className='h6 text-center text-white my-1'> {person.name} </h3>
   </div>
 </div>)}
    </div>
  
  </>
  )
}
