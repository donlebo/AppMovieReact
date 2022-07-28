import { DeleteIcon, StarIcon } from "@chakra-ui/icons";
import { Button, Divider, Tooltip } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard";
import { MovieType } from "../Types/Movie.type";
import Navbar from "./Navbar";

type Itype = {
  movie: MovieType;
  id: number;
};
export const Home = () => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [error, setError] = useState([]);
  const [favMovies, setFavMovies] = useState<Itype[]>([]);

  useEffect(() => {
    axios.get("http://localhost:4000/movie").then((res) => setMovies(res.data));
    getFavouriteMovies();
  }, []);

  const getFavouriteMovies = () => {
    axios.get<Itype[]>("http://localhost:4000/favorites").then((res) => {
      setFavMovies(res.data);
    });
  };

  const handleFavAddClick = (movie: MovieType) => {
    !favMovies.some(({movie: favMovie}) => favMovie.id === movie.id) &&
      axios
        .post("http://localhost:4000/favorites", { movie })
        .then((res) => {
          const response = res.data.movie;
          setFavMovies([...favMovies, response]);
          getFavouriteMovies();
        });
  };

  const deleteFav = (movie: Itype) => {
    axios.delete(`http://localhost:4000/favorites/${movie.id}`).then((res) => {
      const response = res.data;
      setFavMovies([...favMovies, response]);
      getFavouriteMovies();
    });
  };

  return (
      <>
      <Navbar />
      <Divider orientation='horizontal' />
      <h1 className="title card-container">Movie list</h1>
      <div className="card-container">
        {movies.length > 0
          ? movies.map((movie) => (
            <div className="card " style={{ margin: "10px" }}>
              {movie ? (
                <>
                  <div className="card-title">
                    <MovieCard movie={movie} key={movie.id} />
                    <Tooltip label="Add to favorite movie list" aria-label='A tooltip'>
                      <StarIcon style={{'marginTop' : '20px'}} onClick={() => handleFavAddClick(movie)} />
                    </Tooltip>
                    
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          ))
          : "Loading.."}
      </div>
      <div>
        <Divider orientation='horizontal' />
        <h1 className="title card-container">Favorite movie list</h1>
      </div>
      <div className="card-container">
        {favMovies?.map((item) => (
          <div
            className="card"
            style={{ margin: "10px" }}
          >
            <MovieCard movie={item.movie} key={item.id}/>
            <div style={{ color: "red" }}>
              <Tooltip label="Delete from favorite movie list" aria-label='A tooltip'>
                <DeleteIcon onClick={() => deleteFav(item)} />
              </Tooltip>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
