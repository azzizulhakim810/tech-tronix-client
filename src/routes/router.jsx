import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import BrandBasedProducts from "../pages/BrandBasedProducts/BrandBasedProducts";
import SingleProductDetails from "../pages/SingleProductDetails/SingleProductDetails";
import UpdateProduct from "../components/UpdateProduct/UpdateProduct";


export const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/addProduct',
        element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path:'/allProducts/:brandName',
        element:<PrivateRoute><BrandBasedProducts></BrandBasedProducts></PrivateRoute>,
        loader: ({params}) => fetch(`https://tech-tronix-server-de42tnfa0-ah-jims-projects.vercel.app/products/${params.brandName}`)
      },
      {
        path:'/singleProduct/:id',
        element:<PrivateRoute><SingleProductDetails></SingleProductDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://tech-tronix-server-de42tnfa0-ah-jims-projects.vercel.app/products/single/${params.id}`)
      },
      {
        path:'/update/:id',
        element:<UpdateProduct></UpdateProduct>,
        loader: ({params}) => fetch(`https://tech-tronix-server-de42tnfa0-ah-jims-projects.vercel.app/products/update/${params.id}`)
      },
      {
        path:'/myCart',
        element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: () => fetch ('https://tech-tronix-server-de42tnfa0-ah-jims-projects.vercel.app/user')
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
    ]
  }
])