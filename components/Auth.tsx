import {useNavigate} from "react-router";

export default function Auth() {
    const navigate = useNavigate();


const handleAuthentication = () => {
    navigate("/account", { state: {sessionID: 8418}});
}

return (
    <>
    <h1>Welcome to the Authentication page!</h1>
        <button onClick={handleAuthentication}></button>
    </>
)

}