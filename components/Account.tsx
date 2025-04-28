import { useLocation } from "react-router";

export function Account () {

    const location = useLocation();
    console.log(location.state.sessionID);

    return (
        <>
        <p>Accounts page</p>
            <p>ID: {location.state.sessionID}</p>
        </>
    )

}