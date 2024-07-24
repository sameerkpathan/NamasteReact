import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    console.log("child constructor");
  }

  componentDidMount(){
    console.log("child mount")
  }
  
  render() {
    const { name, location } = this.props;
    const { count } = this.state;

    console.log("child render")
    return (
      <div className="user-card">
        <h2>Name : {name} Class</h2>
        <p>Count is : {this.state.count}</p>
        <button
          onClick={() => {
            {
              /* Never Ever Update Count Variable Directly  */
            }
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          {" "}
          Count Increment
        </button>
        <h3>Location : {location} </h3>
        <h4>Contact : _sameer_pathan_</h4>
      </div>
    );
  }
}

export default UserClass;
