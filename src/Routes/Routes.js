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
                loader:() =>fetch('http://localhost:5000/news'),
                element:<Home/>
            },
            {
                path:'/category/:id',
                loader: ({params})=>fetch(`http://localhost:5000/category/${params.id}`),
                element:<CategoryNews/>
            },

        ]
    }
])