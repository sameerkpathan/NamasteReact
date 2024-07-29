import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./Component/Header";
import Body from "./Component/Body";
import Footer from "./Component/Footer";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

//Render the all the data on webpage

const root = ReactDOM.createRoot(document.getElementById("main"));

root.render(<AppLayout />);
