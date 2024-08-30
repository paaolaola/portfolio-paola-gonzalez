import "../styles/CaruselHobbies.css";
import { HobbieContext } from "../context/HobbieContext";
import { useContext } from "react";

function CaruselHobbies() {
    //Se consume el contexto de hobbies para mostrarlos en el carrusel
    const { hobbies } = useContext(HobbieContext);
    const { id, image, alt } = hobbies;
    return (
        <>
            <div key={id} className="custom-carousel-item">
                <div className="image-container">
                    <img src={image} alt={alt} className="background-image" />
                </div>
            </div>
        </>
    );
}

export default CaruselHobbies;
