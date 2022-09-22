
import React, { useState , useEffect } from 'react'
import { Navigate, Route , Routes , useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Homepage from './Homepage';
import Movies from './Movies';
import MovieDetails from './MovieDetails';
import Tv from './Tv';
import TvDetails from './TvDetails';
import People from './People';
import Login from './Login';
import Register from './Register';
import NotFound from './NotFound';
import jwtDecode from 'jwt-decode';
import Footer from './Footer';



export default function App() {

  let navigate= useNavigate(); 
  const [userData, setuserData] = useState(null);
 
  function saveUserData(){
    let encodeToken = localStorage.getItem('userToken');
    let decodeToken = jwtDecode(encodeToken);
    setuserData(decodeToken);
  }
  useEffect(() => {
    if(localStorage.getItem('userToken'))
  {
    saveUserData()
  }
    
  }, [])
  
  function ProtectedRoute(props){
    if(localStorage.getItem('userToken')=== null){
      return <Navigate to='/Login' />
    }
  else {
    return props.children;
    //navigate to your destination
  }
  }
     function logOut(){
      setuserData(null);
      localStorage.removeItem('userToken');
      navigate('/login')
     }
  return (
    <>
    <Navbar userData={userData} logOut={logOut}/>

    <div className="container">

    <Routes>
      <Route path='' element={ <ProtectedRoute> <Homepage/> </ProtectedRoute>  } />  
      <Route path='home' element={<ProtectedRoute> <Homepage/> </ProtectedRoute>  } /> 
      <Route path='movies' element={ <ProtectedRoute> <Movies/> </ProtectedRoute>} />  
      <Route path='movieDetails' element={ <ProtectedRoute> <MovieDetails/> </ProtectedRoute>} > 
        <Route path=':id' element={ <ProtectedRoute> <MovieDetails/> </ProtectedRoute>}/> 
      </Route> 
      <Route path='tvshow' element={ <ProtectedRoute> <Tv/> </ProtectedRoute>} />
      <Route path='tvDetails' element={ <ProtectedRoute> <TvDetails/> </ProtectedRoute>} > 
        <Route path=':id' element={ <ProtectedRoute> <TvDetails/> </ProtectedRoute>}/> 
      </Route> 
      <Route path='people' element={<ProtectedRoute> <People/> </ProtectedRoute>} />  
      <Route path='login' element={  <Login saveUserData={saveUserData}/> } />  
      <Route path='register' element={<Register/>} />  
      <Route path='*' element={<NotFound/>} />  
    </Routes>
    
    </div>
    <Footer/>
    
    {/* <Route path=':id' element={ <ProtectedRoute> <TvDetails/> </ProtectedRoute>}/>  */}
    </>
  )
}


