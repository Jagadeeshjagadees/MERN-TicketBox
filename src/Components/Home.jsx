import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Movie_api='https://api.themoviedb.org/3/movie/now_playing?api_key=bc973c629b32fa6a027c4c9bf0466304&language=en-US&page=1'
const Image_api='https://image.tmdb.org/t/p/w500';
const Home=()=>{
    const [movies,setMovies]=useState([]);
    const navigate=useNavigate();
    const navigate2=useNavigate();
    useEffect(()=>{
        const user=localStorage.getItem('userEmail');
        if(!user){
            navigate2('/login')
        }
    },
    []) ; 
    useEffect(()=>{
axios.get(Movie_api).then((res)=>{ 
    setMovies(res.data.results)
})
    },[]);
   // const navigate=useNavigate();

    const handleClick=(movie)=>{
      //  let tit=movie.title
        //console.log(tit)
          navigate('/movie/:id'+movie.id,{state :movie})
         // console.log(movieID)
    }
    
    return(<div style={{padding:30,display:'flex',flexWrap:'wrap'}}>
        
        {movies.map(movie=>{
           // console.log(movie.poster_path)
            return(
                <div key={movie.id}>
                    
            <Card onClick={()=>handleClick(movie)} key={movie.id} style={{width:'23rem',padding:25,height:'auto',overflow:'hidden',margin:10}}>
         <Card.Img src={Image_api+movie.poster_path} height={'auto'} />

           <Card.Title> {movie.title} </Card.Title>
            </Card>
            </div>
       ) 
        })} ;
    </div>)
}
export default Home ;