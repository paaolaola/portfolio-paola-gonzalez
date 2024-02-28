import React from "react";
import Home from "../components/Home";
import FormContact from "../views/FormContact";
import Cv from "../views/Cv";
import NotFound from "../views/NotFound.jsx";
import { Routes, Route } from "react-router-dom";

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/curriculum" element={<Cv />} />
                <Route path="/contacto" element={<FormContact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default Router;
