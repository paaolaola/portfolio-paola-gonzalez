import React, { useState } from "react";
import "../assets/css/Footer.css";
import SendIcon from "@mui/icons-material/Send";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RocketIcon from "@mui/icons-material/Rocket";

const Footer = () => {
    const defaultEmail = "paolagonzalez.contacto@gmail.com";
    const [email] = useState(defaultEmail);

    const handleCopyBtn = () => {
        navigator.clipboard.writeText(email);

        const toastStyle = {
            background: "linear-gradient(to top, #ff66c4, #cb6ce6, #5170ff)",
            color: "#ffbd59",
        };
        toast.warn("Correo copiado!", {
            transition: Zoom,
            position: "bottom-center",
            style: toastStyle,
            icon: <RocketIcon />,
            autoClose: 1000,
        });
    };

    const handleEmailBtn = () => {
        window.open(`mailto:${email}`, "_blank");
    };

    return (
        <>
            <ToastContainer icon={false} />
            <div className="footer">
                <div>
                    <input className="input-footer" type="email" value={email} readOnly />
                </div>

                <div>
                    <button className="btn-footer" onClick={handleCopyBtn}>
                        <ContentCopyIcon sx={{ fontSize: 20 }} />
                    </button>
                    <button className="btn-footer" onClick={handleEmailBtn}>
                        <SendIcon sx={{ fontSize: 20 }} />
                    </button>
                </div>
            </div>
            <div>
                <p className="text-footer">HECHO CON 💛 PAOLA GONZÁLEZ. 2024</p>
            </div>
        </>
    );
};

export default Footer;
