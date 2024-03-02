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

    const proyectos = [
        {
            id: 1,
            name: "Proyecto final",
            github: "https://github.com/paaolaola/proyecto-final-gary-chesi-pao",
            url: "https://magenta-pika-e54801.netlify.app",
            image: "./img/proyectos/Proyecto5.png",
            skills: {
                skill1: "JavaScript",
                skill2: "React JS",
                skill3: "React Hooks",
                skill4: "Context API",
                skill5: "JSON",
                skill6: "Vite",
                skill7: "SCSS",
                skill8: "CSS Flexbox",
                skill9: "CSS Grid",
                skill10: "CSS",
                skill11: "HTML",
                skill12: "Terminal",
                skill13: "Bootstrap",
                skill14: "Media Queries",
                skill15: "Git",
                skill16: "GitHub",
            },
        },
        {
            id: 2,
            name: "Pizzeria mamma mia",
            github: "https://github.com/paaolaola/prueba-react-2-paola-gonzalez",
            url: "https://6577caf4ca1cbb7ce5df7dd4--superlative-wisp-3ea1f8.netlify.app/",
            image: "./img/proyectos/Proyecto3.png",

            skills: {
                skill1: "JavaScript",
                skill2: "React JS",
                skill3: "React Hooks",
                skill4: "JSON",
                skill5: "Vite",
                skill6: "CSS Flexbox",
                skill7: "CSS Grid",
                skill8: "CSS",
                skill9: "HTML",
                skill10: "Terminal",
                skill11: "Media Queries",
                skill12: "Git",
                skill13: "GitHub",
                skill14: "Netlify",
            },
        },

        {
            id: 3,
            name: "Proyecto grid",
            github: "https://github.com/paaolaola/proyecto-grid-responsive",
            url: "https://paaolaola.github.io/proyecto-grid-responsive/",
            image: "./img/proyectos/Proyecto4.png",
            skills: {
                skill1: "Vite",
                skill2: "CSS Flexbox",
                skill3: "CSS Grid",
                skill4: "CSS",
                skill5: "HTML",
                skill6: "Terminal",
                skill7: "Media Queries",
                skill8: "Git",
                skill9: "GitHub",
                skill10: "GitHub Pages",
            },
        },

        {
            id: 4,
            name: "Plantas galeria de fotos",
            github: "https://github.com/paaolaola/desafio-2-react-II-paola-gonzalez",
            url: "https://singular-horse-6a9d66.netlify.app/",
            image: "./img/proyectos/Proyecto2.png",
            skills: {
                skill1: "JavaScript",
                skill2: "React JS",
                skill3: "React Hooks",
                skill4: "API REST",
                skill5: "JSON",
                skill6: "Vite",
                skill7: "CSS Flexbox",
                skill8: "CSS",
                skill9: "HTML",
                skill10: "Terminal",
                skill11: "Media Queries",
                skill12: "Git",
                skill13: "GitHub",
                skill14: "Netlify",
            },
        },

        {
            id: 5,
            name: "Feriados en Chile",
            github: "https://github.com/paaolaola/prueba-react-1-paola-gonzalez",
            url: "https://unique-biscuit-c647be.netlify.app/",
            image: "./img/proyectos/Proyecto1.png",
            skills: {
                skill1: "JavaScript",
                skill2: "API REST",
                skill3: "JSON",
                skill4: "Vite",
                skill5: "CSS",
                skill6: "HTML",
                skill7: "Terminal",
                skill8: "Bootstrap",
                skill9: "Media Queries",
                skill10: "Git",
                skill11: "GitHub",
            },
        },
    ];

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
                                implementación de buenas prácticas.{" "}
                            </p>
                            <p className="text">
                                Me apasiona crear cosas visualmente atractivas y llevar a cabo proyectos innovadores. Me destaco profesionalmente por mi
                                habilidad para trabajar en equipo, capacidad de aprendizaje y resolución de problemas, además del relacionamiento con clientes y
                                conocimiento de la metodología SCRUM.
                            </p>
                            <p className="text">
                                {" "}
                                Actualmente estoy en busca de nuevos desafíos profesionales que me permitan seguir creciendo en el sector TI. Te invito a
                                conocerme y que revises mis redes y currículum.
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
                                            Contenidos del Curso: Sintaxis, Control de flujos, Iteraciones, Funciones, Objetos y Arrays, DOM y Eventos, Storage
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
                            {proyectos.map((proyecto) => (
                                <div key={proyecto.id} className="contenedor-card">
                                    <img className="box-content-projects" src={proyecto.image} alt={proyecto.name} />
                                    <div className="box">
                                        <div className="btn-sites">
                                            <a href={proyecto.github} target="_blank" rel="noopener noreferrer">
                                                <button className="box-btn">Ver GitHub</button>
                                            </a>
                                            <a href={proyecto.url} target="_blank" rel="noopener noreferrer">
                                                <button className="box-btn">Ver sitio</button>
                                            </a>
                                        </div>

                                        <div className="btn-skills">
                                            {Object.values(proyecto.skills).map((skill, index) => (
                                                <button key={index}>{skill}</button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
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
