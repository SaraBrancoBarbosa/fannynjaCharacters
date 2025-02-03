import { useEffect, useState } from "react"

const useFetchCharacters = () => {
    
    const [charactersList, setCharactersList] = useState(null)
    const [loading, setLoading] = useState(false)
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        
        // Async func inside useEffect
        const loadCharacters = async() => {
            setTimeout(() => {
                fetch("data/characters.json")
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    

                    setCharactersList(data.charactersList)
                    setLoaded(true)
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
        loadCharacters()

    }, [])

    return {
        charactersList,
        loading,
        loaded,
        error
    }
}

export default useFetchCharacters