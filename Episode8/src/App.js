import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./Component/Header";
import Body from "./Component/Body";
import Footer from "./Component/Footer";
import {Outlet, RouterProvider, createBrowserRouter} from 'react-router-dom'
import About from "./Component/About";
import Errorpage from "./Component/Errorpage";
import Contact from "./Component/Contact";
import RestoMenu from "./Component/RestoMenu";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet/>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restaurants/:resID",
        element:<RestoMenu/>
      }
    ],
    errorElement:<Errorpage/>
  },
  
 
])
 

//Render the all the data on webpage

const root = ReactDOM.createRoot(document.getElementById("main"));

root.render(<RouterProvider router={router}><AppLayout /></RouterProvider>);
