import ApiService from "./ApiService";
const ENDPOINTS = {
  MOVIE: "/movie/",
};
class MovieService extends ApiService {
  createMovie = async (movie) => {
    const data = await this.client.post(ENDPOINTS.MOVIE, movie);
    return data.data;
  };
  getAll = async (page = 1) => {
    const data = await this.client.get(ENDPOINTS.MOVIE, {
      params: { page: page },
    });
    return data.data;
  };
}

export default new MovieService();
