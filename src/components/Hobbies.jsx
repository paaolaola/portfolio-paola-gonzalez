import { HobbieContext } from "../context/HobbieContext";
import { useContext } from "react";
import "../styles/Hobbies.css";

function CaruselHobbies() {
    //Se consume el contexto de hobbies para mostrarlos en el carrusel
    const { hobbies } = useContext(HobbieContext);
    return (
<div className="image-container">
    {hobbies.map(({ id, image, alt }) => (
        <img key={id} src={image} alt={alt} className="background-image" />
    ))}
</div>


    );
}

export default CaruselHobbies;