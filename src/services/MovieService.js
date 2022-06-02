import ApiService from "./ApiService";
const ENDPOINTS = {
  MOVIE: "/movie/",
  LIKE: "/like/",
  DISLIKE: "/dislike/",
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
}

export default new MovieService();
