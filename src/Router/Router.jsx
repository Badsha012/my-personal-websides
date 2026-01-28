import { createBrowserRouter } from "react-router";
import Root from "../RootLayout/Root";
import Contact from "../Page/Contact";
import About from "../Page/About";
import Skills from "../Page/Skill";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    hydrateFallbackElement: <p>Loading...</p>,
    children:[
        {
            index:true,
            element:<h1>home</h1>
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