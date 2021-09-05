import { PostWithoutAuth,getWithoutAuth } from "../App/Utils/requestHandler";

export const ProdukAPI = {
  async getData(data) {
    const response = await PostWithoutAuth(`/produk.php`,data);
    return response;
  },
  async getDataId(data) {
    const response = await PostWithoutAuth(`/detproduk.php`,data);
    return response;
  },
};
