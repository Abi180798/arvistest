import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import {
  Badge,
  Button,
  Dropdown,
  FormControl,
  InputGroup,
  Modal,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import { ImCart, ImSearch } from "react-icons/im";
import { Link } from "react-router-dom";
import { KeranjangAPI } from "../../../../Services/KeranjangAPI";
import logoHabib from "../../../Assets/img/logo.jpg";
import { IDUSER, NAME, TOKEN } from "../../../Utils/constants";
function NavbarHome() {
  const [state, setState] = useState({
    data: [],
  });
  const [showM, setShowM] = useState(false);
  function showModal() {
    setShowM(!showM);
  }
  async function getKeranjang() {
    var id_user = JSON.stringify({
      user: 1,
    });
    const r = await KeranjangAPI.getData(id_user);
    if (r.data.status === 200) {
      setState({ ...state, data: r.data.data });
    }
  }
  useEffect(() => {
    if (Cookies.get(TOKEN)) {
      getKeranjang();
    }
  }, []);
  return (
    <div className="home-navbar">
      <div className="navbar-home ms-4 me-4">
        <div>
          <Link to="/" className="none-dec">
          <img src={logoHabib} width="100" />
          </Link>
        </div>
        <div className="ms-4 home-navbar-search">
          <InputGroup>
            <FormControl placeholder="Cari produk" />
            <Button variant="outline-secondary" id="button-addon2">
              <ImSearch />
            </Button>
          </InputGroup>
        </div>
        <div className="ms-4">
          <OverlayTrigger
            trigger="click"
            key="bottom"
            placement="bottom"
            overlay={
              <Popover id={`popover-positioned-bottom`}>
                <Popover.Header as="h3">Keranjang</Popover.Header>
                <Popover.Body>
                  {state.data &&
                    state.data.map((row) => (
                      <div>
                        - {row.nama}{" "}({row.jml}){" "}
                      </div>
                    ))}
                  <hr />
                  <div className="text-center">
                    <Link to="/keranjang">
                      <small>Lihat Detail</small>
                    </Link>
                  </div>
                </Popover.Body>
              </Popover>
            }
          >
            <Button variant="default">
              <small>
                <Badge bg="success">{state.data && state.data.length}</Badge>
              </small>
              <ImCart />
            </Button>
          </OverlayTrigger>
        </div>
        <div className="ms-auto">
          {Cookies.get(TOKEN) ? (
            <div>
              <div>{Cookies.get(NAME)}</div>
              <div
                onClick={(e) => {
                  Cookies.remove(TOKEN);
                  Cookies.remove(NAME);
                  Cookies.remove(IDUSER);
                  window.location.reload();
                }}
                style={{ cursor: "pointer", fontSize: 12, textAlign: "right" }}
              >
                Logout
              </div>
            </div>
          ) : (
            <Link to="/login" className="none-dec">
              Login
            </Link>
          )}
        </div>
      </div>
      <Modal show={showM} onHide={showModal}>
        <Modal.Header closeButton>
          <Modal.Title>Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>Yakin ingin keluar?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={showModal}>
            Tidak
          </Button>
          <Button variant="primary" onClick={showModal}>
            Ya
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default NavbarHome;
