import { createBrowserRouter } from "react-router";
import Root from "../RootLayout/Root";
import Contact from "../Page/Contact";
import About from "../Page/About";
import Skills from "../Page/Skill";
import Home from "../Page/Home";
import Education from "../Page/Education";
import Project from "../Page/Project";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    hydrateFallbackElement: <p>Loading...</p>,
    children:[
        {
            index:true,
            element:<Home></Home>
        },
        {
            path:"/contact",
            element:<Contact></Contact>

        },
        {
            path:"/about",
            element:<About></About>
        },
        {
            path:"/skill",
            element:<Skills></Skills>

        },
        {
            path:"/education",
            element:<Education></Education>
        },
        {
            path:"/project",
            element:<Project></Project>
        }

    ]

    
  },
]);

export default router;