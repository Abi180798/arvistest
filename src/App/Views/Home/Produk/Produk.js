import ListProduk from "./Components/ListProduk";
import { dataProduk } from "../../../Assets/mock/mock";
import { ProdukAPI } from "../../../../Services/ProdukAPI";
import { useEffect, useState } from "react";

function Produk({ kategori }) {
  const [state, setState] = useState({
    data: [],
  });
  async function getProduk() {
    const data = JSON.stringify({
      kategori: kategori,
    });
    const r = await ProdukAPI.getData(data);
    if (r.data.status === 200) {
      setState({ ...state, data: r.data.data });
    }
  }
  useEffect(() => {
    getProduk();
  }, [kategori]);
  return (
    <div className="mb-4">
      <h4 className="mt-4 mb-3">Daftar Produk</h4>
      <ListProduk kategori={kategori} data={state.data && state.data} />
    </div>
  );
}

export default Produk;
