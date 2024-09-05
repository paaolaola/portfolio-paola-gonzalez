import { createContext } from "react";
export const CertContext = createContext();

const CertProvider = ({ children }) => {
    //Array de certificaciones actualizado
    //Se puede agregar o quitar certificaciones de la lista para que se muestren en la sección de certificaciones
    const certs = [
        {
            id: 0,
            image: "./img/certificaciones/certificacion-10.webp",
            alt: "No Country",
            url: "",
        },
        {
            id: 1,
            image: "./img/certificaciones/certificacion-9.webp",
            alt: "No Country",
            url: "",
        },
        {
            id: 2,
            image: "./img/certificaciones/certificacion-8.webp",
            alt: "Coderhouse",
            url: "https://www.coderhouse.com/cl/certificados/661e3bf2b4649e3736fda015?lang=es",
        },
        {
            id: 3,
            image: "./img/certificaciones/certificacion-7.webp",
            alt: "FreeCodeCamp",
            url: "https://www.freecodecamp.org/certification/paaolaola/responsive-web-design",
        },
        {
            id: 4,
            image: "./img/certificaciones/certificacion-6.webp",
            alt: "Udemy",
            url: "https://www.udemy.com/certificate/UC-11fd511e-48fd-44b8-9863-bcfd8f6d3c8e",
        },
        {
            id: 5,
            image: "./img/certificaciones/certificacion-2.webp",
            alt: "SCRUM",
            url: "https://www.scrumstudy.com/certification/verify?type=SFC&number=1014775",
        },
        {
            id: 6,
            image: "./img/certificaciones/certificacion-5.webp",
            alt: "Certificado ADL",
            url: "https://cursos.desafiolatam.com/certificates/0jsrdhqq4s",
        },
        {
            id: 7,
            image: "./img/certificaciones/certificacion-3.webp",
            alt: "Certificado ADL",
            url: "https://cursos.desafiolatam.com/certificates/u4vd8ght4o",
        },
        {
            id: 8,
            image: "./img/certificaciones/certificacion-4.webp",
            alt: "Certificado ADL",
            url: "",
        },
        {
            id: 9,
            image: "./img/certificaciones/certificacion-1.webp",
            alt: "Certificado ADL",
            url: "https://desafiosdev.s3.amazonaws.com/uploads/certification/image/28186/certificacion-aprobacion-de-carrera-nuevo-proyecto-final-g10-14400.png",
        },
        {
            id: 10,
            image: "./img/certificaciones/react II.webp",
            alt: "Certificado ADL",
            url: "https://desafiosdev.s3.amazonaws.com/uploads/certification/image/27436/aprobacion-modulos-cursos-b-learning-react-ii-g10-14400.png",
        },
        {
            id: 11,
            image: "./img/certificaciones/react I.webp",
            alt: "Certificado ADL",
            url: "https://desafiosdev.s3.amazonaws.com/uploads/certification/image/26512/aprobacion-modulos-cursos-b-learning-react-i-g10-14400.png",
        },
        {
            id: 12,
            image: "./img/certificaciones/javascript.webp",
            alt: "Certificado ADL",
            url: "https://desafiosdev.s3.amazonaws.com/uploads/certification/image/25655/aprobacion-modulos-cursos-b-learning-javascript-para-la-web-g10-14400.png",
        },
        {
            id: 13,
            image: "./img/certificaciones/css.webp",
            alt: "Certificado ADL",
            url: "https://desafiosdev.s3.amazonaws.com/uploads/certification/image/24192/aprobacion-modulos-cursos-b-learning-css-avanzado-g10-14400.png",
        },
        {
            id: 14,
            image: "./img/certificaciones/html.webp",
            alt: "Certificado ADL",
            url: "https://desafiosdev.s3.amazonaws.com/uploads/certification/image/23547/aprobacion-modulos-cursos-b-learning-introduccion-al-desarrollo-web-g10-14400.png",
        },
    ];

    return <CertContext.Provider value={{ certs }}>{children}</CertContext.Provider>;
};

export default CertProvider;
