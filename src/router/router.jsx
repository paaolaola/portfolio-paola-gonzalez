import React from "react";
import Home from "../components/Home";
import Proyectos from "../views/Proyectos";
import Cv from "../views/Cv";
import FormContact from "../views/FormContact";
import NotFound from "../views/NotFound.jsx";
import { Routes, Route } from "react-router-dom";

const Router = () => {
    //Rutas de la aplicación
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/curriculum" element={<Cv />} />
                <Route path="/contacto" element={<FormContact />} />
                <Route path="/proyectos/:routename" element={<Proyectos />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default Router;
