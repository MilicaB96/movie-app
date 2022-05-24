import HttpService from "./HttpService";
const ENDPOINTS = {
  USER_REGISTRAION: "/register/",
  USER_LOGIN: "/login/",
};
class AuthService extends HttpService {
  constructor() {
    super();
    this.setAuthorizationHeader();
  }
  getToken = () => {
    localStorage.getItem("token");
  };
  setAuthorizationHeader = () => {
    const token = this.getToken();
    if (token) {
      this.attachHeaders({
        Authorization: `Bearer ${token}`,
      });
    }
  };
  register = async (user) => {
    const { data } = await this.client.post(ENDPOINTS.USER_REGISTRAION, user);
    return data;
  };
  login = async (credentials) => {
    const { data } = await this.client.post(ENDPOINTS.USER_LOGIN, credentials);
    localStorage.setItem("token", data.access);
    this.setAuthorizationHeader();
    return data;
  };
}

export default new AuthService();
