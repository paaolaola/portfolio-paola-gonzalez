import { useState, useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";
import { useNavigate } from "react-router-dom";
import DescriptionIcon from "@mui/icons-material/Description";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import CaruselHobbies from "./CaruselHobbies";
import CaruselCert from "./CaruselCert";
import Footer from "./Footer";
import RandomPokemon from "./RandomPokemon";
import "../assets/css/Home.css";

const Home = () => {
    const { proyectos, studiesRef, projectsRef, aboutRef } = useContext(ProjectContext);

    //seccion proyectos, boton ver mas
    const navigate = useNavigate();
    const handleClick = (name) => {
        const path = `/proyectos/${name}`;
        navigate(path);
    };

    //sección estudios
    const [showMore, setShowMore] = useState({
        javascript: false,
        responsive: false,
        next: false,
        react: false,
        kanban: false,
        scrum: false,
        figma: false,
        git: false,
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
                <div className="mui-links">
                    <a href="https://github.com/paaolaola" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon sx={{ fontSize: 30, color: "#ffbd59", filter: "drop-shadow(0 0 15px #ffbd59)" }} />
                    </a>
                    <a href="https://www.linkedin.com/in/paola-gonzalez-guzman/" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon sx={{ fontSize: 30, color: "#ffbd59", filter: "drop-shadow(0 0 15px #ffbd59)" }} />
                    </a>
                    <a href="mailto:paolagonzalez.contacto@gmail.com" target="_blank" rel="noopener noreferrer">
                        <GoogleIcon sx={{ fontSize: 30, color: "#ffbd59", filter: "drop-shadow(0 0 15px #ffbd59)" }} />
                    </a>
                    <a href="https://drive.google.com/file/d/1QwBFIWGGQGgibayLczp69Q0_O9YjuXpW/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <DescriptionIcon sx={{ fontSize: 30, color: "#ffbd59", filter: "drop-shadow(0 0 15px #ffbd59)" }} />
                    </a>
                </div>

                <div className="image-perfil">
                    <img className="image" src="./img/perfil/fotoperfil.jpg" alt="foto de perfil de paola"></img>{" "}
                </div>

                <div className="names-perfil">
                    <h1 className="title-name">PAOLA </h1>
                    <h1 className="title-last-name">GONZÁLEZ .</h1>
                    <div>
                        <h4 className="under-title">DESARROLLADORA FRONT END</h4>
                    </div>
                </div>
            </header>

            <div className="box-container">
                <div className="first-section">
                    <div>
                        <section ref={aboutRef} className="box-about">
                            <h1 className="title">Sobre Mi</h1>
                            <p className="text">Soy una profesional con experiencia en Fotografía que ha dado un giro hacia el mundo tecnológico.</p>
                            <p className="text">
                                Me apasiona crear cosas visualmente atractivas y llevar a cabo proyectos innovadores que tengan un impacto positivo a nivel de
                                usuario. Me destaco por mi habilidad para trabajar en equipo, capacidad de aprendizaje y resolución de problemas, además del
                                relacionamiento con clientes y conocimiento de metodologías ágiles.
                            </p>
                            <p className="text">
                                {" "}
                                Actualmente estoy en busca de nuevos desafíos profesionales que me permitan seguir creciendo en el sector TI. Te invito a
                                conocerme y que revises mi portfolio y currículum.
                            </p>

                            <div className="btn-links">
                                <a href="https://github.com/paaolaola" target="_blank" rel="noopener noreferrer">
                                    <GitHubIcon sx={{ fontSize: 40, color: "#ffbd59", filter: "drop-shadow(0 0 20px #ffbd59)" }} />
                                </a>
                                <a href="https://www.linkedin.com/in/paola-gonzalez-guzman/" target="_blank" rel="noopener noreferrer">
                                    <LinkedInIcon sx={{ fontSize: 40, color: "#ffbd59", filter: "drop-shadow(0 0 20px #ffbd59)" }} />
                                </a>

                                <a href="mailto:paolagonzalez.contacto@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <GoogleIcon sx={{ fontSize: 40, color: "#ffbd59", filter: "drop-shadow(0 0 20px #ffbd59)" }} />
                                </a>

                                <a
                                    href="https://drive.google.com/file/d/1QwBFIWGGQGgibayLczp69Q0_O9YjuXpW/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button className="section-btn-cv">
                                        Descargar CV{" "}
                                        <DescriptionIcon
                                            sx={{
                                                fontSize: 15,
                                                color: "#545454",
                                            }}
                                        />
                                    </button>
                                </a>
                            </div>
                        </section>
                    </div>
                    <div>
                        <section className="box-stack">
                            <h1 className="title">Skills</h1>
                            <div>
                                <img className="stack-image" src="./img/stack/stack.png" alt="stack"></img>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <div>
                <section ref={projectsRef} className="box-projects">
                    <h1 className="title">Proyectos</h1>

                    <div className="content-projects">
                        {proyectos.map((proyecto) => (
                            <div key={proyecto.id} className="contenedor-card">
                                <img className="box-content-projects" src={proyecto.image} alt={proyecto.name} />
                                <div className="box">
                                    <div>
                                        <h5 className="proyect-name">{proyecto.name}</h5>
                                    </div>
                                    <div className="btn-sites-projects">
                                        <a href={proyecto.github} target="_blank" rel="noopener noreferrer">
                                            <button className="box-btn">GitHub</button>
                                        </a>
                                        <a href={proyecto.url} target="_blank" rel="noopener noreferrer">
                                            <button className="box-btn">Live Preview</button>
                                        </a>

                                        <button onClick={() => handleClick(proyecto.name)} className="box-btn">
                                            Ver más
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <div className="box-container">
                <div className="first-section">
                    <div>
                        <section ref={studiesRef} className="box-studies">
                            <h1 className="title">Estudios</h1>

                            <h3 className="name">React + Next JS 14</h3>
                            <div className="info-2">
                                <p className="date">Udemy (2024)</p>
                            </div>

                            {showMore.next ? (
                                <>
                                    <p className="info">Uso de React y Next JS para crear SPA, SSG y SSR con Login, React Hooks, Context API & Firebase.</p>
                                    <button className="btn-more" onClick={() => toggleShowMore("next")}>
                                        Menos info
                                    </button>
                                </>
                            ) : (
                                <button className="btn-more" onClick={() => toggleShowMore("next")}>
                                    Más info
                                </button>
                            )}

                            <h3 className="name">JAVASCRIPT</h3>
                            <div className="info-2">
                                <p className="date">Coderhouse (2024)</p>
                            </div>

                            {showMore.javascript ? (
                                <>
                                    <p className="info">
                                        Contenidos del Curso: Sintaxis, Control de flujos, Iteraciones, Funciones, Objetos y Arrays, DOM y Eventos, Storage y
                                        JSON, Ajax y Fetch, Frameworks y Node JS.
                                    </p>
                                    <button className="btn-more" onClick={() => toggleShowMore("javascript")}>
                                        Menos info
                                    </button>
                                </>
                            ) : (
                                <button className="btn-more" onClick={() => toggleShowMore("javascript")}>
                                    Más info
                                </button>
                            )}
                            <h3 className="name">Responsive Web Design</h3>
                            <div className="info-2">
                                <p className="date">FreeCodeCamp (2024)</p>
                            </div>

                            {showMore.responsive ? (
                                <>
                                    <p className="info">
                                        Alrededor de 300 ejercicios que incluyen conceptos básicos de HTML y CSS. Variables de CSS y las mejores prácticas de
                                        accesibilidad mediante la creación de cuestionarios. Además de creaciones web de diferentes tamaños de pantalla creando
                                        una galería de fotos con Flexbox y un diseño de artículo de revista con CSS Grid.
                                    </p>
                                    <button className="btn-more" onClick={() => toggleShowMore("responsive")}>
                                        Menos info
                                    </button>
                                </>
                            ) : (
                                <button className="btn-more" onClick={() => toggleShowMore("responsive")}>
                                    Más info
                                </button>
                            )}
                            <h3 className="name">Agile Kanban for Software Development Teams</h3>
                            <div className="info-2">
                                <p className="date">Udemy (2024)</p>
                            </div>

                            {showMore.kanban ? (
                                <>
                                    <p className="info">
                                        Contenidos: Principios de Kanban, Diferencias entre Kanban y Extreme Programming, Tablero de Kanban, Definición de Done,
                                        Stand-up diario, Reglas en Kanban.
                                    </p>
                                    <button className="btn-more" onClick={() => toggleShowMore("kanban")}>
                                        Menos info
                                    </button>
                                </>
                            ) : (
                                <button className="btn-more" onClick={() => toggleShowMore("kanban")}>
                                    Más info
                                </button>
                            )}

                            <h3 className="name">Figma</h3>
                            <div className="info-2">
                                <p className="date">Desafío Latam (2024)</p>
                            </div>

                            {showMore.figma ? (
                                <>
                                    <p className="info">
                                        Taller online de la academia que tiene por objetivo dar a conocer las funcionalidades básicas que permite Figma para la
                                        creación de interfaces digitales. Contenidos: Prototipos de interfaces de usuario, Automatización de interfaces de
                                        usuario, UI, Diseño de la interfaz de usuario, Diseño de experiencia de usuario (UX).
                                    </p>
                                    <button className="btn-more" onClick={() => toggleShowMore("figma")}>
                                        Menos info
                                    </button>
                                </>
                            ) : (
                                <button className="btn-more" onClick={() => toggleShowMore("figma")}>
                                    Más info
                                </button>
                            )}

                            <h3 className="name">Bases de GIT, GitHub</h3>
                            <div className="info-2">
                                <p className="date">Desafío Latam (2024)</p>
                            </div>

                            {showMore.git ? (
                                <>
                                    <p className="info">Contenidos: Terminal, Git, GitHub, GitHub Pages y Trabajo Colaborativo.</p>
                                    <button className="btn-more" onClick={() => toggleShowMore("git")}>
                                        Menos info
                                    </button>
                                </>
                            ) : (
                                <button className="btn-more" onClick={() => toggleShowMore("git")}>
                                    Más info
                                </button>
                            )}
                            <h3 className="name">Scrum Fundamentals Certified</h3>
                            <div className="info-2">
                                <p className="date">ScrumStudy(2024)</p>
                            </div>

                            {showMore.scrum ? (
                                <>
                                    <p className="info">
                                        Curso online que incluye examen de aprobación de 40 preguntas basadas en los conceptos claves sobre el marco Scrum,
                                        vistos en la Guía SBOK®
                                    </p>
                                    <button className="btn-more" onClick={() => toggleShowMore("scrum")}>
                                        Menos info
                                    </button>
                                </>
                            ) : (
                                <button className="btn-more" onClick={() => toggleShowMore("scrum")}>
                                    Más info
                                </button>
                            )}

                            <h3 className="name">DESARROLLO FRONT END REACT</h3>
                            <div className="info-2">
                                <p className="date">Desafío Latam (2024)</p>
                            </div>

                            {showMore.react ? (
                                <>
                                    <p className="info">
                                        Conocimientos adquiridos por el Bootcamp: React Hooks, Netifly, GitHub Pages, Tailwind CSS, JSON, HTML, CSS Flexbox,
                                        Git, Media Queries, VSCode, CSS, JavaScript, SCSS, Terminal, CSS Inline, Vite, React.js, CSS Grid, Context API,
                                        Bootstrap, GitHub y API REST{" "}
                                    </p>

                                    <button className="btn-more" onClick={() => toggleShowMore("react")}>
                                        Menos info
                                    </button>
                                </>
                            ) : (
                                <button className="btn-more" onClick={() => toggleShowMore("react")}>
                                    Más info
                                </button>
                            )}
                        </section>
                    </div>

                    <div>
                        <section className="box-cert">
                            <h1 className="title">Certificaciones</h1>
                            <CaruselCert />
                        </section>
                        <div>
                            <RandomPokemon />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <section className="box-hobbies">
                    <h1 className="title">Mas sobre mi</h1>
                    <div className="hobbies-container">
                        <div className="carusel">
                            <CaruselHobbies />
                        </div>
                        <div className="text-hobbies">
                            <p>
                                Me gusta participar en actividades al aire libre, como viajar, el trekking, acampar y los conciertos de música. Además disfruto
                                mucho visitando exposiciones de arte para inspirarme.{" "}
                            </p>
                            <p>En mi tiempo libre me dedico a la fotografía análoga y también a crear fotomontajes digitales de temática onírica.</p>
                            <p>
                                Estas aficiones son parte importante en mi vida y me han dado espacio para desarrollar habilidades creativas y visuales
                                relacionadas directamente con el diseño y que complementan mi experiencia como Front End.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </>
    );
};

export default Home;
