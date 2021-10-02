import axios from "axios";
import authHeader from "auth-header";

const API_URL = "http://localhost:4001/recipe/";

class UserService {
  getPublicContent() {
    return axios.get(API_URL);
  }

  getUserBoard() {}
}
