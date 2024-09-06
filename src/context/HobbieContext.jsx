import { createContext } from 'react';
export const HobbieContext = createContext();

const HobbieProvider = ({ children }) => {
    //Objetos de las imagenes de hobbies
    const hobbies = [
        {
            id: 1,
            image: './img/fotos-hobbies/fotomontaje.webp',
            alt: 'fotomontaje',
        },
        {
            id: 2,
            image: './img/fotos-hobbies/retrato.webp',
            alt: 'photo me',
        },
    ];
    return <HobbieContext.Provider value={{ hobbies }}>{children}</HobbieContext.Provider>;
};
export default HobbieProvider;
