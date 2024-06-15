import "../assets/css/FormContact.css";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { animateScroll as scroll } from "react-scroll";

function FormContact() {
    //Se utiliza useEffect para que el scroll se posicione en la parte superior de la página
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
                Si estás interesado(a) en colaborar o si tienes preguntas, comentarios o simplemente quieres saludar, estaré atenta y con gusto te responderé.{" "}
            </p>
            <div className="box-form">
                <iframe id="typeform-full" src="https://6sujha3j6m7.typeform.com/to/cdgzp9LA?typeform-source=admin.typeform.com"></iframe>{" "}
            </div>{" "}
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
