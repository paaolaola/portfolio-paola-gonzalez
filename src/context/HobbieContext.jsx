import { createContext } from "react";
export const HobbieContext = createContext();

const HobbieProvider = ({ children }) => {
    //Objeto de la imagen de hobbies
    const hobbies = {
        id: 1,
        image: "./img/fotos-hobbies/fotomontaje-3.jpg",
        alt: "fotomontaje",
    };

    return <HobbieContext.Provider value={{ hobbies }}>{children}</HobbieContext.Provider>;
};
export default HobbieProvider;
