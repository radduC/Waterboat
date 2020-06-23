import React, {Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './AdaugaRezervare.css';

class AdaugaRezervare extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name     : '',
			dateFrom : '',
			dateTo   : '',
			phone    : '',
			display  : 'block'
		};
	}

	//Folosim arrow functions ca sa nu mai fie nevoie de .bind(this)

	handleClick = event => {
		event.preventDefault();
		const url = 'http://127.0.0.1:5000/save-booking';

		const data = {
			name     : this.state.name,
			dateFrom : this.state.dateFrom,
			dateTo   : this.state.dateTo,
			phone    : this.state.phone
		};

		fetch(url, {
			method  : 'POST',
			headers : {'Content-Type': 'application/json'},
			body    : JSON.stringify(data)
		})
			.then(() =>
				this.setState(() => ({
					display : 'none'
				}))
			)
			.catch(error => console.log(error));

		document.querySelectorAll('.contact-form-input').forEach(item => (item.value = ''));
	};

	handleChange = event => {
		let inputName = event.target.name;
		let value = event.target.value;

		switch (inputName) {
			case 'name':
				this.setState(() => ({
					name : value
				}));
				break;

			case 'dateFrom':
				this.setState(() => ({
					dateFrom : value
				}));
				break;

			case 'dateTo':
				this.setState(() => ({
					dateTo : value
				}));
				break;

			case 'phone':
				this.setState(() => ({
					phone : value
				}));
				break;

			default:
				console.log('Unknown parameter');
				break;
		}
	};

	render() {
		let displayStyle = this.state.display === 'block' ? true : false;

		return (
			<div>
				<Header />
				<h1 className="title">Reserve Booking Page</h1>
				<h1 style={displayStyle ? {display: 'none'} : {display: 'block', textAlign: 'center'}}>
					Thank you for your submission!
				</h1>
				<form style={displayStyle ? {display: 'block'} : {display: 'none'}} className="contact-form" action="">
					<label htmlFor="nume">Full name:</label>
					<div>
						<input
							className="contact-form-input"
							type="text"
							name="name"
							id="nume"
							required
							onChange={this.handleChange}
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
							onChange={this.handleChange}
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
							onChange={this.handleChange}
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
							onChange={this.handleChange}
						/>​
					</div>
					<button className="contact-form-button" onClick={this.handleClick}>
						Send booking
					</button>
				</form>
				<Footer />
			</div>
		);
	}
}

export default AdaugaRezervare;
