import React from "react";

class UserClass extends React.Component{

    constructor(props){
         super(props);
         console.log(props);
    }

    render(){
        return (
            <div className="user-card">
            <p>Class Base Component</p>
            <h2>Name : {this.props.name}</h2>
            <h3>Location : Barshi (Maharashtra)</h3>
            <h4>Contact : _sameer_pathan_</h4>
        </div>
        )
    }
};

export default UserClass;