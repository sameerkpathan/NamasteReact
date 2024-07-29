import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import Header from "./Component/Header";
import Body from "./Component/Body";
import Footer from "./Component/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
// import About from "./Component/About";
import Errorpage from "./Component/Errorpage";
import Contact from "./Component/Contact";
import RestoMenu from "./Component/RestoMenu";
import ShimmerUi from "./Component/ShimmerUi";
// import Grocery from "./Component/Grocery";

{
  /*
  chunking
  code spliting
  dynamic bundling
  lazy loading
  on demand loading
  dynamic import 
  all are the same thing Basically what they are trying to make code splitting and make break down app in small  chunking 
  */
}

const Grocery = lazy(() => import("./Component/Grocery"));

const About = lazy(() => import("./Component/About"));

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<ShimmerUi />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resID",
        element: <RestoMenu />,
      },
    ],
    errorElement: <Errorpage />,
  },
]);

//Render the all the data on webpage

const root = ReactDOM.createRoot(document.getElementById("main"));

root.render(
  <RouterProvider router={router}>
    <AppLayout />
  </RouterProvider>
);
