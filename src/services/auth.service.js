import axios from "axios";

const API_URL = "http://localhost:4001/user/";

class AuthService {
  async login(email, password) {
    console.log(email, password);
    const response = await axios.post(API_URL + "login", {
      email,
      password,
    });
    if (response.data.token) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  }

  logout() {
    localStorage.removeItem("user");
  }

  async register(first_name, last_name, email, password) {
    return await axios.post(API_URL + "register", {
      first_name,
      last_name,
      email,
      password,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
