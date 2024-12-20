import {
  BackIcon,
  DescriptionComponent,
  DescriptionSubtitles,
  DescriptionTexts,
  Img,
  ImgBanner,
  MovieComponent,
  MoviePage,
} from "./movieDetail.styled";

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { MovieProps } from "../interface";
import { url } from "../App";
import { BiArrowBack } from "react-icons/bi";

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovieById = async (id: string) => {
      try {
        const response = await axios.get(`${url}/${id}`);
        setMovie(response.data);
      } catch (error) {
        setError("Erro ao buscar o filme. Verifique se o ID está correto.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchMovieById(id);
    }
  }, [id]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <MoviePage>
      {movie ? (
        <MovieComponent>
          <Img src={movie?.image} alt={movie?.title} />

          <DescriptionComponent>
            <DescriptionTexts>
              <h1>{movie?.title}</h1>

              <DescriptionSubtitles>
                {movie.original_title} [{movie.original_title_romanised}]
              </DescriptionSubtitles>

              <DescriptionSubtitles>
                Ano: {movie?.release_date}
              </DescriptionSubtitles>

              <DescriptionSubtitles>
                Director: {movie.director}
              </DescriptionSubtitles>
              
              <DescriptionSubtitles>
                Producer: {movie.producer}
              </DescriptionSubtitles>
            </DescriptionTexts>

            <ImgBanner src={movie.movie_banner} />
          </DescriptionComponent>
        </MovieComponent>
      ) : (
        <div>Filme não encontrado</div>
      )}
      <BackIcon to="/">
        <BiArrowBack size={40} color="white" />
      </BackIcon>
    </MoviePage>
  );
};

export default MovieDetail;
