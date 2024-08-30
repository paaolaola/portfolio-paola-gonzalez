import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ProjectContext } from "../context/ProjectContext";
import "../styles/Proyectos.css";
import { animateScroll as scroll } from "react-scroll";
import Footer from "../components/Footer";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

const Proyectos = () => {
    //Se obtiene el nombre del proyecto de los parámetros de la URL
    const { routename } = useParams();
    const { proyectos } = useContext(ProjectContext);

    //Se busca el proyecto en el contexto de proyectos
    const proyecto = proyectos.find((proyecto) => proyecto.routename === routename);

    //Se realiza un scroll hacia arriba al cargar la página
    useEffect(() => {
        scroll.scrollToTop({
            duration: 500,
            smooth: "easeInOutQuad",
        });
    }, []);

    //Si no se encuentra el proyecto se muestra un mensaje de error 404 y se redirige al home
    if (!proyecto) {
        return <p className="title-404">Proyecto no encontrado</p>;
    }

    return (
        <>
            <div className="box-proyects">
                <h2 className="title-404">{proyecto.name}</h2>

                <h4 className="projects-title">Demo</h4>

                <div className="projects-video">
                    {proyecto.video ? (
                        <div className="iframe-container">
                            <iframe
                                className="iframe-video"
                                src={proyecto.video}
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    ) : (
                        <p className="name">Video no encontrado</p>
                    )}
                </div>
                <h4 className="projects-title">Skills</h4>
                <div className="btn-skills">
                    {Object.values(proyecto.skills).map((skill, index) => (
                        <button key={index}>{skill}</button>
                    ))}
                </div>
                <h4 className="projects-title">Descripción</h4>
                <p className="projects-text">{proyecto.info}</p>
                <div className="btn-projects">
                    <a href={proyecto.github} target="_blank" rel="noopener noreferrer">
                        <button className="box-btn">GitHub</button>
                    </a>
                    <a href={proyecto.url} target="_blank" rel="noopener noreferrer">
                        <button className="box-btn">Live Preview</button>
                    </a>
                </div>

                <h4 className="projects-title">Vistas de desarrollo</h4>
                <div className="projects-views">
                    {Object.values(proyecto.images).map((image, index) => (
                        <img key={index} className="projects-image" src={image} alt={proyecto.name} />
                    ))}
                </div>
                <div className="btn-home">
                    <Link to="/">
                        <button className="btn-404">
                            <ArrowLeftIcon />
                            Volver
                        </button>
                    </Link>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
};

export default Proyectos;
