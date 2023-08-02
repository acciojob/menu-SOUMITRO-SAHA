import React from "react";

const ItemCard = ({ dish }) => {
	const { desc, id, img, price, title, category } = dish;
	return (
		<div className='item' key={id} data-test-id={`menu-item-${category}`}>
			{/* Image */}
			<div className='item-img'>
				<img src={img} alt={title} />
			</div>
			{/* Description */}
			<div className='item-desc-wrapper'>
				<div className='item-title'>
					<h3>{title}</h3>
					<div>${price}</div>
				</div>
				<div className='item-desc'>{desc}</div>
			</div>
		</div>
	);
};

export default ItemCard;
