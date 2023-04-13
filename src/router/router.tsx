import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Index from "../pages/index/index";
// import Root, { rootLoader } from "./routes/root";
// import Team, { teamLoader } from "./routes/team";

const router = createBrowserRouter([
    {
        path: "/Aboutme/",
        element: <Index />,
        // loader: rootLoader,
        // children: [
        //     {
        //         path: "team",
        //         element: <Team />,
        //         loader: teamLoader,
        //     },
        // ],
    },
]);
export default function Router(){
    return <RouterProvider router={router} />
}