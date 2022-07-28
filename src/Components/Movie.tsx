import { Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieType } from "../Types/Movie.type";
import Navbar from "./Navbar";

export const Movie = () => {
  
  const { id } = useParams();

  const [singleMovie, setSingleMovie] = useState<MovieType>();

  useEffect(() => {
    axios.get(`http://localhost:4000/movie/${id}`).then((res) => {
      const melo = res.data;
      setSingleMovie(melo);
    });
  });

  return (
    <div>
    {singleMovie ? (
      <>
      <Navbar/>
          <div style={{'fontWeight':'bolder', 'marginTop':'20px'}}>
              <h1>
                {singleMovie.title}
              </h1>
          </div>
          <div className="card-container" style={{'marginTop':'25px'}}>
            <div className="card-image"></div>
            <img src={singleMovie.poster_path} alt="" style={{'width': '100%'}}/>
            <div>
              <div style={{'fontWeight':'bolder', 'width': '380px'}}>
                <p style={{'margin':'20px'}}> Description: </p>
                <p style={{'margin':'20px'}}> {singleMovie.overview} </p>
                <p style={{"opacity":"0.5"}}> Votes: {singleMovie.vote_count} / Average vote: {singleMovie.vote_average} </p>
                <p style={{"opacity":"0.5"}}> Popularity: {singleMovie.popularity} </p>
              </div>
            </div>
          </div>
      </>
    ) : (
      <></>
    )}
  </div>
  );
};
