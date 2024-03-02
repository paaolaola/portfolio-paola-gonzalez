import "../assets/css/Cv.css";
import React from "react";

const Cv = () => {
    const handleDownloadClick = () => {
        window.open("https://drive.google.com/file/d/1rGHMc2fpVu2yU-XaJSFwTYCdXJH1mwKa/view?usp=drive_link", "_blank");
    };

    const handleDownloadClickPdf = () => {
        window.open("https://drive.google.com/file/d/1fRDcjaI1pjp0PfE24TYV5BQ6dhZpTzbU/view?usp=drive_link", "_blank");
    };

    return (
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
    );
};

export default Cv;
