import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import Footer from "../components/Footer";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import "../styles/Cv.css";

const Cv = () => {
    // Función para descargar el currículum
    // const handleDownloadClick = () => {
    //     window.open("https://drive.google.com/file/d/1bmdiYG1uZxFLp0g-emt0WugAVMkQqBOW/view?usp=drive_link", "_blank");
    // };
    // Función para descargar el currículum para ATS
    const handleDownloadClickPdf = () => {
        window.open("https://drive.google.com/file/d/1bmdiYG1uZxFLp0g-emt0WugAVMkQqBOW/view?usp=drive_link", "_blank");
    };
    // useEffect para que el scroll se posicione en la parte superior de la página
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
                    <img className="img-cv" src="./img/cv/cv-0.webp" alt="foto de cv" loading="lazy"/>
                    <button className="btn-cv" onClick={handleDownloadClickPdf}>
                        Descarga CV
                    </button>
                </div>
                {/* <div className="box-cv">
                    <img className="img-cv" src="./img/cv/cv-1.webp" alt="foto de cv" loading="lazy" />
                    <button className="btn-cv" onClick={handleDownloadClick}>
                        Descarga CV
                    </button>
                </div> */}
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
