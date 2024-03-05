import { Container } from "react-bootstrap";
import NavBar from "./componants/NavBar";
import MoviesList from "./componants/MoviesList";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoveDetails from "./componants/MoveDetails";

function App() {


  const [movies,setMovies]=useState([]);
  const [count,setCount]=useState(0);

  //get number of pages
  

  //search
  const search=(val)=>{
    if(val !== ''){
       getAllMovies(`https://api.themoviedb.org/3/search/movie?query=${val}`)
    }else if(val === ''){
      getAllMovies('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ar&sort_by=popularity.desc');
    }
  }

  //get all movies
  const getAllMovies=async (url)=>{
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTc4YWM1MTI1MTE2YjcyZDE1OTE1ZDE4NjY0MTBmOCIsInN1YiI6IjY1ZTM4NGNjMjBlNmE1MDEyZDUwZTYwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8hjvFFX-C3G1WSZc80n5aVD9ZADsT7liHwoNTFAZVbw'
      }
    }
    const res=await axios.get(url,options);
    setMovies(res.data.results);
    setCount(res.data.total_pages)
    
  }
  
useEffect( ()=>{
  getAllMovies('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ar&sort_by=popularity.desc');
  
},[])  

  return (
    <div className="font color-body">
      <NavBar search={search}/>
      <Container>
        <BrowserRouter>
        <Routes>
          <Route  path="/" element={<MoviesList count={count} getAllMovies={getAllMovies} movies={movies}/>} />
          <Route path="/move/:id" element={<MoveDetails />} />
        </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
