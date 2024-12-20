import {
  Img,
  LinkComponent,
  MovieComponent,
  MovieDescription,
  MovieListComponent,
  Title,
} from "./movieList.styled";

import { useEffect, useState } from "react";
import axios from "axios";
import { MovieProps } from "../interface";
import { url } from "../App";

const MovieList = () => {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(url);
        setMovies(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const TruncatedText = (text: string | any[], maxLength: number, lengthToCut: number) => {
    return text.length > maxLength ? `${text.slice(0, lengthToCut)}...` : text;
  };

  const handleScroll = (e: any) => {
    e.preventDefault();
    e.currentTarget.scrollLeft += e.deltaY;
  };
  

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
      <MovieListComponent onWheel={handleScroll}>
        {movies.length > 0 &&
          movies.map((movie) => (
            <MovieComponent key={movie.id}>
              <LinkComponent to={`/${movie.id}`}>
                <Img src={movie.image} alt={movie.title} />
                <Title>{TruncatedText(movie.title, 22, 19)}</Title>
                <MovieDescription>
                  <p>⭐️ {movie.rt_score}</p>
                  <p className="divider">|</p>
                  <p>{movie.release_date}</p>
                </MovieDescription>
              </LinkComponent>
            </MovieComponent>
          ))}
      </MovieListComponent>
  );
};

export default MovieList;
