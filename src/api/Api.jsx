import { useEffect, useState } from "react"

const useFetchCharacters = () => {
    
    const [charactersList, setCharactersList] = useState(null)
    const [loading, setLoading] = useState(false)
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        
        // Async func inside useEffect
        const loadRentals = async() => {
            setTimeout(() => {
                fetch(`${import.meta.env.BASE_URL}/data/characters.json`)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    const updatedCharacters = data.charactersList.map(character => ({
                        ...character,
                        avatar: `${import.meta.env.BASE_URL}${character.avatar}`,  // Ajouter le base URL
                        cover: `${import.meta.env.BASE_URL}${character.cover}`,    // Ajouter le base URL
                    }));

                    setCharactersList(updatedCharacters);
                    setLoaded(true);
                })
                .catch((error) => {
                    console.log(error)
                    setError("Oh non une erreur !")
                })
                .finally(() => {
                    setLoading(false)
                })
            // Loading simulation    
            }, 1000)
        } 

        setError(null)
        setLoaded(false)
        setLoading(true)
        loadRentals()

    }, [])

    return {
        charactersList,
        loading,
        loaded,
        error
    }
}

export default useFetchCharacters