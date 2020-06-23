import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ListaRezervari.css';

export default function ListaRezervari() {
	const [rezervations, setRezervations] = useState([]);
	useEffect(() => bringData(), []);

	const bringData = () => {
		const url = 'http://127.0.0.1:5000/bookings';

		fetch(url)
			.then(response => response.json())
			.then(data => setRezervations(() => data['bookingItems']))
			.catch(error => console.error(error));
	};

	if (!rezervations.length) {
		return (
			<div>
				<Header />
				<h1 className="rezervari-titlu">Booking items list</h1>
				<h1 className="rezervari-titlu">Loading rezerevations list...</h1>
				<Footer />
			</div>
		);
	}
	else {
		let bookings = rezervations.map((rezervation, index) => (
			<tr key={index}>
				<td>{rezervation.fullName}</td>
				<td>{rezervation.dateFrom}</td>
				<td>{rezervation.dateTo}</td>
				<td>{rezervation.phone}</td>
			</tr>
		));

		return (
			<div>
				<Header />
				<h1 className="rezervari-titlu">Booking items list</h1>
				<table className="rezervari-tabel">
					<thead>
						<tr>
							<th>Full Name</th>
							<th>Date from</th>
							<th>Date to</th>
							<th>Phone</th>
						</tr>
					</thead>
					<tbody>{bookings}</tbody>
				</table>
				<Footer />
			</div>
		);
	}
}
