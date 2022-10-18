import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import CategoryNews from "../Pages/CategoryData/CategoryNews";
import Home from "../Pages/Home/Home";

export const router= createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/category/:id',
                element:<CategoryNews/>
            }
        ]
    }
])