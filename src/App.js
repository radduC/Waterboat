import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import AdaugaRezervare from './pages/AdaugaRezervare';
import ListaRezervari from './pages/ListaRezervari';
import './App.css';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/add-booking">
						<AdaugaRezervare />
					</Route>
					<Route path="/booking-list">
						<ListaRezervari />
					</Route>
					<Route path="/">
						<Homepage />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
