import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      githubapidata: {
        name: "dummy",
        location: "default",
      },
      count: 0,
    };
  }

  async componentDidMount() {
    const getdata = await fetch("https://api.github.com/users/sameerkpathan");
    const json = await getdata.json();
    this.setState({
      githubapidata: json,
    });
    console.log(json);
  }

  componentDidUpdate(prevprops, perstate) {
    // Befor people are sing this syntax and because of this useeffect dependancy array will come in picture
    if (
      this.state.count == !perstate.count ||
      this.state.count == !perstate.count
    ) {
      //code
    }

    this.timer = setInterval(() => {
      console.log("print");
    }, 1000);
    console.log("component did update call");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { name, avatar_url } = this.state.githubapidata;

    // console.log( this.props.name + "child render")
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name : {name}</h2>
        <h3>Location : Barshi</h3>
        <h4>Contact : _sameer_pathan_</h4>
      </div>
    );
  }
}

{
  /*
   so when API call hen how the Life cycle works

   1]Mounting Phase

    -constructor call
    -render call
    -then in this.state have defult value
    -then componentDidMount call

    2]Updateing phase 

    -once it can see this.state is there this will start
    -api call done get updated data in this.state not use local data now
    -and update the dom with new api data
    -call componentDidUpdate
  
  */
}

export default UserClass;
