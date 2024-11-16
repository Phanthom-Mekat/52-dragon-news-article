import { createBrowserRouter, Navigate } from "react-router-dom";
import Mainlayout from "../layouts/Mainlayout";
import CategoriesNews from "../pages/CategoriesNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout/>,
        children:[
            {
                path:"",
                element:<Navigate to={'/category/01'}/>
            },
            {
                path:"/category/:id",
                element:<CategoriesNews/>,
                loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path: "auth",
        element: <AuthLayout/>,
        children: [
            {
                path: "/auth/login",
                element: <Login/>
            },
            {
                path: "/auth/register",
                element:<Register/>
            }
        ]
    },
    {
        path: "/contact",
        element: <h1>Contact</h1>,
    },
    {
        path:"*",
        element:<h1>404</h1>
    }
]);

export default router;