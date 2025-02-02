import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import "./card.css"

// Card component for the characters list page

function Card({id, name, avatar}) {
    return (
		<Link to={`./profile/${id}`} className="card">
			<figure>
				<img src={avatar} alt="Image du personnage" />
				<figcaption>{name}</figcaption>
			</figure>
		</Link>
	)
}

Card.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	avatar: PropTypes.string,
}

export default Card
