import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement("add the tag name",{add here id,class,props},"content" or ["content"]) = At the End this is an object == HTML Element

//so below code is a core React code and it is good for only one element but if you added more than one element then it goes messey

//React.createElement() == ReactElement - JS Object == HTMLElementRender

const heading = React.createElement(
  "h1",
  { id: "title" },
  "This is H1 Tag created using JSX"
);

//Due to this Code complexity devloper in facebook created JSX(Javascript xml)
//so JSX is not a html inside js
//JSX is HTML like syntax or xml Like syntax

// JSX ==>babel transpile in to ==> React.createElement() ==> ReactElement - JS Object ==> HTMLElementRender

const jsxheading = <h1>Welcome in JSX world</h1>;

// console.log(heading);
console.log(jsxheading);

//React Functional Component
//A function which return a react element is called function component

const FunctionComp = function () {
  return (
    <div>
      <h1>Using Normal Function </h1>
    </div>
  );
};

const HeadingFun = () => {
  return (
    <div id="mainheading">
      <h1>Namaste React Function</h1>
    </div>
  );
};

const elm = <span>Element</span>;

const mainelm = <h1>react element and sub {elm}</h1>;

const number = 1000;

const Title = () => {
  return (
    <div>
      <FunctionComp />
      {number} and {mainelm}
      <h1>Title </h1>
      <HeadingFun></HeadingFun>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("main"));

//so below render function can be replaced whatever you written in main div file and render react Element
// root.render(jsxheading);
root.render(<Title />);
