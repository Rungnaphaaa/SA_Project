import { RouteObject } from "react-router-dom";
import Home from "../pages/Home/Home";
import MinimalLayout from "../layout/MinimalLayOut/MinimalLayOut";
import ProductList from "../pages/ProductMangement/ProductList";
import ProductEdit from "../pages/ProductMangement/edit/ProductEdit";
import ProductCreate from "../pages/ProductMangement/create/ProductCreate";
import LoginForOwner from "../pages/Authentication/Login/LoginForOwner";

const OwnerRoutes = (): RouteObject => {
 
    return {

        path: "/",

        element: <MinimalLayout/>,

        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/Login-Owner",
                element: <LoginForOwner/>,
            },
            {
                path: "/ProductManagement",
                element: <ProductList />
            },
            {
                path: "/Product/Edit/:id",
                element: <ProductEdit />
            },
            {
                path: "/Product/Create",
                element: <ProductCreate/>
            },
            {
                path: "*",
                element: <Home />,
            },
        ],

    };

};


export default OwnerRoutes;
