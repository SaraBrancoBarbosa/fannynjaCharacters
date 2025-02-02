import { useNavigate } from "react-router"
import useFetchCharacters from "../../api/Api"
import { useEffect } from "react"
import Card from "../../components/card/Card"
import "./characters.css"
import ScrollToTop from "../../components/scrollToTop/ScrollToTop"

function Characters() {
  
  const navigate = useNavigate()
  const {error, loaded, loading, charactersList} = useFetchCharacters()
  
  // Error 500 management
  useEffect(() => {
    if (error) {
        navigate("/error/",{state:{code:500, message:error}})
    }
  }, [error, navigate])

  
  return (
    <div className="characters-container">

    <ScrollToTop />

      <h1>Les personnages</h1>

      {/* Loading message */}
      {loading && !error && (
        <div className="loading">Chargement des personnages
            <img src={`${import.meta.env.BASE_URL}/assets/icons/shuriken-icon.svg`} className="spinner"></img>
        </div>   
      )}

      {loaded && !loading && !error && (
          <div className="cards-container">
              { charactersList && charactersList.map((character) => (
                  <Card
                      key={character.id}
                      id={character.id}
                      name={character.name}
                      avatar={character.avatar}
                  />
              ))}
          </div>
      )}
    </div>
  )
}

export default Characters
