import React from 'react';
import {NavLink} from 'react-router-dom';
import './BookYacht.css';

function BookYacht() {
	return (
		<div className="bookYacht-container">
			<h2>Book a Yacht!</h2>
			<p>Book your dream vacation!</p>
			<NavLink exact to="/add-booking" activeClassName="active">
				<button className="bookYacht-button">BOOK NOW</button>
			</NavLink>
		</div>
	);
}

export default BookYacht;
