import "../assets/styles/Cv.css";
import React, { useEffect } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { animateScroll as scroll } from "react-scroll";

const Cv = () => {
    //Función para descargar el currículum
    const handleDownloadClick = () => {
        window.open("https://drive.google.com/file/d/1fC96Qf767KIYofYRS1vYtmdT0BovcdS1/view?usp=drive_link", "_blank");
    };
    //Función para descargar el currículum para ATS
    const handleDownloadClickPdf = () => {
        window.open("https://drive.google.com/file/d/1vvcf-ET-Px-jYj-rQl1mil2jO3gligjp/view?usp=drive_link", "_blank");
    };
    //Se utiliza useEffect para que el scroll se posicione en la parte superior de la página
    useEffect(() => {
        scroll.scrollToTop({
            duration: 500,
            smooth: "easeInOutQuad",
        });
    }, []);

    return (
        <>
            <h1 className="title-form">Currículum </h1>
            <div className="box-content-cv">
                <div className="box-cv">
                    <img className="img-cv" src="./img/cv/cv-2.png" alt="foto de cv" />
                    <button className="btn-cv" onClick={handleDownloadClickPdf}>
                        Descarga PARA ATS
                    </button>
                </div>
                <div className="box-cv">
                    <img className="img-cv" src="./img/cv/cv-1.png" alt="foto de cv" />
                    <button className="btn-cv" onClick={handleDownloadClick}>
                        Descarga CV
                    </button>
                </div>
            </div>
            <div className="btn-home">
                <Link to="/">
                    <button className="btn-404">
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
};

export default Cv;
