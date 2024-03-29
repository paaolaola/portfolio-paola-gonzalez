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
                                    <GitHubIcon sx={{ fontSize: 40, color: "#ffbd59" }} />
                                </a>
                                <a href="https://www.linkedin.com/in/paola-gonzalez-guzman/" target="_blank" rel="noopener noreferrer">
                                    <LinkedInIcon sx={{ fontSize: 40, color: "#ffbd59" }} />
                                </a>

                                <a href="mailto:paolagonzalez.contacto@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <GoogleIcon sx={{ fontSize: 40, color: "#ffbd59" }} />
                                </a>

                                <a
                                    href="https://drive.google.com/file/d/1Afz8CZ1oW51xx2UedA3j_eTQ_oOzbQbH/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button className="section-btn-cv">
                                        Descargar CV <DescriptionIcon sx={{ fontSize: 15, color: "#545454", "&:hover": { textShadow: "0 0 10px #ffbd59" } }} />
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

                            <h3 className="name">DESARROLLO FRONTEND REACT</h3>
                            <div className="info-2">
                                <p className="date">Desafío Latam (2023)</p>
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
                    <div>
                        <section className="box-cert">
                            <h1 className="title">Certificados</h1>
                            <CaruselCert />
                        </section>
                    </div>
                </div>
            </div>
            <div>
                <section className="box-hobbies">
                    <h1 className="title">Mas sobre mi</h1>
                    <div className="hobbies-container">
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
                        <div className="carusel">
                            <CaruselHobbies />
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </>
    );
};

export default Home;
