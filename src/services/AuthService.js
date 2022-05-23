import HttpService from "./HttpService";
const ENDPOINTS = {
  USER_REGISTRAION:'/register/'
}
class AuthService extends HttpService {
  register = async (user) => {
    const { data } = await this.client.post(ENDPOINTS.USER_REGISTRAION, user);
    return data;
  };
}

export default new AuthService();
