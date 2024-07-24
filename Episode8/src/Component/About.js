import User from "./User";
import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    console.log("parent constructor");
  }

  componentDidMount(){
    console.log("parent component mount")
  }

  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About Us from class in class </h1>
        <UserClass name={"Sameer Pathan From Class"} location={"Barshi"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>ABout us</h1>
//       {/* <User name={"Sameer Pathan From Function"}/> */}
//       <About2/>
//       <UserClass name={"Sameer Pathan From Class"} location={"Barshi"} />

//     </div>
//   );
// };

export default About;
