import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Card.css';

function Card({ icon, title, desc }) {
	return (
		<div className="card-container">
			<div className="card-img-wrapper">
				<span className="icon">
					<FontAwesomeIcon icon={icon} />
				</span>
				<h4>{title}</h4>
			</div>
			<div className="card-description">
				<p>{desc}</p>
			</div>
		</div>
	);
}

export default Card;
