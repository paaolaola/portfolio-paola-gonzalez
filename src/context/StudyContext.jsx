import { useState, createContext } from "react";
export const StudyContext = createContext();

const StudyProvider = ({ children }) => {
    //Array de estudios actualizado
    //Se puede agregar o quitar estudios de la lista para que se muestren en la sección de estudios y en la página de estudios

    const studies = [
        {
            id: 1,
            name: "React + Next JS 14",
            place: "Udemy (2024)",
            info: "Uso de React y Next JS para crear SPA, SSG y SSR con Login, React Hooks, Context API & Firebase.",
            state: "next",
        },
        {
            id: 2,
            name: "JAVASCRIPT",
            place: "Coderhouse (2024)",
            info: "Contenidos del Curso: Sintaxis, Control de flujos, Iteraciones, Funciones, Objetos y Arrays, DOM y Eventos, Storage y JSON, Ajax y Fetch, Frameworks y Node JS.",
            state: "javascript",
        },
        {
            id: 3,
            name: "Responsive Web Design",
            place: "FreeCodeCamp (2024)",
            info: "Alrededor de 300 ejercicios que incluyen conceptos básicos de HTML y CSS. Variables de CSS y las mejores prácticas de accesibilidad mediante la creación de cuestionarios. Además de creaciones web de diferentes tamaños de pantalla creando una galería de fotos con Flexbox y un diseño de artículo de revista con CSS Grid.",
            state: "responsive",
        },
        {
            id: 4,
            name: "Agile Kanban for Software Development Teams",
            place: "Udemy (2024)",
            info: "Principios de Kanban, Diferencias entre Kanban y Extreme Programming, Tablero de Kanban, Definición de Done, Stand-up diario, Reglas en Kanban.",
            state: "kanban",
        },
        {
            id: 5,
            name: "Figma",
            place: "Desafío Latam (2024)",
            info: "Taller online de la academia que tiene por objetivo dar a conocer las funcionalidades básicas que permite Figma para la creación de interfaces digitales. Contenidos: Prototipos de interfaces de usuario, Automatización de interfaces de usuario, UI, Diseño de la interfaz de usuario, Diseño de experiencia de usuario (UX).",
            state: "figma",
        },
        {
            id: 6,
            name: "Bases de GIT, GitHub",
            place: "Desafío Latam (2024)",
            info: "Terminal, Git, GitHub, GitHub Pages y Trabajo Colaborativo.",
            state: "git",
        },
        {
            id: 7,
            name: "Scrum Fundamentals Certified",
            place: "ScrumStudy(2024)",
            info: "Curso online que incluye examen de aprobación de 40 preguntas basadas en los conceptos claves sobre el marco Scrum, vistos en la Guía SBOK®",
            state: "scrum",
        },
        {
            id: 8,
            name: "DESARROLLO FRONT END REACT",
            place: "Desafío Latam (2024)",
            info: "Conocimientos adquiridos por el Bootcamp: React Hooks, Netifly, GitHub Pages, Tailwind CSS, JSON, HTML, CSS Flexbox, Git, Media Queries, VSCode, CSS, JavaScript, SCSS, Terminal, CSS Inline, Vite, React.js, CSS Grid, Context API, Bootstrap, GitHub y API REST",
            state: "react",
        },
    ];

    return <StudyContext.Provider value={{ studies }}>{children}</StudyContext.Provider>;
};

export default StudyProvider;
