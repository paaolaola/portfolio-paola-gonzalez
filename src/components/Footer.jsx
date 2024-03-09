import React, { useState } from "react";
import "../assets/css/Footer.css";
import SendIcon from "@mui/icons-material/Send";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const Footer = () => {
    const defaultEmail = "paolagonzalez.contacto@gmail.com";
    const [email] = useState(defaultEmail);
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1500);
    };

    const handleEmailBtn = () => {
        window.open(`mailto:${email}`, "_blank");
    };

    return (
        <>
            {copied && <span className="copied-message"> Correo copiado ✔️</span>}
            <div className="footer">
                <div>
                    <input className="input-footer" type="email" value={email} readOnly />
                </div>

                <div>
                    <button className="btn-footer" onClick={handleCopy}>
                        <ContentCopyIcon />
                    </button>
                    <button className="btn-footer" onClick={handleEmailBtn}>
                        <SendIcon />
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
