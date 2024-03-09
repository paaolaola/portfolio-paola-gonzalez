import React, { useState } from "react";
import "../assets/css/Footer.css";
import SendIcon from "@mui/icons-material/Send";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const Footer = () => {
    const defaultEmail = "paolagonzalez.contacto@gmail.com";
    const [email, setEmail] = useState(defaultEmail);

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        alert("Correo copiado al portapapeles");
    };

    const handleEmailBtn = () => {
        window.open(`mailto:${email}`, "_blank");
    };

    return (
        <>
            <div className="footer">
                <div>
                    <input
                        className="input-footer"
                        type="email"
                        value={email}
                        readOnly // Añadimos readOnly para bloquear la edición
                    />
                    <button className="btn-footer" onClick={handleCopy}>
                        <ContentCopyIcon />
                    </button>
                    <button className="btn-footer" onClick={handleEmailBtn}>
                        <SendIcon />
                    </button>
                </div>

                <div>
                    <p className="text-footer">HECHO CON 💛 PAOLA GONZÁLEZ. 2024</p>
                </div>
            </div>
        </>
    );
};

export default Footer;
