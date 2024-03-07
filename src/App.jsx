import "./assets/css/App.css";
import Navbar from "./components/Navbar";
import Router from "./router/router.jsx";
import { BrowserRouter } from "react-router-dom";
import ProjectProvider from "./context/ProjectContext";

function App() {
    return (
        <>
            <ProjectProvider>
                <BrowserRouter>
                    <Navbar />
                    <Router />
                </BrowserRouter>
            </ProjectProvider>
        </>
    );
}

export default App;
