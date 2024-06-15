import { createContext } from "react";
export const StackContext = createContext();

const StackProvider = ({ children }) => {
    //Array del stack actualizado
    //Se puede agregar o quitar tecnologías de la lista para que se muestren en la sección de stack en la página de inicio

    const stacks = [
        {
            id: 1,
            images: "./img/stack/stack img/1.png",
            alt: "React js",
        },
        {
            id: 2,
            images: "./img/stack/stack img/2.png",
            alt: "Next js",
        },
        {
            id: 3,
            images: "../img/stack/stack img/3.png",
            alt: "TypeScript",
        },
        {
            id: 4,
            images: "../img/stack/stack img/4.png",
            alt: "JavaScript",
        },
        {
            id: 5,
            images: "../img/stack/stack img/5.png",
            alt: "Sass",
        },
        {
            id: 6,
            images: "../img/stack/stack img/6.png",
            alt: "Tailwind css",
        },
        {
            id: 7,
            images: "../img/stack/stack img/7.png",
            alt: "Git",
        },
        {
            id: 8,
            images: "../img/stack/stack img/8.png",
            alt: "GitHub",
        },
        {
            id: 9,
            images: "../img/stack/stack img/9.png",
            alt: "Css",
        },
        {
            id: 10,
            images: "../img/stack/stack img/10.png",
            alt: "Html",
        },
        {
            id: 11,
            images: "../img/stack/stack img/11.png",
            alt: "Bootstrap",
        },
        {
            id: 12,
            images: "../img/stack/stack img/12.png",
            alt: "Figma",
        },
    ];

    return <StackContext.Provider value={{ stacks }}>{children}</StackContext.Provider>;
};

export default StackProvider;
