import "../assets/css/Cv.css";
import React from "react";

const Cv = () => {
    const handleDownloadClick = () => {
        window.open("https://drive.google.com/file/d/1hH5dV_oMF6M0u97pH7OVKOy5KFPsxMs-/view?usp=sharing", "_blank");
    };

    const handleDownloadClickPdf = () => {
        window.open("https://docs.google.com/document/d/1ewZOhkw-ZR5JH_BD3d0JdYzKtslPdb00XsyqJM7l9xo/edit?usp=sharing", "_blank");
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
