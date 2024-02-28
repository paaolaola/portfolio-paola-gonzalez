import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import CaruselHobbies from "./CaruselHobbies";
import CaruselCert from "./CaruselCert";
import "../assets/css/Home.css";
import { useState } from "react";

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
                    <img className="image" src="./img/perfil/fotoperfil.jpg" alt="foto de perfil de paola"></img>
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
                        <section className="box-about">
                            <h1 className="title">SOBRE MI</h1>
                            <p className="text">
                                Soy Desarrolladora Frontend y Fotógrafa con conocimientos en la ejecución de proyectos bajo la metodología ágil y la
                                implementación de buenas prácticas. <br /> Me apasiona crear cosas visualmente atractivas y llevar a cabo proyectos innovadores.
                                Me destaco profesionalmente por mi habilidad para trabajar en equipo, capacidad de aprendizaje y resolución de problemas, además
                                del relacionamiento con clientes y conocimiento de la metodología SCRUM.
                                <br /> Actualmente estoy en busca de nuevos desafíos profesionales que me permitan seguir creciendo en el sector TI. Te invito a
                                conocerme y que revises mis redes y currículum (disponible para descarga).
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
                                    href="https://drive.google.com/file/d/1hH5dV_oMF6M0u97pH7OVKOy5KFPsxMs-/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="section-btn-cv"
                                >
                                    Descargar CV
                                </a>
                            </div>
                        </section>
                        <section className="box-stack ">
                            <h1 className="title">STACK</h1>
                            <div>
                                <img className="stack-image" src="./img/stack/stack.png" alt="stack"></img>
                            </div>
                        </section>
                        <section className="box-cert">
                            <h1 className="title">CERTIFICADOS</h1>
                            <CaruselCert />
                        </section>
                    </div>
                    <div>
                        <section className="box-hobbies">
                            <h1 className="title">HOBBIES</h1>
                            <p className="text">
                                Me gustan las actividades al aire libre como trekking en cerros, acampar, los conciertos de música. También visitar exposiciones
                                de arte. La fotografía análoga es un pasatiempo y a la vez es parte de mi trabajo autoral, así como también crear fotomontajes
                                digitales de temática onírica.
                            </p>
                            <div className="carusel">
                                <CaruselHobbies />
                            </div>
                        </section>

                        <section className="box-studies">
                            <h1 className="title">ESTUDIOS</h1>

                            <div>
                                <h3 className="name">JAVASCRIPT</h3>
                                <div className="info-2">
                                    <p className="date">Coderhouse (2024)</p>
                                </div>

                                {showMore.javascript ? (
                                    <>
                                        <p className="info">
                                            Contenidos del curso: Sintaxis, Control de flujos, Iteraciones, Funciones, Objetos y Arrays, DOM y Eventos, Storage
                                            y JSON, Ajax y Fetch, Frameworks y Node JS.
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
                            </div>

                            <div>
                                <h3 className="name">DESARROLLO FRONTEND REACT</h3>
                                <div className="info-2">
                                    <p className="date">Desafío Latam (2023)</p>
                                </div>

                                {showMore.react ? (
                                    <>
                                        <p className="info">
                                            Contenido del Bootcamp: React Hooks · Netifly · GitHub Pages · Tailwind CSS · JSON · HTML · CSS Flexbox · Git ·
                                            Media Queries · VSCode · CSS · JavaScript · SCSS · Terminal · CSS Inline · Vite · React.js · CSS Grid · Context API
                                            · Bootstrap · GitHub · API REST{" "}
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
                            </div>

                            <div>
                                <h3 className="name">DIPLOMADO GESTIÓN CULTURAL</h3>
                                <div className="info-2">
                                    <p className="date">Universidad Alberto Hurtado (2016)</p>
                                </div>
                                {showMore.diplomado ? (
                                    <>
                                        <p className="info">
                                            Como objetivo, la creación de proyectos culturales tanto en el sector público como en el privado.
                                        </p>
                                        <button className="btn-more" onClick={() => toggleShowMore("diplomado")}>
                                            Menos info
                                        </button>
                                    </>
                                ) : (
                                    <button className="btn-more" onClick={() => toggleShowMore("diplomado")}>
                                        Más info
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
                                            Basado en los diseños, gestiones y evaluaciones de proyectos culturales, las estrategias de planificación y gestión
                                            para proyectos individuales. Las alternativas de financiamiento, públicas y privadas existentes a nivel nacional en
                                            los ámbitos de la cultura.
                                        </p>
                                        <button className="btn-more" onClick={() => toggleShowMore("gestionProyectos")}>
                                            Menos info
                                        </button>
                                    </>
                                ) : (
                                    <button className="btn-more" onClick={() => toggleShowMore("gestionProyectos")}>
                                        Más info
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
                                            Compuesto por ramos como: Fotografía Digital, Fotografía Análoga (Copiado Fino), Post Producción Digital,
                                            Composición Visual, Filosofía e Historia del Arte, Expresión corporal, Moda, Publicidad, Técnicas de retrato y
                                            creación de Proyectos Fotográficos.
                                        </p>
                                        <button className="btn-more" onClick={() => toggleShowMore("fotografia")}>
                                            Menos info
                                        </button>
                                    </>
                                ) : (
                                    <button className="btn-more" onClick={() => toggleShowMore("fotografia")}>
                                        Más info
                                    </button>
                                )}
                            </div>
                        </section>
                    </div>
                </div>
                <div>
                    <section className="box-projects">
                        <h1 className="title">PROYECTOS</h1>
                        <div className="content-projects">
                            <div className="contenedor-card">
                                <img className="box-content-projects" src="./img/proyectos/Proyecto-5.png" alt="Proyecto-5" />
                                <div className="box">
                                    <div className="btn-sites">
                                        <a href=" https://github.com/paaolaola/proyecto-final-gary-chesi-pao" target="_blank" rel="noopener noreferrer">
                                            <button className="box-btn">Ver GitHub</button>
                                        </a>
                                        <a href="https://magenta-pika-e54801.netlify.app" target="_blank" rel="noopener noreferrer">
                                            <button className="box-btn">Ver sitio</button>
                                        </a>
                                    </div>
                                    <div className="btn-skills">
                                        <button>JavaScript</button>
                                        <button>React JS</button>
                                        <button>React Hooks </button>
                                        <button>Context API </button>
                                        <button>JSON</button>
                                        <button>Vite</button>
                                        <button>SCSS</button>
                                        <button>CSS Flexbox</button>
                                        <button>CSS Grid</button>
                                        <button>CSS</button>
                                        <button>HTML</button>
                                        <button>Terminal</button>
                                        <button>Bootstrap</button>
                                        <button>Media Queries</button>
                                        <button>Git</button>
                                        <button>GitHub</button>
                                    </div>
                                </div>
                            </div>

                            <div className="contenedor-card">
                                <img className="box-content-projects" src="./img/proyectos/Proyecto-3.png" alt="Proyecto-3" />
                                <div className="box">
                                    <div className="btn-sites">
                                        <a href="https://github.com/paaolaola/prueba-react-2-paola-gonzalez" target="_blank" rel="noopener noreferrer">
                                            <button className="box-btn">Ver GitHub</button>
                                        </a>
                                        <a
                                            href="https://6577caf4ca1cbb7ce5df7dd4--superlative-wisp-3ea1f8.netlify.app/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <button className="box-btn">Ver sitio</button>
                                        </a>
                                    </div>
                                    <div className="btn-skills">
                                        <button>JavaScript</button>
                                        <button>React JS</button>
                                        <button>React Hooks </button>
                                        <button>JSON</button>
                                        <button>Vite</button>
                                        <button>CSS Flexbox</button>
                                        <button>CSS Grid</button>
                                        <button>CSS</button>
                                        <button>HTML</button>
                                        <button>Terminal</button>
                                        <button>Media Queries</button>
                                        <button>Git</button>
                                        <button>GitHub</button>
                                        <button>Netifly</button>
                                    </div>
                                </div>
                            </div>

                            <div className="contenedor-card">
                                <img className="box-content-projects" src="./img/proyectos/Proyecto-4.png" alt="Proyecto-4" />
                                <div className="box">
                                    <div className="btn-sites">
                                        <a href="https://github.com/paaolaola/proyecto-grid-responsive" target="_blank" rel="noopener noreferrer">
                                            <button className="box-btn">Ver GitHub</button>
                                        </a>
                                        <a href="https://paaolaola.github.io/proyecto-grid-responsive/" target="_blank" rel="noopener noreferrer">
                                            <button className="box-btn">Ver sitio</button>
                                        </a>
                                    </div>
                                    <div className="btn-skills">
                                        <button>Vite</button>
                                        <button>CSS Flexbox</button>
                                        <button>CSS Grid</button>
                                        <button>CSS</button>
                                        <button>HTML</button>
                                        <button>Terminal</button>
                                        <button>Media Queries</button>
                                        <button>Git</button>
                                        <button>GitHub</button>
                                        <button>GitHub Pages</button>
                                    </div>
                                </div>
                            </div>

                            <div className="contenedor-card">
                                <img className="box-content-projects" src="./img/proyectos/Proyecto-2.png" alt="Proyecto-2" />
                                <div className="box">
                                    <div className="btn-sites">
                                        <a href="https://github.com/paaolaola/desafio-2-react-II-paola-gonzalez" target="_blank" rel="noopener noreferrer">
                                            <button className="box-btn">Ver GitHub</button>
                                        </a>
                                        <a href="https://singular-horse-6a9d66.netlify.app/" target="_blank" rel="noopener noreferrer">
                                            <button className="box-btn">Ver sitio</button>
                                        </a>
                                    </div>
                                    <div className="btn-skills">
                                        <button>JavaScript</button>
                                        <button>React JS</button>
                                        <button>React Hooks </button>
                                        <button>Context API </button>
                                        <button>API REST </button>
                                        <button>Vite</button>
                                        <button>CSS Flexbox</button>
                                        <button>CSS</button>
                                        <button>HTML</button>
                                        <button>Terminal</button>
                                        <button>Media Queries</button>
                                        <button>Git</button>
                                        <button>GitHub</button>
                                        <button>Netifly</button>
                                    </div>
                                </div>
                            </div>

                            <div className="contenedor-card">
                                <img className="box-content-projects" src="./img/proyectos/Proyecto-1.png" alt="Proyecto-1" />{" "}
                                <div className="box">
                                    <div className="btn-sites">
                                        <a href="https://github.com/paaolaola/prueba-react-1-paola-gonzalez" target="_blank" rel="noopener noreferrer">
                                            {" "}
                                            <button className="box-btn">Ver GitHub</button>
                                        </a>
                                        <a href="https://unique-biscuit-c647be.netlify.app/" target="_blank" rel="noopener noreferrer">
                                            {" "}
                                            <button className="box-btn">Ver sitio</button>
                                        </a>{" "}
                                    </div>
                                    <div className="btn-skills">
                                        <button>JavaScript</button>
                                        <button>API REST</button>
                                        <button>JSON</button>
                                        <button>Vite</button>
                                        <button>CSS</button>
                                        <button>HTML</button>
                                        <button>Terminal</button>
                                        <button>Bootstrap</button>
                                        <button>Media Queries</button>
                                        <button>Git</button>
                                        <button>GitHub</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div>
                    <p className="footer">HECHO CON 💛 PAOLA GONZÁLEZ. 2024</p>
                </div>
            </div>
        </>
    );
};
export default Home;
