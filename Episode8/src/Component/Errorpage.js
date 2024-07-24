import { useRouteError } from "react-router-dom";

const Errorpage = ()=>{
    const Errorroute =useRouteError();
    console.log(Errorroute)
    return(
        <div>
            <h1>Error page</h1>
            <p>{Errorroute.status} and {Errorroute.statusText}</p>
        </div>
    )
};

export default Errorpage