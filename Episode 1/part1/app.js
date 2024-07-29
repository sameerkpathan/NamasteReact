const heading = React.createElement(
    "h1",
    { id: "header" },
    "Welcome from react"
  );
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  {
    /* <div>
      <div>
          <h1></h1>
      </div>
  </div> */
  }
  
  const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
      "div",
      { id: "child" },
      React.createElement("h1", { id: "head" }, "Inside child div")
    )
  );
  
  // root.render(heading);
  root.render(parent);
  