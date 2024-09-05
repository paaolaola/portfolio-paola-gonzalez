import Carousel from "react-bootstrap/Carousel";
import "../styles/CaruselCert.css";
import { CertContext } from "../context/CertContext";
import { useContext } from "react";

function CaruselCert() {
    //Se consume el contexto de certificaciones para mostrarlas en el carrusel
    const { certs } = useContext(CertContext);
    return (
        <>
            <Carousel>
                {certs.map(({ id, image, alt, url }) => (
                    <Carousel.Item key={id}>
                        <a href={url} target="_blank" rel="noopener noreferrer">
                            <img className="box-content-img" src={image} alt={alt} loading="lazy" />
                        </a>
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    );
}

export default CaruselCert;
