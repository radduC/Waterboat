import React from 'react';
import Card from '../components/Card';
import {faShip, faGlobeEurope, faUser} from '@fortawesome/free-solid-svg-icons';
import './TextBlock.css';

function TextBlock() {
	return (
		<div className="text-block">
			<Card
				icon={faShip}
				title="Luxuries Yacht"
				desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum perspiciatis omnis soluta pariatur
					minima, harum magnam nostrum beatae rerum similique unde, reiciendis consequatur facilis error
					dolore labore incidunt. Explicabo, magni!"
			/>
			<Card
				icon={faGlobeEurope}
				title="30 Years of Experience"
				desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum perspiciatis omnis soluta pariatur
					minima, harum magnam nostrum beatae rerum similique unde, reiciendis consequatur facilis error
					dolore labore incidunt. Explicabo, magni!"
			/>
			<Card
				icon={faUser}
				title="Good Captain"
				desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum perspiciatis omnis soluta pariatur
					minima, harum magnam nostrum beatae rerum similique unde, reiciendis consequatur facilis error
					dolore labore incidunt. Explicabo, magni!"
			/>
		</div>
	);
}

export default TextBlock;
