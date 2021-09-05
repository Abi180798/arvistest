import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { KeranjangAPI } from "../../../../Services/KeranjangAPI";
import { thousandSeparator } from "../../../Utils";
import { IDUSER } from "../../../Utils/constants";
import NavbarHome from "../Components/NavbarHome";

function Keranjang() {
  let totalValue = 0;
  const [state, setState] = useState({
    data: "",
  });
  async function getKeranjang() {
    const data = JSON.stringify({
      user: Cookies.get(IDUSER),
    });
    const r = await KeranjangAPI.getData(data);
    if (r.data.status === 200) {
      setState({ ...state, data: r.data.data });
    }
  }
  async function delKeranjang(value) {
    const data = JSON.stringify({
      id_keranjang: value,
    });
    const r = await KeranjangAPI.delData(data);
    if (r.data.status === 200) {
      getKeranjang()
    } else {
      alert("Gagal hapus data");
    }
  }
  useEffect(() => {
    getKeranjang();
  }, []);
  return (
    <div>
      <NavbarHome />
      <div className="c-home">
        <div className="m-4">
          <div>
            <h4>Keranjang</h4>
          </div>
          <div className="list-keranjang-head d-flex">
            <div className="fl-1">Nama</div>
            <div className="fl-1">Jumlah</div>
            <div className="fl-1">Harga</div>
            <div className="fl-1">Total</div>
            <div>Aksi</div>
          </div>
          {state.data &&
            state.data.map((row) => {
              totalValue = totalValue + row.harga * row.jml;

              return (
                <div className="list-keranjang d-flex">
                  <div className="fl-1">{row.nama}</div>
                  <div className="fl-1">{row.jml}</div>
                  <div className="fl-1">Rp. {thousandSeparator(row.harga)}</div>
                  <div className="fl-1">
                    Rp. {thousandSeparator(row.harga * row.jml)}
                  </div>
                  <div
                    className="text-danger"
                    style={{ cursor: "pointer" }}
                    onClick={(e) => delKeranjang(row.id_keranjang)}
                  >
                    Hapus
                  </div>
                </div>
              );
            })}
          <div className="list-keranjang-head d-flex">
            <div className="fl-1">Total Keseluruhan</div>
            <div className="fl-1"></div>
            <div className="fl-1"></div>
            <div className="fl-1">Rp. {thousandSeparator(totalValue)}</div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Keranjang;
