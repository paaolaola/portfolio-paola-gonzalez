import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ProjectContext } from "../context/ProjectContext";
import "../assets/css/Proyectos.css";
import { animateScroll as scroll } from "react-scroll";
import Footer from "../components/Footer";

const Proyectos = () => {
    const { name } = useParams();
    const { proyectos } = useContext(ProjectContext);

    const proyecto = proyectos.find((proyecto) => proyecto.name === name);

    useEffect(() => {
        scroll.scrollToTop({
            duration: 500,
            smooth: "easeInOutQuad",
        });
    }, []);

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
                        <iframe
                            className="iframe-video"
                            src={proyecto.video}
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
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
                <div className="btn-sites-projects">
                    <a href={proyecto.github} target="_blank" rel="noopener noreferrer">
                        <button className="box-btn">GitHub</button>
                    </a>
                    <a href={proyecto.url} target="_blank" rel="noopener noreferrer">
                        <button className="box-btn">Live Preview</button>
                    </a>
                </div>

                <h4 className="projects-title">Views</h4>
                <div className="projects-views">
                    {Object.values(proyecto.images).map((image, index) => (
                        <img key={index} className="projects-image" src={image} alt={proyecto.name} />
                    ))}
                </div>
                <div className="btn-home">
                    <Link to="/">
                        <button className="btn-404">Volver</button>
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
