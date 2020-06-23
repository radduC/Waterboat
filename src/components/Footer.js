import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
	return (
		<div className="footer">
			<p className="footer-logo">&copy; WATERBOAT {new Date().getFullYear()}</p>
			<ul className="footer-nav">
				<li>
					<Link to="/Waterboat" className="footer-links">
						<h3>More Info</h3>
					</Link>
				</li>
				<li>
					<Link to="/Waterboat" className="footer-links">
						About Us
					</Link>
				</li>
				<li>
					<Link to="/Waterboat" className="footer-links">
						Contact Us
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default Footer;
