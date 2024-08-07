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
            alt: "Storybook",
        },
        {
            id: 12,
            images: "../img/stack/stack img/12.png",
            alt: "Bootstrap",
        },

        {
            id: 13,
            images: "../img/stack/stack img/13.png",
            alt: "Figma",
        },
        {
            id: 14,
            images: "../img/stack/stack img/14.png",
            alt: "Ps",
        },
        {
            id: 15,
            images: "../img/stack/stack img/15.png",
            alt: "Trello",
        },
        {
            id: 16,
            images: "../img/stack/stack img/16.png",
            alt: "Miro",
        },
        {
            id: 17,
            images: "../img/stack/stack img/17.png",
            alt: "Jira",
        },
    ];

    return <StackContext.Provider value={{ stacks }}>{children}</StackContext.Provider>;
};

export default StackProvider;
