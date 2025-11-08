import { useState } from "react";
import { ToastContainer, Zoom, toast } from "react-toastify";
import SendIcon from "@mui/icons-material/Send";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import RocketIcon from "@mui/icons-material/Rocket";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Footer.css";


const Footer = () => {
    const defaultEmail = "paolagonzalez.contacto@gmail.com";
    const [email] = useState(defaultEmail);

 const handleCopyBtn = () => {
    // navigator.clipboard.writeText(email);

    const toastStyle = {
        background: "transparent",
        color: "#ffbd59",
        backdropFilter: "blur(10px)",
        border: "1.5px solid rgba(255, 189, 89, 0.5)", 
        borderRadius: "20px",
        
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
                <p className="text-footer">HECHO CON 💛 PAOLA GONZÁLEZ. 2025</p>
            </div>
        </>
    );
};

export default Footer;
