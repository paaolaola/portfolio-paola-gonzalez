import "../assets/css/FormContact.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function FormContact() {
    return (
        <>
            <div className="box-form">
                <h1 className="title-form">Contacto </h1>
                <p className="text-form">
                    ¡Gracias por visitar mi portfolio! <br />
                    Si estás interesado(a) en colaborar o si tienes preguntas, comentarios o simplemente quieres saludar, estaré atenta y con gusto te
                    responderé.{" "}
                </p>
                <iframe id="typeform-full" src="https://6sujha3j6m7.typeform.com/to/cdgzp9LA?typeform-source=admin.typeform.com"></iframe>{" "}
            </div>{" "}
            <div className="btn-home">
                <Link to="/">
                    <button className="btn-404">Volver al menu principal</button>
                </Link>
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}

export default FormContact;
