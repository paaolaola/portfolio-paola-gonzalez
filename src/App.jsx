
import Navbar from "./components/Navbar";
import Router from "./router/router.jsx";
import { BrowserRouter } from "react-router-dom";
import ProjectProvider from "./context/ProjectContext";
import StackProvider from "./context/StackContext";
import CertProvider from "./context/CertContext";
import HobbieProvider from "./context/HobbieContext";
import StudyProvider from "./context/StudyContext";
import "./styles/App.css";


function App() {



    return (
        //Envolviendo los componentes con los contextos para que puedan ser consumidos por los componentes hijos de la aplicación
        <>
        
                <ProjectProvider>
                    <StackProvider>
                        <CertProvider>
                            <HobbieProvider>
                                <StudyProvider>
                                    <BrowserRouter>
                                        <Navbar />
                                        <Router />
                                    </BrowserRouter>
                                </StudyProvider>
                            </HobbieProvider>
                        </CertProvider>
                    </StackProvider>
                </ProjectProvider>
          
        </>
    );
}

export default App;
