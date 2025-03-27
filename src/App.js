import { useState } from "react";
import MainLayout from "./layouts/main";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import SkillsPage from "./pages/Skills";
import UsesPage from "./pages/Uses";
import Page404 from "./pages/404";

function App() {
    const [currentPage, setCurrentPage] = useState("home");

    const renderPage = () => {
        switch (currentPage) {
            case "home":
                return <HomePage />;
            case "about":
                return <AboutPage />;
            case "skills":
                return <SkillsPage />;
            case "uses":
                return <UsesPage />;
            default:
                return <Page404 />;
        }
    };

    return (
        <MainLayout currentPage={renderPage()} setCurrentPage={setCurrentPage} />
    );
}

export default App;
