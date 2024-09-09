import { createContext } from "react";
export const StackContext = createContext();

const StackProvider = ({ children }) => {
    //Array del stack actualizado
    //Se puede agregar o quitar tecnologías de la lista para que se muestren en la sección de stack en la página de inicio

    const stacks = [
        {
            id: 1,
            images: "./img/stack/stack img/1.webp",
            alt: "React js",
        },
        {
            id: 2,
            images: "./img/stack/stack img/2.webp",
            alt: "Next js",
        },
        {
            id: 3,
            images: "../img/stack/stack img/3.webp",
            alt: "TypeScript",
        },
        {
            id: 4,
            images: "../img/stack/stack img/4.webp",
            alt: "JavaScript",
        },
        {
            id: 5,
            images: "../img/stack/stack img/5.webp",
            alt: "Sass",
        },
        {
            id: 6,
            images: "../img/stack/stack img/6.webp",
            alt: "Tailwind css",
        },
        {
            id: 7,
            images: "../img/stack/stack img/7.webp",
            alt: "Git",
        },
        {
            id: 8,
            images: "../img/stack/stack img/8.webp",
            alt: "GitHub",
        },
        {
            id: 18,
            images: "../img/stack/stack img/18.webp",
            alt: "Firebase",
        },
        {
            id: 9,
            images: "../img/stack/stack img/9.webp",
            alt: "Css",
        },
        {
            id: 10,
            images: "../img/stack/stack img/10.webp",
            alt: "Html",
        },
        // {
        //     id: 11,
        //     images: "../img/stack/stack img/11.webp",
        //     alt: "Storybook",
        // },
        {
            id: 12,
            images: "../img/stack/stack img/12.webp",
            alt: "Bootstrap",
        },

        {
            id: 13,
            images: "../img/stack/stack img/13.webp",
            alt: "Figma",
        },
        {
            id: 14,
            images: "../img/stack/stack img/14.webp",
            alt: "Ps",
        },
        {
            id: 15,
            images: "../img/stack/stack img/15.webp",
            alt: "Trello",
        },
        {
            id: 16,
            images: "../img/stack/stack img/16.webp",
            alt: "Miro",
        },
        {
            id: 17,
            images: "../img/stack/stack img/17.webp",
            alt: "Jira",
        },
    ];

    return <StackContext.Provider value={{ stacks }}>{children}</StackContext.Provider>;
};

export default StackProvider;
