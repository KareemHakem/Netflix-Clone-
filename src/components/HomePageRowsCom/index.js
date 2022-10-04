import React, { useEffect, useState } from "react";
import { axios } from "../../apis/axios";
import "./style.css";

export default function HomePageRowsCom({
  title,
  requests,
  isLargeRow = false,
}) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const imageUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(requests);
      console.log(data, "data");
      return data;
    };
    setLoading(true);
    fetchData()
      .then((res) => {
        setMovies(res.results);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [requests]);

  if (loading) return "loading.......";
  if (error) return "error";

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <>
                <img
                  key={movie?.id}
                  className={`row-poster ${isLargeRow && "row-posterLarge"}`}
                  src={`${imageUrl}${
                    isLargeRow ? movie?.poster_path : movie?.backdrop_path
                  }`}
                  alt="imageFilm"
                />
              </>
            )
        )}
      </div>
    </div>
  );
}
