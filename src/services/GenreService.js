import ApiService from "./ApiService";
const ENDPOINTS = {
  GENRE: "/genre/",
};
class GenreService extends ApiService {
  getAll = async () => {
    const data = await this.client.get(ENDPOINTS.GENRE);
    return data.data;
  };
}

export default new GenreService();
