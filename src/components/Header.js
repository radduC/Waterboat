import React from 'react';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShip} from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header() {
	return (
		<div className="header">
			<div className="logo">
				<FontAwesomeIcon icon={faShip} />WATERBOAT
			</div>
			<nav className="nav">
				<NavLink exact className="nav-link" to="/" activeClassName="active">
					Home
				</NavLink>
				<NavLink exact className="nav-link" to="/add-booking" activeClassName="active">
					Book Now
				</NavLink>
				<NavLink exact className="nav-link" to="/booking-list" activeClassName="active">
					Booking List
				</NavLink>
			</nav>
		</div>
	);
}

export default Header;
