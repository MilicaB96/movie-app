import axios from "axios";
import ApiService from "./ApiService";

const ENDPOINTS = {
  MOVIE: "/movie/",
  LIKE: "/like/",
  DISLIKE: "/dislike/",
  WATCHLIST: "/watchlist/",
  WATCHED: "/watched/",
  POPULAR: "/popular-movies/",
  RELATED: "/related-movies/",
};
class MovieService extends ApiService {
  createMovie = async (movie) => {
    const data = await this.client.post(ENDPOINTS.MOVIE, movie);
    return data.data;
  };
  getAll = async (page, search, genre) => {
    const data = await this.client.get(ENDPOINTS.MOVIE, {
      params: { page, search, genre },
    });
    return data.data;
  };
  getMovie = async (id) => {
    const data = await this.client.get(`${ENDPOINTS.MOVIE}${id}`);
    return data.data;
  };
  like = async (id) => {
    const data = await this.client.patch(
      `${ENDPOINTS.MOVIE}${id}${ENDPOINTS.LIKE}`
    );
    return data.data;
  };
  dislike = async (id) => {
    const data = await this.client.patch(
      `${ENDPOINTS.MOVIE}${id}${ENDPOINTS.DISLIKE}`
    );
    return data.data;
  };

  toggleWatchList = async (id) => {
    const data = await this.client.patch(
      `${ENDPOINTS.MOVIE}${id}${ENDPOINTS.WATCHLIST}`
    );
    return data.data;
  };

  toggleWatched = async (id) => {
    const data = await this.client.patch(
      `${ENDPOINTS.WATCHLIST}${id}${ENDPOINTS.WATCHED}`
    );
    return data.data;
  };

  getWatchList = async (page) => {
    const data = await this.client.get(ENDPOINTS.WATCHLIST, {
      params: { page },
    });
    return data.data;
  };

  deleteFromWatchList = async (id) => {
    const data = await this.client.delete(`${ENDPOINTS.WATCHLIST}${id}/`);
    return data;
  };

  getPopularMovies = async () => {
    const data = await this.client.get(ENDPOINTS.POPULAR);
    return data.data;
  };
  getRelatedMovies = async (genre) => {
    const data = await this.client.get(ENDPOINTS.RELATED, {
      params: { genre },
    });
    return data.data;
  };
  getMovieFromOmdb = async (title) => {
    const data = await axios.get("https://www.omdbapi.com/?apikey=15af022d", {
      params: { t: title, p: "full", type: "movie" },
    });
    return data.data;
  };
}

export default new MovieService();
