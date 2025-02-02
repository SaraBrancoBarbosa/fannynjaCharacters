import { useNavigate, useParams } from "react-router"
import "./profile.css"
import useFetchCharacters from "../../api/Api"
import { useEffect, useState } from "react"
import Carousel from "../../components/carousel/Carousel"
import ScrollToTop from "../../components/scrollToTop/ScrollToTop"

function Profile() {

    const navigate = useNavigate()
    const {error, loaded, loading, charactersList} = useFetchCharacters()
    const {id} = useParams()
    const [profile, setProfile] = useState(null)

    // Each character has its color
    const colorMapping = {
        zatsu: "#FF0000",
        kaju: "#5B9BD5",
        nodoka:"#009999",
        asuka:"#AAAD27",
        makoto:"#44546A",
        will:"#70AD47",
        yuji:"#800080",
        yova:"#CC0099",
        chizuru:"#C40000",
        sam:"#FFC000",
        enzo:"#A24816",
        mathis:"#980606",
        shimizu:"#4472C4",
        ayake:"#1E3FE2",
        ayako:"#BFBEBE",
        ayaka:"#F3298E",
        myoke:"#699785",
        shiobo:"#ECE218",
    }

    // Error 500 management
    useEffect(() => {
        if (error) {
        navigate("/error/",{state:{code:500, message:error}})
        }
    }, [error, navigate])

    // To find the id and manage the 404 error + loaded system
    useEffect(() => {
        if (id && loaded && charactersList) {
        const profile = charactersList.find(item => item.id === id)
        if (!profile) {
            navigate("/error/",{state:{code:404, message:"Profile not found"}})
        } else {
            setProfile(profile)
        }
        }
    }, [loaded, charactersList, id, navigate])

    // Loading message
    if (loading || !profile) {
        return (
        <div className="loading">
            Chargement des informations
            <img src={`${import.meta.env.BASE_URL}/assets/icons/shuriken-icon.svg`} className="spinner"></img>
        </div>
        )
    }

  // Using the characters' colors once the id are found
    const headingColor = colorMapping[profile.id] || "black"

    // Story section: managing and displaying the different parts
    const displayStoryPart = (subtitle, part) => {
        if (!part) return null
        return (
            <div>
                <h4>{subtitle} :</h4>
                {part.split("\n").map((text, index) => (
                    <p key={index}>{text}<br /></p>
                ))}
            </div>
        )
    }

    // Managing the biggest sections
    const sections = [
        { label: "Nature du chakra, techniques", value: profile.chakra },
        { label: "Personnalité", value: profile.personnality },
        { label: "Apparence", value: profile.apparence },
        { label: "Histoire",
            value: (profile.story.part1 || profile.story.part2 || profile.story.newera) ? (
                <div className="story-container">
                    {displayStoryPart("Partie I", profile.story.part1)}
                    {displayStoryPart("Partie II", profile.story.part2)}
                    {displayStoryPart("La nouvelle ère", profile.story.newera)}
                </div>
            ) : null
        },
        { 
            label: "Anecdotes", 
            value: profile.anecdotes && profile.anecdotes.length > 0 ? (
                <div className="tags">
                    {profile.anecdotes.map((anecdote, index) => (
                        <span className="tag" key={`anecdote-${index}`}>{anecdote}</span>
                    ))}
                </div>
            ) : null 
        }
    ]

    // To display only the sections with texts
    const validSections = sections.filter(section => section.value)

    return (
        <div className="container">
            
            <ScrollToTop />

            <h1>{profile.name}</h1>
            <img src={profile.cover} className="cover-img" alt="Image de couverture du personnage" /> 

            <div className="text-content-container">

                <div className="short-info">
                    {[
                        { label: "Âge", value: profile.age },
                        { label: "Date de naissance", value: profile.birthdate },
                        { label: "Taille/poids", value: profile.height },
                        { label: "Rang", value: profile.rank },
                        { label: "Promotion genin/chûnin/jônin", value: profile.promotion },
                        { label: "Affiliation", value: profile.affiliation },
                        { label: "Équipe", value: profile.team },
                        { label: "Armes", value: profile.weapons },
                    ].map((item, index) => (
                        <div className="text-content" key={index}>
                            <h3 style={{ color: headingColor }}>{item.label} :&nbsp;</h3>
                            <p className="short-info-p">{item.value}</p>
                        </div>
                    ))}
                </div>

                {/* To display only the sections with texts */}
                {validSections.map((section, index) => (
                    <div className="bloc-container" key={index}>
                        
                        <div className="text-content">
                            <h3 style={{ color: headingColor }}>{section.label} :&nbsp;</h3>
                            {typeof section.value === "string" ? (
                                section.value.split('\n').map((text, textIndex) => (
                                    <p key={textIndex}>{text}<br /></p>
                                ))
                            ) : (
                                section.value
                            )}
                        </div>

                    </div>
                ))}
            </div>

            <Carousel pictures={profile.pictures} />

        </div>
    )
}

export default Profile
