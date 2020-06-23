import React from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import TextBlock from './TextBlock';
import BookYacht from '../components/BookYacht';
import Footer from '../components/Footer';
import './Homepage.css';

function Homepage() {
	return (
		<div className='homepage-container'>
			<Header />
			<Carousel imgs={['imagini/boat1.jpg', 'imagini/boat2.jpg', 'imagini/boat3.jpg']} />
			<TextBlock />
			<BookYacht />
			<Footer />
		</div>
	);
}

export default Homepage;
