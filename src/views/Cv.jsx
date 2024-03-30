import "../assets/css/Cv.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

const Cv = () => {
    const handleDownloadClick = () => {
        window.open("https://drive.google.com/file/d/1eN46dGLbsMJtHt27Q849PzbZ7VBOhJs1/view?usp=drive_link", "_blank");
    };

    const handleDownloadClickPdf = () => {
        window.open("https://drive.google.com/file/d/1Afz8CZ1oW51xx2UedA3j_eTQ_oOzbQbH/view?usp=sharing", "_blank");
    };

    return (
        <>
            <h1 className="title-form">Currículum </h1>
            <div className="box-content-cv">
                <div className="box-cv">
                    <img className="img-cv" src="./img/cv/cv.png" alt="foto de cv" />
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
