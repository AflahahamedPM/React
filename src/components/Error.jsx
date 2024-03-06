import { useRouteError } from "react-router-dom";

const Error = () =>{
    const err = useRouteError();
    return(
        <div className="">
            <h1>Ooops!!!</h1>
            <h2>something went wrong</h2>
            <h2>{err.status}:{err.statusText}</h2>
        </div>
    )
}

export default Error