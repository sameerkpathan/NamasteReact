import React from "react";
import ReactDOM from 'react-dom/client'

const heading = React.createElement("h2",{},"Welcome Back Champ");


const root = ReactDOM.createRoot(document.getElementById("main"));

root.render(heading);