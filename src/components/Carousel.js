import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

class Carousel extends React.Component {
	render() {
		var settings = {
			dots           : false,
			infinite       : true,
			speed          : 500,
			slidesToShow   : 1,
			slidesToScroll : 1
		};

		let images = this.props.imgs.map((image, index) => (
			<div key={index} className="slide">
				<img src={image} alt="boat" />
			</div>
		));

		return (
			<div className="slide-container">
				<Slider {...settings}>{images}</Slider>
			</div>
		);
	}
}

export default Carousel;
