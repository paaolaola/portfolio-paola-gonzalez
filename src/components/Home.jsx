import React, { useState, useContext, useEffect, useRef } from "react";
import { ProjectContext } from "../context/ProjectContext";
import { StackContext } from "../context/StackContext";
import { StudyContext } from "../context/StudyContext";
import { useNavigate } from "react-router-dom";
import DescriptionIcon from "@mui/icons-material/Description";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import CaruselHobbies from "./CaruselHobbies";
import CaruselCert from "./CaruselCert";
import Footer from "./Footer";
import RandomPokemon from "./RandomPokemon";
import "../assets/css/Home.css";

const Home = () => {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const fullText = "DESARROLLADORA FRONT END";

    //Lógica para animación de subtítulo
    useEffect(() => {
        const interval = setInterval(() => {
            setText((prev) => prev + fullText.charAt(index));
            setIndex((prevIndex) => {
                if (prevIndex + 1 === fullText.length) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setText("");
                        setIndex(0);
                    }, 10000);
                    return prevIndex;
                } else {
                    return prevIndex + 1;
                }
            });
        }, 50);

        return () => clearInterval(interval);
    }, [index]);

    // Contextos
    const { proyectos, studiesRef, projectsRef, aboutRef } = useContext(ProjectContext);
    const { stacks } = useContext(StackContext);
    const { studies } = useContext(StudyContext);

    // Sección proyectos
    const navigate = useNavigate();
    const handleClick = (routename) => {
        const path = `/proyectos/${routename}`;
        navigate(path);
    };

    // Sección estudios
    const initialShowMore = {};
    studies.forEach((study) => {
        initialShowMore[study.state] = false;
    });
    const [showMore, setShowMore] = useState(initialShowMore);

    const toggleShowMore = (state) => {
        setShowMore((prevState) => ({
            ...prevState,
            [state]: !prevState[state],
        }));
    };

    // Componente ScrollToTopButton
    const ScrollToTopButton = () => {
        const [isVisible, setIsVisible] = useState(false);

        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        };

        const handleScroll = () => {
            if (window.scrollY >= document.body.scrollHeight / 2) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        useEffect(() => {
            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }, []);

        return (
            isVisible && (
                <button onClick={scrollToTop} className="btn-top">
                    <ArrowUpwardIcon />
                </button>
            )
        );
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
                    <img className="image" src="./img/perfil/fotoperfil.jpg" alt="foto de perfil de paola"></img>
                </div>

                <div className="names-perfil">
                    <h1 className="title-name">PAOLA </h1>
                    <h1 className="title-last-name">GONZÁLEZ .</h1>
                    <div>
                        <h4 className="under-title">{text}</h4>
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
                                Actualmente estoy en busca de nuevos desafíos profesionales que me permitan seguir creciendo en el sector TI. Te invito a
                                conocerme y que revises mi portfolio y currículum.
                            </p>

                            <div className="btn-links">
                                <a href="https://github.com/paaolaola" target="_blank" rel="noopener noreferrer">
                                    <GitHubIcon sx={{ fontSize: 40, color: "#ffbd59" }} className="animated-icon" />
                                </a>
                                <a href="https://www.linkedin.com/in/paola-gonzalez-guzman/" target="_blank" rel="noopener noreferrer">
                                    <LinkedInIcon sx={{ fontSize: 40, color: "#ffbd59" }} className="animated-icon" />
                                </a>
                                <a href="mailto:paolagonzalez.contacto@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <GoogleIcon sx={{ fontSize: 40, color: "#ffbd59" }} className="animated-icon" />
                                </a>
                                <a
                                    href="https://drive.google.com/file/d/1QwBFIWGGQGgibayLczp69Q0_O9YjuXpW/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button className="section-btn-cv">
                                        Descargar CV <DescriptionIcon sx={{ fontSize: 15, color: "#545454" }} />
                                    </button>
                                </a>
                            </div>
                        </section>
                    </div>
                    <div>
                        <section className="box-stack">
                            <h1 className="title">Skills</h1>
                            <div className="box-image-stack">
                                {stacks.map(({ id, images, alt }) => (
                                    <img key={id} className="stack-image" src={images} alt={alt} />
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <div>
                <section ref={projectsRef} className="box-projects">
                    <h1 className="title">Proyectos</h1>

                    <div className="content-projects">
                        {proyectos.map(({ id, image, name, github, url, routename }) => (
                            <div key={id} className="contenedor-card">
                                <img className="box-content-projects" src={image} alt={name} />
                                <div className="box">
                                    <div>
                                        <h5 className="proyect-name">{name}</h5>
                                    </div>
                                    <div className="btn-sites-projects">
                                        <a href={github} target="_blank" rel="noopener noreferrer">
                                            <button className="box-btn">GitHub</button>
                                        </a>
                                        <a href={url} target="_blank" rel="noopener noreferrer">
                                            <button className="box-btn">Live Preview</button>
                                        </a>

                                        <button onClick={() => handleClick(routename)} className="box-btn">
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
                            {studies.map(({ id, name, place, info, state }) => (
                                <div key={id}>
                                    <h3 className="name">{name}</h3>
                                    <div className="info-2">
                                        <div className="place-button-container">
                                            <p className="date">{place}</p>
                                            <button className="btn-more" onClick={() => toggleShowMore(state)}>
                                                {showMore[state] ? "Menos info" : "Más info"}
                                            </button>
                                        </div>
                                        {showMore[state] && (
                                            <div>
                                                <p className="info">{info}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
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
                                mucho visitando exposiciones de arte para inspirarme.
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

            {/* Añadir el componente ScrollToTopButton */}
            <ScrollToTopButton />
        </>
    );
};

export default Home;
