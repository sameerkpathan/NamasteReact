import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./Component/Header";
import Body from "./Component/Body";
import Footer from "./Component/Footer";
import About from "./Component/About";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./Component/Contact";
import ErrorPage from "./Component/ErrorPage";
import RestoMenu from "./Component/RestoMenu";

const AppLayout = () => {
  return (
    <div>
      <Header />

      {/* in below this outlet component will replace the component as per the routes if routes is /about so about page will come here*/}
      <Outlet />
      <Footer />
    </div>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resID",
        element: <RestoMenu />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

//Render the all the data on webpage

const root = ReactDOM.createRoot(document.getElementById("main"));

root.render(<RouterProvider router={AppRouter} />);
