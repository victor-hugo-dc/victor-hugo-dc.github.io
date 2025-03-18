import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layouts/main";

const Loadable = (Component) => (props) => {
    return (
        <Suspense fallback={<></>}>
            <Component {...props} />
        </Suspense>
    );
};

export default function Router() {
    return useRoutes([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                { path: "", element: <HomePage /> },
                { path: "about", element: <AboutPage /> },
                { path: "skills", element: <SkillsPage /> },
                { path: "uses", element: <UsesPage /> },
            ],
        },
    ]);
}

const HomePage = Loadable(lazy(() => import("../pages/Home")));
const AboutPage = Loadable(lazy(() => import("../pages/About")));
const SkillsPage = Loadable(lazy(() => import("../pages/Skills")));
const UsesPage = Loadable(lazy(() => import("../pages/Uses")));