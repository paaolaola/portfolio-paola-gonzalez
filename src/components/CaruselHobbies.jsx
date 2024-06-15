import Carousel from "react-bootstrap/Carousel";
import "../assets/css/CaruselHobbies.css";
import { HobbieContext } from "../context/HobbieContext";
import { useContext } from "react";

function CaruselHobbies() {
    //Se consume el contexto de hobbies para mostrarlos en el carrusel
    const { hobbies } = useContext(HobbieContext);
    return (
        <Carousel>
            {hobbies.map(({ id, image, alt, title, description }) => (
                <Carousel.Item key={id} className="custom-carousel-item">
                    <img src={image} alt={alt} />
                    <Carousel.Caption>
                        {" "}
                        <h5>{title}</h5>
                        <p>{description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default CaruselHobbies;
