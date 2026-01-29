import { createBrowserRouter } from "react-router";
import Root from "../RootLayout/Root";
import Contact from "../Page/Contact";
import About from "../Page/About";
import Skills from "../Page/Skill";
import Home from "../Page/Home";

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

        }

    ]

    
  },
]);

export default router;