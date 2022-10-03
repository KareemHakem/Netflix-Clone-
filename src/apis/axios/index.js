import axiosPackage from "axios";

export const axios = axiosPackage.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    "content-type": "application/json; charset=utf-8",
  },
});
