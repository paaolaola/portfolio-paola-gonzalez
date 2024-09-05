import { HobbieContext } from "../context/HobbieContext";
import { useContext } from "react";
import "../styles/Hobbies.css";

function Hobbies() {

    const { hobbies } = useContext(HobbieContext);
    return (
<div className="image-container">
    {hobbies.map(({ id, image, alt }) => (
        <img key={id} src={image} alt={alt} className="background-image" loading="lazy" />
    ))}
</div>


    );
}

export default Hobbies;