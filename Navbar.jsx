import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Index.module.css'


export default function Navbar(props) {
  return (
   <>
   
   <nav className={`${styles.navBg} navbar navbar-expand-lg w-100`}>
  <div className="container-fluid">
    <Link className= "navbar-brand fs-4 text-white" to="/">Noxe</Link>
    <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span> menu </span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto">
        {props.userData ?
         <>
          <li className="nav-item">
          <Link className="nav-link text-white" to="home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="movies">Movies</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="tvshow">Tv shows</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="people">People</Link>
        </li>
        </> : ''}

      </ul>   
      <ul className="navbar-nav ">
        {/* <li className="nav-item">
          <Link className="nav-link text-white" to="search">Search</Link>
        </li> */}
        <li className="nav-item d-flex align-items-center text-white">
          <i className='fab mx-2 fa-facebook'></i>
          <i className='fab mx-2 fa-twitter'></i>
          <i className='fab mx-2 fa-instagram'></i>
        </li>
        {props.userData?  <li className="nav-item">
          <span onClick={props.logOut} className="nav-link text-white" to="logout">Logout</span>
        </li> :<>  <li className="nav-item">
          <Link className="nav-link text-white" to="login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="register">Register</Link>
        </li> </>}
       
      
      </ul>  
    </div>
  </div>
</nav>
   
   </>
  )
}
