import React, {Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ListaRezervari.css';

class ListaRezervari extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rezervations : []
		};
	}

	//Folosim arrow functions ca sa nu mai fie nevoie de .bind(this)

	componentDidMount() {
		this.bringData();
	}

	bringData = () => {
		const url = 'http://127.0.0.1:5000/bookings';

		fetch(url)
			.then(response => response.json())
			.then(data => {
			this.setState({rezervations: data['bookingItems']});
		});
	};

	render() {
		let bookings = this.state.rezervations.map((rezervation, index) => (
			<tr key={index}>
				<td>{rezervation.fullName}</td>
				<td>{rezervation.dateFrom}</td>
				<td>{rezervation.dateTo}</td>
				<td>{rezervation.phone}</td>
			</tr>
		));

		if (this.state.rezervations.length === 0) {
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
}

export default ListaRezervari;
