import React from "react";
import HomePageRowsCom from "../../components/HomePageRowsCom";
import requests from "../../apis/Requests";
import Banner from "../Banner";
import Navbar from "../Navbar";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <HomePageRowsCom
        title="NETFLIX ORIGINALS"
        requests={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <HomePageRowsCom title="Trending Now" requests={requests.fetchTrending} />
      <HomePageRowsCom title="Top Rated" requests={requests.fetchTopRated} />
      <HomePageRowsCom
        title="Action Movies"
        requests={requests.fetchActionMovies}
      />
      <HomePageRowsCom
        title="Comedy Movies"
        requests={requests.fetchComedyMovies}
      />
      <HomePageRowsCom
        title="Horror Movies"
        requests={requests.fetchHorrorMovies}
      />
      <HomePageRowsCom
        title="Romance Movies"
        requests={requests.fetchRomanceMovies}
      />
      <HomePageRowsCom
        title="Documentaries"
        requests={requests.fetchDocumentaries}
      />
      <HomePageRowsCom title="" requests={requests} />
    </div>
  );
}
