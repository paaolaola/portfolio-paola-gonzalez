import { createContext } from "react";
export const HobbieContext = createContext();

const HobbieProvider = ({ children }) => {
    //Array de hobbies
    //Se puede agregar o quitar hobbies de la lista para que se muestren en la sección de hobbies en la página de inicio
    const hobbies = [
        {
            id: 1,
            image: "./img/fotos-hobbies/fotomontaje-1.jpg",
            alt: "fotomontaje-1",
            title: "Serie de Luz",
            description: "Fotomontajes",
        },
        {
            id: 2,
            image: "./img/fotos-hobbies/fotomontaje-2.jpg",
            alt: "fotomontaje-2",
            title: "Serie de Luz",
            description: "Fotomontajes",
        },
        {
            id: 3,
            image: "./img/fotos-hobbies/fotomontaje-3.jpg",
            alt: "fotomontaje-3",
            title: "Serie de Luz",
            description: "Fotomontajes",
        },
        {
            id: 4,
            image: "./img/fotos-hobbies/fotomontaje-4.jpg",
            alt: "fotomontaje-4",
            title: "Serie de Luz",
            description: "Fotomontajes",
        },
    ];

    return <HobbieContext.Provider value={{ hobbies }}>{children}</HobbieContext.Provider>;
};
export default HobbieProvider;
