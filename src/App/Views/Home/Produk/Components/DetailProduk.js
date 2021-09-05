import { useEffect, useState } from "react";
import { Button, Col, Row, FormControl } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ProdukAPI } from "../../../../../Services/ProdukAPI";
import { thousandSeparator } from "../../../../Utils";
import NavbarHome from "../../Components/NavbarHome";
import { ImPlus, ImMinus, ImCart } from "react-icons/im";
import { KeranjangAPI } from "../../../../../Services/KeranjangAPI";
import Cookies from "js-cookie";
import { IDUSER } from "../../../../Utils/constants";

function DetailProduk() {
  let { id } = useParams();
  const [state, setState] = useState({
    data: "",
    quantity:1
  });
  console.log(state.quantity)
  async function getDetProduk() {
    const data = JSON.stringify({
      id_produk: id,
    });
    const r = await ProdukAPI.getDataId(data);
    if (r.data.status === 200) {
      setState({ ...state, data: r.data.data });
    }
  }
  function handleQuantity(mode){
    if(mode==="plus"){
      setState({...state,quantity:state.quantity+1})
    }else{
      if(state.quantity<1){
        setState({...state,quantity:0})
      }else{
        setState({...state,quantity:state.quantity-1})
      }
    }
  }

  async function handleBeli(){
    const data=JSON.stringify({
      id_produk:id,
      id_kategori:state.data && state.data[0].id_kategori,
      id_user:Cookies.get(IDUSER),
      jml:state.quantity
    })
    const r = await KeranjangAPI.postData(data)
    if(r.data.status===200){
      window.location.reload()
    }else{
      alert("Gagal menambahkan ke keranjang!")
    }
  }
  useEffect(() => {
    getDetProduk();
  }, []);
  return (
    <div>
      <NavbarHome />
      <div className="c-home">
        <div className="m-4">
          <div>
            <h4>Detail Produk</h4>
          </div>
          <div>
            <Row>
              <Col lg={4}>
                <div className="text-center card">
                  <img src={state.data && state.data[0].url_foto} />
                </div>
              </Col>
              <Col lg={8}>
                <div>
                  <h5>{state.data && state.data[0].nama}</h5>
                </div>
                <div>{state.data && state.data[0].deskripsi}</div>
                <hr />
                <div className="price">
                  Rp. {state.data && thousandSeparator(state.data[0].harga)}
                </div>
                <div className="d-flex pt-2 pb-2">
                  <div className="d-flex">
                    <Button variant="secondary" onClick={e=>handleQuantity("min")}>
                      <ImMinus />
                    </Button>
                    <FormControl className="quantity" value={state.quantity} readOnly/>
                    <Button variant="secondary" onClick={e=>handleQuantity("plus")}>
                      <ImPlus />
                    </Button>
                  </div>
                  {/* <Button>-</Button>
                  <Button>+</Button> */}
                </div>
                  <div>Tersedia: {state.data && state.data[0].jumlah}</div>
                  <div className="mt-4">

                  <Button onClick={e=>handleBeli()}><ImCart/> Beli</Button>
                  </div>
                  
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailProduk;
