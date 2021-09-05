import { PostWithoutAuth,getWithoutAuth } from "../App/Utils/requestHandler";

export const KategoriAPI = {
  async getData(data) {
    const response = await getWithoutAuth(`/kategori.php`,data);
    return response;
  },
};
