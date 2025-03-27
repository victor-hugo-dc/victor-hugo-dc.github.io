import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import MainLayout from "../layouts/main";
import Loader from "../components/Loader";

const Loadable = (Component) => (props) => {
    return (
        <Suspense fallback={<Loader />}>
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
                { path: "404", element: <Page404 /> },
                { path: "*", element: <Navigate to="/404" replace /> },
            ],
        },
    ]);
}

const HomePage = Loadable(lazy(() => import("../pages/Home")));
const AboutPage = Loadable(lazy(() => import("../pages/About")));
const SkillsPage = Loadable(lazy(() => import("../pages/Skills")));
const UsesPage = Loadable(lazy(() => import("../pages/Uses")));
const Page404 = Loadable(lazy(() => import("../pages/404")));