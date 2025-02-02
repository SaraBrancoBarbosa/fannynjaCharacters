import { Link } from "react-router"
import "./homepage.css"

function Homepage() {
  return (
    <div className="main-container">
      
      <h1>Bienvenue !</h1>

      <h2>Ce site regroupe les informations sur les personnages de Fannynja.</h2>

      <div className="link-container">
        <img className="arrow-icon right" src={`${import.meta.env.BASE_URL}assets/icons/angles-right.svg`}></img>
        <Link to="/characters">Cliquez ici pour les découvrir...</Link>
        <img className="arrow-icon left" src={`${import.meta.env.BASE_URL}assets/icons/angles-left.svg`}></img>
      </div>

      <img className="img-cover" src={`${import.meta.env.BASE_URL}assets/Personnages-tailles.png`}></img>

    </div>
  )
}

export default Homepage
{`${import.meta.env.BASE_URL}assets/icons/angles-right.svg`}