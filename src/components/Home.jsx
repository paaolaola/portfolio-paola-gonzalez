import { useState, useContext, useEffect } from 'react';
import { ProjectContext } from '../context/ProjectContext';
import { StackContext } from '../context/StackContext';
import { StudyContext } from '../context/StudyContext';
import { useNavigate } from 'react-router-dom';
import DescriptionIcon from '@mui/icons-material/Description';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CaruselHobbies from './CaruselHobbies';
import CaruselCert from './CaruselCert';
import Footer from './Footer';
import RandomPokemon from './RandomPokemon';
import '../styles/Home.css';

const Home = () => {
    // Estados para animación de subtítulo
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const fullText = 'DESARROLLADORA FRONT END';

    //useEffect para animación de subtítulo
    useEffect(() => {
        const interval = setInterval(() => {
            setText((prev) => prev + fullText.charAt(index));
            setIndex((prevIndex) => {
                if (prevIndex + 1 === fullText.length) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setText('');
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

    // Estados para mostrar proyectos
    const [visibleProjects, setVisibleProjects] = useState(4);
    const [showAllProjects, setShowAllProjects] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const showLessProjects = () => {
        setVisibleProjects(3); // Cambia esto según el número inicial de proyectos a mostrar
        setShowAllProjects(false);
    };

    const showMoreProjects = () => {
        setIsLoading(true);
        setTimeout(() => {
            setVisibleProjects(proyectos.length);
            setIsLoading(false);
            setShowAllProjects(true);
        }, 1000);
    };

    // Sección estudios
    const initialShowMore = {};
    studies.forEach((study) => {
        initialShowMore[study.state] = false;
    });
    // Estado para mostrar más info de estudios
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
                behavior: 'smooth',
            });
        };
        // Función para mostrar el botón de scroll
        const handleScroll = () => {
            if (window.scrollY >= document.body.scrollHeight / 2) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        //useEffect para mostrar el botón de scroll
        useEffect(() => {
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);

        return (
            isVisible && (
                <button onClick={scrollToTop} className='btn-top'>
                    <ArrowUpwardIcon />
                </button>
            )
        );
    };

    return (
        <>
            <header className='box-perfil'>
                <div className='mui-links'>
                    <a href='https://github.com/paaolaola' target='_blank' rel='noopener noreferrer'>
                        <GitHubIcon sx={{ fontSize: 30, color: '#ffbd59', filter: 'drop-shadow(0 0 15px #ffbd59)' }} />
                    </a>
                    <a href='https://www.linkedin.com/in/paola-gonzalez-guzman/' target='_blank' rel='noopener noreferrer'>
                        <LinkedInIcon sx={{ fontSize: 30, color: '#ffbd59', filter: 'drop-shadow(0 0 15px #ffbd59)' }} />
                    </a>
                    <a href='mailto:paolagonzalez.contacto@gmail.com' target='_blank' rel='noopener noreferrer'>
                        <GoogleIcon sx={{ fontSize: 30, color: '#ffbd59', filter: 'drop-shadow(0 0 15px #ffbd59)' }} />
                    </a>
                    <a href='https://drive.google.com/file/d/1SxBCw7e558eD_rrWddDaXcSbPZpNnfOH/view?usp=drive_link' target='_blank' rel='noopener noreferrer'>
                        <DescriptionIcon sx={{ fontSize: 30, color: '#ffbd59', filter: 'drop-shadow(0 0 15px #ffbd59)' }} />
                    </a>
                </div>

                <div className='image-perfil'>
                    <img className='image' src='./img/perfil/fotoperfil.jpg' alt='foto de perfil de paola'></img>
                </div>

                <div className='names-perfil'>
                    <h1 className='title-name'>PAOLA </h1>
                    <h1 className='title-last-name'>GONZÁLEZ .</h1>
                    <div>
                        <h4 className='under-title'>{text}</h4>
                    </div>
                </div>
            </header>

            <div className='box-container'>
                <div className='first-section'>
                    <div>
                        <section ref={aboutRef} className='box-about'>
                            <h1 className='title'>Sobre Mi</h1>
                            <p className='text'>
                                Soy Desarrolladora Frontend con experiencia en HTML, CSS, JavaScript y especialización en React. He trabajado en proyectos donde
                                me he enfocado en crear interfaces de usuario atractivas y funcionales. 
                            </p>
                            <p className='text'>
                                Disfruto colaborando en equipos multidisciplinarios y tengo conocimientos de metodologías ágiles como Scrum y Kanban para
                                optimizar el desarrollo de los proyectos.
                            </p>
                            <p className='text'>En mi tiempo libre me dedico a aprender nuevas
                                tecnologías para seguir mejorando mis habilidades.</p>
                            <p className='text'>
                                Mi objetivo es aportar valor a cada proyecto en el que participo y seguir
                                creciendo como profesional.
                            </p>

                            <div className='btn-links'>
                                <a href='https://github.com/paaolaola' target='_blank' rel='noopener noreferrer'>
                                    <GitHubIcon sx={{ fontSize: 40, color: '#ffbd59' }} className='animated-icon' />
                                </a>
                                <a href='https://www.linkedin.com/in/paola-gonzalez-guzman/' target='_blank' rel='noopener noreferrer'>
                                    <LinkedInIcon sx={{ fontSize: 40, color: '#ffbd59' }} className='animated-icon' />
                                </a>
                                <a href='mailto:paolagonzalez.contacto@gmail.com' target='_blank' rel='noopener noreferrer'>
                                    <GoogleIcon sx={{ fontSize: 40, color: '#ffbd59' }} className='animated-icon' />
                                </a>
                                <a
                                    href='https://drive.google.com/file/d/1SxBCw7e558eD_rrWddDaXcSbPZpNnfOH/view?usp=drive_link'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <button className='section-btn-cv'>
                                        Descargar CV <DescriptionIcon sx={{ fontSize: 15, color: '#545454' }} />
                                    </button>
                                </a>
                            </div>
                        </section>
                    </div>
                    <div>
                        <section className='box-stack'>
                            <h1 className='title'>Skills</h1>
                            <div className='box-image-stack'>
                                {stacks.map(({ id, images, alt }) => (
                                    <img key={id} className='stack-image' src={images} alt={alt} />
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <div>
                <section ref={projectsRef} className='box-projects'>
                    <h1 className='title'>Proyectos</h1>
                    <div className='content-projects'>
                        {isLoading ? (
                            <div class="loading-overlay">
    <div class="loading-info">
        <img src="./img/favicon/PG.png" alt="Loading..."/>
    </div>
</div>
                            
                        ) : (
                            proyectos.slice(0, visibleProjects).map(({ id, image, name, github, url, routename }) => (
                                <div key={id} className='contenedor-card'>
                                    <div className='container-box-projects'>
                                    <img className='box-content-projects' src={image} alt={name} />
                                    <div className='box'>
                                        <div>
                                            <h5 className='proyect-name'>{name}</h5>
                                        </div>
                                        <div className='btn-sites-projects'>
                                            <a href={github} target='_blank' rel='noopener noreferrer'>
                                                <button className='box-btn'>GitHub</button>
                                            </a>
                                            <a href={url} target='_blank' rel='noopener noreferrer'>
                                                <button className='box-btn'>Live Preview</button>
                                            </a>

                                            <button onClick={() => handleClick(routename)} className='box-btn'>
                                                Ver más
                                            </button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                    <div className='box-btn-more'>
                        {!showAllProjects && (
                            <button onClick={showMoreProjects} className='btn-more'>
                                Más proyectos
                            </button>
                        )}
                        {showAllProjects && (
                            <button onClick={showLessProjects} className='btn-more'>
                                Menos proyectos
                            </button>
                        )}
                    </div>
                </section>
            </div>

            <div className='box-container'>
                <div className='first-section'>
                    <div>
                        <section ref={studiesRef} className='box-studies'>
                            <h1 className='title'>Estudios</h1>
                            {studies.map(({ id, name, place, info, state }) => (
                                <div key={id}>
                                    <h3 className='name'>{name}</h3>
                                    <div className='info-2'>
                                        <div className='place-button-container'>
                                            <p className='date'>{place}</p>
                                            <button className='btn-more' onClick={() => toggleShowMore(state)}>
                                                {showMore[state] ? 'Menos info' : 'Más info'}
                                            </button>
                                        </div>
                                        {showMore[state] && (
                                            <div>
                                                <p className='info'>{info}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </section>
                    </div>

                    <div>
                        <section className='box-cert'>
                            <h1 className='title'>Certificaciones</h1>
                            <CaruselCert />
                        </section>
                        <div>
                            <RandomPokemon />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <section className='box-hobbies'>
                    <h1 className='title'>Mas sobre mi</h1>
                    <div className='hobbies-container'>
                        <div className='carusel'>
                            <CaruselHobbies />
                        </div>
                        <div className='text-hobbies'>
                            <p>
                                Fuera del ámbito profesional, disfruto de diversas actividades al aire libre como viajar, hacer trekking, acampar y asistir a
                                conciertos de música.
                            </p>

                            <p>
                                En mi tiempo libre, me dedico a la fotografía análoga y a la creación de fotomontajes digitales con temática onírica agregando
                                IA. Estas aficiones no solo son una parte importante de mi vida, 
                                sino que también han contribuido significativamente al
                                desarrollo de mis habilidades creativas y visuales, complementando así mi experiencia como desarrolladora Front End.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />

            /* Se añade aquí el componente ScrollToTopButton */
            <ScrollToTopButton />
        </>
    );
};

export default Home;
