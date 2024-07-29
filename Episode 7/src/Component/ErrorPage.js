import { useRouteError } from "react-router-dom";

const ErrorPage = ()=>{
    //Basically react router dom provides a verious hook 
    //so useRouteError gives us a details about error like which type of error this was like 304,404,or 500 to the user
   
   const err=  useRouteError();
   console.log(err)

    return(
        <div>
            <h2>Opps </h2>
            
            <h2>something went wrong</h2>
            <h2>{err.status} {err.statusText}</h2>
        </div>
    )
};

export default ErrorPage;