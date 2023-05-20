import http from "../http-common";

class AuthDataSrvice {
  create(data) {
    return http.post("/login", data);
  }
}

export default new AuthDataSrvice();