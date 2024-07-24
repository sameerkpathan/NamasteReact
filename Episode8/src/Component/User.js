
const User = (props)=>{
    const {name} = props
    return(
        <div className="user-card">
            <h2>Name : {name}</h2>
            <h3>Location : Barshi (Maharashtra) </h3>
            <h4>Contact : _sameer_pathan_</h4>
        </div>
    )
};

export default User