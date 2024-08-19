import User from "./User";
import React from "react";
import UserClass from "./UserClass";
import UserContext from "../Utils/UserContext";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        {/* useContext */}
        <UserContext.Consumer >
         {(data)=><h1>{data.loggedInUser}</h1>}
        </UserContext.Consumer>
        <h1>About Us from class in class </h1>

        {/* <UserClass name={"Sameer Pathan From Class"} location={"Barshi"} /> */}
        {/* <UserClass name={"Elon Bhai From Class"} location={"USA"} /> */}

        <UserClass name={"Sameer Pathan From Class"} location={"Barshi"} />
      </div>
    );
  }
}

{
  /*
-so basically in react there are three main phases are there 1]Mounting 2]Updatig 3]Unmounting

lets talk on mounting:- 
-so every phases it has two stages are there one is render stage and commit stage

-so react will render the whole componenet first if child components are there react will make an batch and render first 

-then react comes in second phase is commit phase in which dom manaipulation api call will happen 
-in commit phase then react load an api through ComponentDidMount and get data and load on UI 
so this will be life cycle of class based react component

  */
}

{
  /*
  Based On this for above how life cycle work 

  --This three stages are render phase

  -parent constructor call
  -parent render call

    -sameer pathan child 1 constructor call 
    -sameer pathan child 1 render call

    -elon bhai child 2 constructor call
    -elon bhai child 2 render call

  -- This below stages are commit phases it runs after render complete for all components 

    -sameer pahan 1 ComponentDidMount call
    -elon bhai child 2 ComponentDidMount call

  -Parent ComponentDidMount call 
  
  
  */
}

export default About;
