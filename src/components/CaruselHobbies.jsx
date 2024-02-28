import Carousel from "react-bootstrap/Carousel";
import "../assets/css/CaruselHobbies.css";

function CaruselHobbies() {
    return (
        <Carousel>
            <Carousel.Item className="custom-carousel-item">
                <img src="./img/fotos-hobbies/fotomontaje-1.jpg" alt="fotomontaje-1" />
                <Carousel.Caption>
                    {" "}
                    <h5>"Serie de Luz"</h5>
                    <p>Fotomontajes</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="custom-carousel-item">
                <img src="./img/fotos-hobbies/fotomontaje-2.jpg" alt="fotomontaje-2" />
                <Carousel.Caption>
                    {" "}
                    <h5>"Serie de Luz"</h5>
                    <p>Fotomontajes</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="custom-carousel-item">
                <img src="./img/fotos-hobbies/fotomontaje-3.jpg" alt="fotomontaje-3" />
                <Carousel.Caption>
                    {" "}
                    <h5>"Serie de Luz"</h5>
                    <p>Fotomontajes</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="custom-carousel-item">
                <img src="./img/fotos-hobbies/fotomontaje-4.jpg" alt="fotomontaje-4" />
                <Carousel.Caption>
                    {" "}
                    <h5>"Serie de Luz"</h5>
                    <p>Fotomontajes</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CaruselHobbies;
