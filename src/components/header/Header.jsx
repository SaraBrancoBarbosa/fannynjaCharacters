import { Link, NavLink, useLocation } from "react-router-dom"
import "./header.css"

function Header() {

    // To underline the active NavLink depending of the current page
    const location = useLocation()
    
    return (
        <header className="header">
            <Link to="/">
                <img className="logo" src={`${import.meta.env.BASE_URL}assets/logo/logo.png`} alt="Logo du site. Le lien mène à la page d'accueil." />
            </Link>

            <nav>
                <NavLink to="/" className={location === "" ? "active" : ""}>Accueil</NavLink>
                <NavLink to="/characters" className={location === "" ? "active" : ""}>Personnages</NavLink>
            </nav>
        </header>
    )
}

export default Header



