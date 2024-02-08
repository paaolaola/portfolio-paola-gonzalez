import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import Carusel from "../components/Carusel";
import "../assets/css/Home.css";
import { useState } from "react";

//header, section y footer

const Home = () => {
    const [showMore, setShowMore] = useState({
        javascript: false,
        react: false,
        diplomado: false,
        gestionProyectos: false,
        fotografia: false,
    });

    const toggleShowMore = (id) => {
        setShowMore((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    return (
        <>
            <header className="box-perfil">
                <div className="image-perfil">
                    <img className="image" src="./img/fotoperfil.jpg" alt="foto de perfil paola"></img>
                </div>

                <div className="names-perfil">
                    <h1 className="title-name">PAOLA</h1>
                    <h1 className="title-last-name">GONZÁLEZ .</h1>
                    <div>
                        <h4 className="under-title">DESARROLLADORA FRONT END</h4>
                    </div>
                </div>
            </header>

            <div className="box-container">
                <section className="box-text">
                    <h1 className="title">SOBRE MI</h1>
                    <p className="text">
                        Hola! Soy Paola, Fotógrafa y Desarrolladora Front End. Terminé hace poco mis estudios en la academia Desafío Latam. Estoy contenta de
                        comenzar este nuevo camino laboral en el sector TI y me siento muy motivada en aportar con mis conocimientos y habilidades. Me gusta
                        crear cosas visualmente atractivas y llevar a cabo proyectos innovadores. Te invito a conocerme y que revises mis redes y currículum
                        (disponible para descarga).
                    </p>
                    <div className="btn-links">
                        <a href="https://www.linkedin.com/in/paola-gonzalez-guzman/" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon sx={{ fontSize: 40, color: "#ffbd59" }} />
                        </a>

                        <a href="https://github.com/paaolaola" target="_blank" rel="noopener noreferrer">
                            <GitHubIcon sx={{ fontSize: 40, color: "#ffbd59" }} />
                        </a>

                        <a href="mailto:paolagonzalez.contacto@gmail.com" target="_blank" rel="noopener noreferrer">
                            <GoogleIcon sx={{ fontSize: 40, color: "#ffbd59" }} />
                        </a>

                        <a
                            href="https://drive.google.com/file/d/1dN1R704UdAW5h8JIUYkcDJlQlFXsBXV2/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-cv"
                        >
                            Descargar CV
                        </a>
                    </div>
                </section>

                <section className="box-text">
                    <h1 className="title">HOBBIES</h1>
                    <p className="text">
                        Me gustan actividades al aire libre como las caminatas al cerro, acampar, los conciertos de música. También visitar exposiciones de
                        arte. La fotografía análoga es un pasatiempo y a la vez es parte de mi trabajo autoral, así como también crear fotomontajes digitales
                        con temática onírica.
                    </p>
                    <div className="carusel">
                        <Carusel />
                    </div>
                </section>

                <section className="box-text">
                    <h1 className="title">STACK</h1>
                    <div className="box-stack">
                        <img className="stack-image" src="./img/stack.png" alt="stack"></img>
                    </div>
                </section>

                <section className="box-text">
                    <h1 className="title">ESTUDIOS</h1>

                    <div>
                        <h3 className="name">JAVASCRIPT</h3>
                        <div className="info-2">
                            <p className="date">Coderhouse (2024)</p>
                        </div>

                        {showMore.javascript ? (
                            <>
                                <p className="info">
                                    Contenidos del curso: Sintaxis, Control de flujos, Iteraciones, Funciones, Objetos y Arrays, DOM y Eventos, Storage y JSON,
                                    Ajax y Fetch, Frameworks y Node JS.
                                </p>
                                <button className="btn-more" onClick={() => toggleShowMore("javascript")}>
                                    Ver menos
                                </button>
                            </>
                        ) : (
                            <button className="btn-more" onClick={() => toggleShowMore("javascript")}>
                                Ver más
                            </button>
                        )}
                    </div>

                    <div>
                        <h3 className="name">DESARROLLO FRONTEND REACT</h3>
                        <div className="info-2">
                            <p className="date">Desafío Latam (2023)</p>
                        </div>

                        {showMore.react ? (
                            <>
                                <p className="info">
                                    Contenido del Bootcamp: React Hooks · Netifly · GitHub Pages · Tailwind CSS · JSON · HTML · CSS Flexbox · Git · Media
                                    Queries · VSCode · CSS · JavaScript · SCSS · Terminal · CSS Inline · Vite · React.js · CSS Grid · Context API · Bootstrap ·
                                    GitHub · API REST{" "}
                                </p>

                                <button className="btn-more" onClick={() => toggleShowMore("react")}>
                                    Ver menos
                                </button>
                            </>
                        ) : (
                            <button className="btn-more" onClick={() => toggleShowMore("react")}>
                                Ver más
                            </button>
                        )}
                    </div>

                    <div>
                        <h3 className="name">DIPLOMADO GESTIÓN CULTURAL</h3>
                        <div className="info-2">
                            <p className="date">Universidad Alberto Hurtado (2016)</p>
                        </div>
                        {showMore.diplomado ? (
                            <>
                                <p className="info">Como objetivo, la creación de proyectos culturales tanto en el sector público como en el privado.</p>
                                <button className="btn-more" onClick={() => toggleShowMore("diplomado")}>
                                    Ver menos
                                </button>
                            </>
                        ) : (
                            <button className="btn-more" onClick={() => toggleShowMore("diplomado")}>
                                Ver más
                            </button>
                        )}
                    </div>

                    <div>
                        <h3 className="name">GESTIÓN PROYECTOS CULTURALES</h3>

                        <div className="info-2">
                            <p className="date">Escuela Cultural Lumen (2014)</p>
                        </div>
                        {showMore.gestionProyectos ? (
                            <>
                                <p className="info">
                                    Basado en los diseños, gestiones y evaluaciones de proyectos culturales, las estrategias de planificación y gestión para
                                    proyectos individuales. Las alternativas de financiamiento, públicas y privadas existentes a nivel nacional en los ámbitos
                                    de la cultura.
                                </p>
                                <button className="btn-more" onClick={() => toggleShowMore("gestionProyectos")}>
                                    Ver menos
                                </button>
                            </>
                        ) : (
                            <button className="btn-more" onClick={() => toggleShowMore("gestionProyectos")}>
                                Ver más
                            </button>
                        )}
                    </div>

                    <div>
                        <h3 className="name">FOTOGRAFÍA PROFESIONAL</h3>

                        <div className="info-2">
                            <p className="date">Instituto Profesional Arcos (2010)</p>
                        </div>
                        {showMore.fotografia ? (
                            <>
                                <p className="info">
                                    Compuesto por ramos como: Fotografía Digital, Fotografía Análoga (Copiado Fino), Post Producción Digital, Composición
                                    Visual, Filosofía e Historia del Arte, Expresión corporal, Moda, Publicidad, Técnicas de retrato, entre otros. Creación de
                                    proyectos fotográficos.
                                </p>
                                <button className="btn-more" onClick={() => toggleShowMore("fotografia")}>
                                    Ver menos
                                </button>
                            </>
                        ) : (
                            <button className="btn-more" onClick={() => toggleShowMore("fotografia")}>
                                Ver más
                            </button>
                        )}
                    </div>
                </section>

                <div>
                    <p className="footer">HECHO CON 💛 PAOLA GONZÁLEZ. 2024</p>
                </div>
            </div>
        </>
    );
};
export default Home;
