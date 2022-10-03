import React, { useEffect, useState } from "react";
import { fetchMovie } from "../../apis/req/MovieReq";

import BannerPage from "../../components/BannerPage";

const imageBanner =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png";

export default function Banner() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchMovie()
      .then((res) => {
        setMovie(
          res.results[Math.floor(Math.random() * res.results.length - 1)]
        );
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  console.log(movie, "movie");

  //   if (loading) return <div>Loading.....</div>;
  if (error) return <div>{error.message}</div>;

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  return (
    <div>
      <BannerPage imageBanner={imageBanner} truncate={truncate} movie={movie} />
    </div>
  );
}
