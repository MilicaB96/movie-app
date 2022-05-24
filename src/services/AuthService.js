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
    const user = localStorage.getItem("token");
    return user ? JSON.parse(user).access : undefined;
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
    localStorage.setItem("token", JSON.stringify(data));
    this.setAuthorizationHeader();
    return data;
  };
}

export default new AuthService();
