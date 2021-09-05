import { PostWithoutAuth,getWithoutAuth } from "../App/Utils/requestHandler";

export const LoginAPI = {
  async loginAccount(data) {
    const response = await PostWithoutAuth(`/login.php`, data);
    return response;
  },
};
