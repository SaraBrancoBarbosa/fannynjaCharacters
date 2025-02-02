import { Link } from "react-router-dom"
import "./footer.css"

const logoDA = `${import.meta.env.BASE_URL}/assets/icons/logo-da.svg`
const logoYoutube = `${import.meta.env.BASE_URL}/assets/icons/logo-youtube.svg`
const logoTwitch = `${import.meta.env.BASE_URL}/assets/icons/logo-twitch.svg`
const logoInsta = `${import.meta.env.BASE_URL}/assets/icons/logo-instagram.svg`
const logoTumblr = `${import.meta.env.BASE_URL}/assets/icons/logo-tumblr.svg`

function Footer() {
    return (
        <footer className="footer">
            <div className="logo-footer-container">
                <Link to="https://www.deviantart.com/fannydraw">
                    <img src={logoDA} className="logo-footer" alt="Lien vers le compte DeviantArt" />
                </Link>

                <Link to="https://www.youtube.com/channel/UCJedxrsOS2eSzk42utqww4g">
                    <img src={logoYoutube} className="logo-footer" alt="Lien vers le compte YouTube" />
                </Link>

                <Link to="https://www.twitch.tv/fannynja">
                    <img src={logoTwitch} className="logo-footer" alt="Lien vers le compte Twitch" />
                </Link>

                <Link to="https://www.instagram.com/fannynja__/">
                    <img src={logoInsta} className="logo-footer" alt="Lien vers le compte Instagram" />
                </Link>

                <Link to="https://fannynja.tumblr.com/">
                    <img src={logoTumblr} className="logo-footer" alt="Lien vers le compte Tumblr" />
                </Link>
            </div>

            <p>© 2025 par Sara Barbosa</p>
        </footer>
    )
}

export default Footer