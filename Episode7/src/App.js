import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./Component/Header";
import Body from "./Component/Body";
import Footer from "./Component/Footer";
import About from "./Component/About";


import { createBrowserRouter ,RouterProvider} from "react-router-dom";
import Contact from "./Component/Contact";
import ErrorPage from "./Component/ErrorPage";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const AppRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    errorElement:<ErrorPage/>
  },
  {
    path:"/about",
    element:<About />
  },
  {
    path:"/contact",
    element:<Contact />
  },
  
])

//Render the all the data on webpage

const root = ReactDOM.createRoot(document.getElementById("main"));

root.render(<RouterProvider router={AppRouter} />);
