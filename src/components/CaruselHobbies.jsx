import Carousel from "react-bootstrap/Carousel";
import "../assets/styles/CaruselHobbies.css";
import { HobbieContext } from "../context/HobbieContext";
import { useContext } from "react";

function CaruselHobbies() {
    //Se consume el contexto de hobbies para mostrarlos en el carrusel
    const { hobbies } = useContext(HobbieContext);
    return (
        <Carousel>
            {hobbies.map(({ id, image, alt, title, description, marco }) => (
                <Carousel.Item key={id} className="custom-carousel-item">
                    <div className="image-container">
                        <img src={image} alt={alt} className="background-image" />
                    </div>
                    <Carousel.Caption>
                        <h5>{title}</h5>
                        <p>{description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default CaruselHobbies;
