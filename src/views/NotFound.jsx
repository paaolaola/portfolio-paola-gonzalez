import { Link } from "react-router-dom";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import "../styles/NotFound.css";

const NotFound = () => {
    return (
        <div className="box-404">
            <div>
                <h2 className="title-404"> Página no encontrada</h2>
            </div>

            <div>
                <Link to="/">
                    <button className="btn-404">
                        <ArrowLeftIcon />
                        Volver
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
