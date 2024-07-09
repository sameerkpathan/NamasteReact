import React from "react";
import ReactDOM from "react-dom/client";


const FoodApp = ()=>{
    return(
        <div>
            <h1>Food App</h1>
        </div>
    )
};



//Render the all the data on webpage 

const root = ReactDOM.createRoot(document.getElementById("main"));

root.render(<FoodApp/>);