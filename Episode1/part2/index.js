const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Welcome React part 2"
  );
  //React.createElement() ==> At the end  of the day  this is an object and all the id,content is props of that object then render convert it in to HTML element which browser will understand
  
  console.log(heading);
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  //root.render(heading); //this render method is responsible for create a h1 tag and put it into dom
  
  /* In React we follow nested structure to create web page so like this we create
    <div>
        <div>
          <h1> Welcome </h1>
        </div>
     </div> 
  */
  // const Parent = React.createElement(
  //   "div",
  //   { id: "parent" },
  //   React.createElement(
  //     "div",
  //     { id: "child" },
  //     React.createElement("h1", {}, "I am h1 tag")
  //   )
  // );
  // console.log(Parent)
  
  // root.render(Parent);
  
  
  // if we want multiple tag in one div so we can make an array and put this as a array of children like this
  
  const nestedparent = React.createElement(
    "div",
    { id: "parent" },
    [
      
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "This is h1 tag"),
      React.createElement("h2", {}, "This is h2 tag"),
    ]),
    
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "This is h1 tag"),
      React.createElement("h2", {}, "This is h2 tag"),
    ])
    ]
  );
  
  const Parents = React.createElement("div",{id:"main"},
  [
    React.createElement("div",{},
    [
      React.createElement("h1",{},"This is h1"),
      React.createElement("h2",{},"This is h2")
    ]
   ),
   React.createElement("div",{},
   [
      React.createElement("h1",{},"this is h1 sub tag"),
      React.createElement("h2",{},"this is h2 subtag")
   ])
  
  ])
  
  root.render(Parents);