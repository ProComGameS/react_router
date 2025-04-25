import { Link } from "react-router";

function Header() {

    return (

        <>
        <div>
            <li>
            <Link to={'/'}>Home</Link>
            </li>

            <li>
                <Link to={'/about'}>About</Link>
            </li>


            <li>
                <Link to={'/contacts'}>Contacts</Link>
            </li>

        </div>
        </>
    )
}

export default Header;
