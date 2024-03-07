import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { ProjectContext } from "../context/ProjectContext";
import "../assets/css/Proyectos.css";

const Proyectos = () => {
    const { name } = useParams();
    const { proyectos } = useContext(ProjectContext);

    const proyecto = proyectos.find((proyecto) => proyecto.name === name);

    if (!proyecto) {
        return <p className="title-404">Proyecto no encontrado</p>;
    }

    return (
        <>
            <h2 className="title-404">{proyecto.name}</h2>
            <div className="box-proyects">
                <div>
                    <h4 className="projects-title">Demo</h4>
                    <div className="projects-video"></div>
                    <h4 className="projects-title">Herramientas</h4>
                    <div className="btn-skills">
                        {Object.values(proyecto.skills).map((skill, index) => (
                            <button key={index}>{skill}</button>
                        ))}
                    </div>
                    <h4 className="projects-title">Descripción</h4>
                    <p className="projects-text">{proyecto.info}</p>
                    <div className="btn-sites-projects">
                        <a href={proyecto.github} target="_blank" rel="noopener noreferrer">
                            <button className="box-btn">Ver GitHub</button>
                        </a>
                        <a href={proyecto.url} target="_blank" rel="noopener noreferrer">
                            <button className="box-btn">Ver sitio</button>
                        </a>
                    </div>

                    <h4 className="projects-title">Vistas de la App Web</h4>
                    <div className="projects-views">
                        {Object.values(proyecto.images).map((image, index) => (
                            <img key={index} className="projects-image" src={image} alt={proyecto.name} />
                        ))}
                    </div>
                </div>
                <div className="btn-home">
                    <Link to="/">
                        <button className="btn-404">Volver al menu principal</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Proyectos;
