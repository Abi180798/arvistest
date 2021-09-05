import { useEffect, useState } from "react";
import { KategoriAPI } from "../../../../Services/KategoriAPI";
import { dataKategori } from "../../../Assets/mock/mock";
import Produk from "../Produk/Produk";
import ListKategori from "./Components/ListKategori";

function Kategori() {
  const [state, setState] = useState({
    data: [],
  });
  const [kategori, setKategori] = useState({
    data: 1,
  });
  function setKategories(value) {
    setKategori({ ...kategori, data: value });
  }
  async function getKategori() {
    const r = await KategoriAPI.getData();
    if (r.status === 200) {
      setState({ ...state, data: r.data });
    }
  }
  useEffect(() => {
    getKategori();
  }, []);
  return (
    <div className="ms-4 me-4">
      <ListKategori
        data={state.data && state.data}
        kategori={kategori.data}
        setKategories={setKategories}
      />
      <Produk kategori={kategori.data} />
    </div>
  );
}

export default Kategori;
