import React, { useEffect, useState } from "react";
import { demoData } from "../demo_data";
import ItemCard from "./ItemCard";

const Menu = () => {
	const [currDishes, setCurrDishes] = useState([]);
	const categoryFinder = (category = "All") => {
		if (category === "All") {
			setCurrDishes(demoData);
		} else {
			const res = demoData.filter((cat) => cat.category === category);
			setCurrDishes(res);
		}
	};

	useEffect(() => {
		categoryFinder();
	}, []);

	return (
		<main id='main'>
			{/* Menu */}
			<div>
				<h1 className='main-heading'>Our Menu</h1>
				<div className='linee' />
			</div>

			{/* Item List */}
			<section className='menu'>
				<li id='filter-btn-0' onClick={(e) => categoryFinder()}>
					All
				</li>
				<li id='filter-btn-1' onClick={(e) => categoryFinder("breakfast")}>
					Breakfast
				</li>
				<li id='filter-btn-2' onClick={(e) => categoryFinder("lunch")}>
					Lunch
				</li>
				<li id='filter-btn-3' onClick={(e) => categoryFinder("shakes")}>
					Shakes
				</li>
			</section>

			{/* Items */}
			<section className='main-body'>
				{currDishes.map((dish) => (
					<ItemCard dish={dish} />
				))}
			</section>
		</main>
	);
};

export default Menu;
