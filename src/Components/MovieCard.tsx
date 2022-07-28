import * as React from "react";
import { MovieType } from "../Types/Movie.type";
import "../App.css";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

interface Props {
  movie: MovieType;
}

const MediaCard: React.FC<Props> = ({ movie }) => {
  return (
    movie && (
      <div className="card">
      <img src={movie.poster_path} alt="Avatar" style={{"width":"100%"}}/>
      <div className="container">
        <h4 style={{"color":"white"}}><b>{movie.title}</b></h4> 
        <p style={{"color":"white"}}>Average vote: {movie.vote_average}</p> 
      </div>
      <Button size="small" color="black">
        <Link to={"/movie/" + movie.id}>Learn more</Link>
      </Button>
    </div>
    )
  );
};

export default MediaCard;