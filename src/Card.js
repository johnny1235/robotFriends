import React from 'react';

const Card = (robot) => {
	return (
		<div className='bg-light-green dib br3 pa3 ma2 grow'>
		<img alt="robots" src={`https://robohash.org/${robot.id}?200x200`} />
		<h2>{robot.name}</h2>
		<p>{robot.email}</p>
		</div>
		);
}

export default Card;