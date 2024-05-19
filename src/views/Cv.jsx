import "../assets/css/Cv.css";
import React, { useEffect } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { animateScroll as scroll } from "react-scroll";

const Cv = () => {
    const handleDownloadClick = () => {
        window.open("https://drive.google.com/file/d/1XYwHE7OOE8FZN9tsWXc6P0LwaJOqj9p5/view?usp=sharing", "_blank");
    };

    const handleDownloadClickPdf = () => {
        window.open("https://drive.google.com/file/d/1QwBFIWGGQGgibayLczp69Q0_O9YjuXpW/view?usp=sharing", "_blank");
    };
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
                    <img className="img-cv" src="./img/cv/cv-1.png" alt="foto de cv" />
                    <button className="btn-cv" onClick={handleDownloadClick}>
                        Descarga CV
                    </button>
                </div>
                <div className="box-cv">
                    <img className="img-cv" src="./img/cv/cv-2.png" alt="foto de cv" />
                    <button className="btn-cv" onClick={handleDownloadClickPdf}>
                        Descarga PARA ATS
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
