import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { thousandSeparator } from "../../../../Utils/index";
function ListProduk({ data }) {
  return (
    <div>
      <Row>
        {data &&
          data.map((row) => (
            <Col>
              <Link to={`/produk/${row.id}`} className="none-dec">
                <div className="card-produk p-2">
                  <div className="text-center mb-2">
                    <img src={row.url_foto} height={200} width={200} />
                  </div>
                  <div>{row.nama}</div>
                  <div>
                    <b>Rp. {thousandSeparator(row.harga)}</b>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
      </Row>
    </div>
  );
}

export default ListProduk;
