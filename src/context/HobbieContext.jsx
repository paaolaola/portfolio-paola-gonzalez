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
        },
        {
            id: 2,
            image: "./img/fotos-hobbies/fotomontaje-2.jpg",
            alt: "fotomontaje-2",
        },
        {
            id: 3,
            image: "./img/fotos-hobbies/fotomontaje-3.jpg",
            alt: "fotomontaje-3",
        },
        {
            id: 4,
            image: "./img/fotos-hobbies/fotomontaje-4.jpg",
            alt: "fotomontaje-4",
        },
    ];

    return <HobbieContext.Provider value={{ hobbies }}>{children}</HobbieContext.Provider>;
};
export default HobbieProvider;
