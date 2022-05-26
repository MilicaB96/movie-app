import HttpService from "./HttpService";

class ApiService {
  constructor() {
    this.api = HttpService;
    this.client = this.api.client;
  }
}

export default ApiService;
