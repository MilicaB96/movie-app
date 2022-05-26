import ApiService from "./ApiService";
const ENDPOINTS = {
  USER_REGISTRAION: "/register/",
  USER_LOGIN: "/login/",
  USER_LOGOUT: "/logout/",
};
class AuthService extends ApiService {
  constructor() {
    super();
    this.setAuthorizationHeader();
  }
  getToken = () => {
    const user = localStorage.getItem("token");
    return user ? JSON.parse(user).access : undefined;
  };
  getRefresh = () => {
    const refresh = localStorage.getItem("token");
    return refresh ? JSON.parse(refresh).refresh : undefined;
  };
  setAuthorizationHeader = () => {
    const token = this.getToken();
    if (token) {
      this.api.attachHeaders({
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
  logout = async () => {
    const refresh = this.getRefresh();
    const { data } = await this.client.post(ENDPOINTS.USER_LOGOUT, {
      refresh,
    });
    localStorage.removeItem("token");
    return data;
  };
}

export default new AuthService();
