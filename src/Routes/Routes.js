import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Primary from "../layout/Primary";
import CategoryNews from "../Pages/CategoryData/CategoryNews";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Home/Register/Register";
import Login from "../Pages/Login/Login";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import PrivateRoutes from "./PrivateRoutes";

export const router= createBrowserRouter([
    {
       path:'/',
       element:<Primary/>,
       children:[
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
                {
                    path:'/news/:id',
                    loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`),
                    element:<PrivateRoutes><NewsDetails/></PrivateRoutes>
                }
            ]
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/register',
            element:<Register/>
        }
       ]
    }
])