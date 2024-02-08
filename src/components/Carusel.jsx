import Carousel from "react-bootstrap/Carousel";

function Carusel() {
    return (
        <Carousel className="carousel-header">
            <Carousel.Item>
                <img src="./img/fotomontaje-1.jpg" alt="fotomontaje-1" />
                <Carousel.Caption>
                    {" "}
                    <h5>"Serie de Luz"</h5>
                    <p>Fotomontajes</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="./img/fotomontaje-2.jpg" alt="fotomontaje-2" />
                <Carousel.Caption>
                    {" "}
                    <h5>"Serie de Luz"</h5>
                    <p>Fotomontajes</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="./img/fotomontaje-3.jpg" alt="fotomontaje-3" />
                <Carousel.Caption>
                    {" "}
                    <h5>"Serie de Luz"</h5>
                    <p>Fotomontajes</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="./img/fotomontaje-4.jpg" alt="fotomontaje-4" />
                <Carousel.Caption>
                    {" "}
                    <h5>"Serie de Luz"</h5>
                    <p>Fotomontajes</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carusel;
