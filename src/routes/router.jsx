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
        element:<BrandBasedProducts></BrandBasedProducts>,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.brandName}`)
      },
      {
        path:'/singleProduct/:id',
        element:<SingleProductDetails></SingleProductDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/products/single/${params.id}`)
      },
      {
        path:'/myCart',
        element:<PrivateRoute><MyCart></MyCart></PrivateRoute>
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