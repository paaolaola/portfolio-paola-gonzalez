import "./assets/styles/App.css";
import Navbar from "./components/Navbar";
import Router from "./router/router.jsx";
import { BrowserRouter } from "react-router-dom";
import ProjectProvider from "./context/ProjectContext";
import StackProvider from "./context/StackContext";
import CertProvider from "./context/CertContext";
import HobbieProvider from "./context/HobbieContext";
import StudyProvider from "./context/StudyContext";

function App() {
    return (
        //Se envuelven los componentes con los contextos para que puedan ser consumidos por los componentes hijos de la aplicación
        <>
            {" "}
            <StudyProvider>
                <HobbieProvider>
                    <CertProvider>
                        <StackProvider>
                            <ProjectProvider>
                                <BrowserRouter>
                                    <Navbar />
                                    <Router />
                                </BrowserRouter>
                            </ProjectProvider>
                        </StackProvider>
                    </CertProvider>
                </HobbieProvider>
            </StudyProvider>
        </>
    );
}

export default App;
