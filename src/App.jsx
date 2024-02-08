import "./assets/css/App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import FormContact from "./view/FormContact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contacto" element={<FormContact />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
