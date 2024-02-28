import "./assets/css/App.css";
import Navbar from "./components/Navbar";
import Router from "./router/router.jsx";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Router />
            </BrowserRouter>
        </>
    );
}

export default App;
