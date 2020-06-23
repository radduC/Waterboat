import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './AdaugaRezervare.css';

export default function AdaugaRezervare() {
	const [name, setName] = useState('');
	const [dateFrom, setDateFrom] = useState('');
	const [dateTo, setDateTo] = useState('');
	const [phone, setPhone] = useState('');
	const [display, setDisplay] = useState('block');
	let displayStyle = display === 'block' ? true : false;

	const handleChange = event => {
		let inputName = event.target.name;
		let value = event.target.value;

		switch (inputName) {
			case 'name':
				setName(() => value);
				break;

			case 'dateFrom':
				setDateFrom(() => value);
				break;

			case 'dateTo':
				setDateTo(() => value);
				break;

			case 'phone':
				setPhone(() => value);
				break;

			default:
				console.log('Unknown parameter');
				break;
		}
	};

	const handleClick = event => {
		event.preventDefault();
		const url = 'http://127.0.0.1:5000/save-booking';

		const data = {
			name     : name,
			dateFrom : dateFrom,
			dateTo   : dateTo,
			phone    : phone
		};

		fetch(url, {
			method  : 'POST',
			headers : { 'Content-Type': 'application/json' },
			body    : JSON.stringify(data)
		})
			.then(setDisplay(() => 'none'))
			.catch(error => console.error(error));

		document.querySelectorAll('.contact-form-input').forEach(item => (item.value = ''));
	};

	return (
		<div>
			<Header />
			<h1 className="title">Reserve Booking Page</h1>
			<h1 style={displayStyle ? { display: 'none' } : { display: 'block', textAlign: 'center' }}>
				Thank you for your submission!
			</h1>
			<form style={displayStyle ? { display: 'block' } : { display: 'none' }} className="contact-form">
				<label htmlFor="nume">Full name:</label>
				<div>
					<input
						className="contact-form-input"
						type="text"
						name="name"
						id="nume"
						required
						onChange={handleChange}
					/>​
				</div>
				<label htmlFor="date-from">Date from:</label>
				<div>
					<input
						className="contact-form-input"
						type="date"
						name="dateFrom"
						id="date-from"
						required
						onChange={handleChange}
					/>
				</div>
				<label htmlFor="date-to">Date to:</label>
				<div>
					<input
						className="contact-form-input"
						type="date"
						name="dateTo"
						id="date-to"
						required
						onChange={handleChange}
					/>​
				</div>
				<label htmlFor="phone">Phone number:</label>
				<div>
					<input
						className="contact-form-input"
						type="tel"
						name="phone"
						id="phone"
						required
						onChange={handleChange}
					/>​
				</div>
				<button className="contact-form-button" onClick={handleClick}>
					Send booking
				</button>
			</form>
			<Footer />
		</div>
	);
}
