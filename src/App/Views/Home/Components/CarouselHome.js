import { Carousel } from "react-bootstrap";
import Banner1 from "../../../Assets/img/banner1.jpg";

function CarouselHome() {
  return (
    <div className="c-home">
      <div className="m-4">
        <Carousel fade variant="dark" className="carousel-home">
          <Carousel.Item>
            <img className="d-block w-100" src={Banner1} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Banner1} />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselHome;
