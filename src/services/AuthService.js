import HttpService from "./HttpService";
class AuthService extends HttpService {
  register = async (user) => {
    const { data } = await this.client.post("/register/", user);
    return data;
  };
}

export default new AuthService();
