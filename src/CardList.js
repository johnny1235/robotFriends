import React from 'react';
import Card from './Card';

const CardList =({ robots }) => {
	const cardComp = robots.map((user,num) => {
		return (
			<Card key={num} id={robots[num].id} name={robots[num].name} email={robots[num].email}/>
			);
	})
	return (
			<div>
			{cardComp}
			</div>
		);
}

export default CardList;
