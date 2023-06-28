import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();

    return(
        <div>
            <h1>OPPS !!!!!!</h1>
            <h2>Please retry</h2>
            <h3>{err.status}: {err.statusText}</h3>
        </div>
    );

}

export default Error;