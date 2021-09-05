import { PostWithoutAuth,getWithoutAuth } from "../App/Utils/requestHandler";

export const KeranjangAPI = {
  async getData(data) {
    const response = await PostWithoutAuth(`/keranjang.php`,data);
    return response;
  },
  async postData(data) {
    const response = await PostWithoutAuth(`/addkeranjang.php`, data);
    return response;
  },
  async delData(data) {
    const response = await PostWithoutAuth(`/delkeranjang.php`, data);
    return response;
  },
};
