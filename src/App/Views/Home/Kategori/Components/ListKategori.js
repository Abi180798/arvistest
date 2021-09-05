import { Col, Row } from "react-bootstrap";

function ListKategori({ data, kategori, setKategories }) {
  console.log(data)
  return (
    <div>
      <Row>
        {data &&
          data.map((row) => (
            <Col key={row.id} onClick={(e) => setKategories(row.id)}>
              <div
                className={
                  kategori && kategori === row.id
                    ? "card-kategori-active"
                    : "card-kategori"
                }
              >
                <div>
                  <img src={row.url_foto} width={70} />
                </div>
                <div>{row.nama}</div>
              </div>
            </Col>
          ))}
      </Row>
    </div>
  );
}

export default ListKategori;
