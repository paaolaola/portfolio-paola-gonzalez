import { createContext } from "react";
export const HobbieContext = createContext();

const HobbieProvider = ({ children }) => {
    //Array de hobbies
    //Se puede agregar o quitar hobbies de la lista para que se muestren en la sección de hobbies en la página de inicio
    const hobbies = {
        id: 1,
        image: "./img/fotos-hobbies/fotomontaje-3.jpg",
        alt: "fotomontaje",
    };

    return <HobbieContext.Provider value={{ hobbies }}>{children}</HobbieContext.Provider>;
};
export default HobbieProvider;
