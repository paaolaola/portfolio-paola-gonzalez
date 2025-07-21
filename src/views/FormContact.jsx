import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import Footer from "../components/Footer";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import "../styles/FormContact.css";

function FormContact() {
    // useEffect para que el scroll se posicione en la parte superior de la página
    useEffect(() => {
        scroll.scrollToTop({
            duration: 500,
            smooth: "easeInOutQuad",
        });
    }, []);
    return (
        <>
            <h1 className="title-form">Contacto </h1>
            <p className="text-form">
                ¡Gracias por visitar mi portfolio! <br />
                Si tienes preguntas, comentarios, sugerencias o simplemente quieres saludar, contáctame. Estaré atenta y responderé a la brevedad.{" "}
            </p>
            {/* <div className="box-form">
                <iframe id="typeform-full" src="https://6sujha3j6m7.typeform.com/to/cdgzp9LA?typeform-source=admin.typeform.com"></iframe>{" "}
            </div>{" "} */}
            <div className="btn-home">
                <Link to="/">
                    <button className="btn-404">
                        {" "}
                        <ArrowLeftIcon />
                        Volver
                    </button>
                </Link>
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}

export default FormContact;
