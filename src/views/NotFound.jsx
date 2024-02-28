import { Link } from "react-router-dom";
import "../assets/css/NotFound.css";
const NotFound = () => {
    return (
        <div className="box-404">
            <div>
                <h2 className="title-404"> Página no encontrada</h2>
            </div>

            <div>
                <Link to="/">
                    <button className="btn-404">Volver a la página principal</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
