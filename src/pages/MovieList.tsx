import {
  Img,
  LinkComponent,
  MovieComponent,
  MovieDescription,
  MovieListComponent,
  SearchComponent,
  Title,
  Input,
  ButtonSearch,
} from "./movieList.styled";

import { useEffect, useState } from "react";
import axios from "axios";
import { MovieProps } from "../interface";
import { url } from "../App";
import { BiSearch } from "react-icons/bi";

const MovieList = () => {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [movieName, setMovieName] = useState("");
  const [filteredMovies, setFilteredMovies] = useState<MovieProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(url);
        setMovies(response.data);
        setFilteredMovies(response.data);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const fetchMovie = () => {
    if (!movieName.trim()) {
      setFilteredMovies(movies);
      return;
    }

    const searchResult = movies.filter((movie) =>
      movie.title.toLowerCase().includes(movieName.toLowerCase())
    );

    setMovieName("");
    setFilteredMovies(searchResult);
  };

  const TruncatedText = (
    text: string | any[],
    maxLength: number,
    lengthToCut: number
  ) => {
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
    <div>
      <SearchComponent>
        <Input
          type="text"
          placeholder="Search for a movie"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
        />
        <ButtonSearch onClick={fetchMovie} disabled={loading}>
          <BiSearch size={20} />
        </ButtonSearch>
      </SearchComponent>

      <MovieListComponent onWheel={handleScroll}>
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
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
          ))
        ) : (
          <p>Nenhum filme encontrado. Tente outro termo de busca.</p>
        )}
      </MovieListComponent>
    </div>
  );
};

export default MovieList;
