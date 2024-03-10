import "../assets/css/Cv.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Cv = () => {
    const handleDownloadClick = () => {
        window.open("https://drive.google.com/file/d/1sOYkdxyaOU1LWz_ug6x3ulhgoRkpyusL/view?usp=drive_link", "_blank");
    };

    const handleDownloadClickPdf = () => {
        window.open("https://drive.google.com/file/d/1Afz8CZ1oW51xx2UedA3j_eTQ_oOzbQbH/view?usp=sharing", "_blank");
    };

    return (
        <>
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
                    <button className="btn-404">Volver al menu principal</button>
                </Link>
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
};

export default Cv;
