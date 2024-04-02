import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../MainLayout";
import Home from "../Pages/Home/Home";
import ListedBooks from "../Pages/ListedBooks/ListedBooks";
import Details from "../Pages/Details/Details";
import SingUp from "../Pages/SingUp";
import SingIn from "../Pages/SingIn";
// import PageRead from "../Pages/PagetoRead/PageRead";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        // by default Home
        {
         path:'/',
         element:<Home/>
        },
        // book details
        {
         path:'/Details/:id',
         element:<Details/>
        },
        // listed books
        {
          path:'/ListedBooks',
          element:<ListedBooks/>
        },
        {
          path:'/SingUp',
          element:<SingUp/>
        },
        {
          path:'/SingIn',
          element:<SingIn/>
        }
        
      ]
    },
  ]);

  export default router