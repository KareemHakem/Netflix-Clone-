import { axios } from "../axios";
import requests from "../Requests";

export const fetchMovie = async () => {
  const { data } = await axios.get(requests.fetchNetflixOriginals);

  return data;
};
