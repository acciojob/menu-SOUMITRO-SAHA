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
		<main>
			{/* Menu */}
			<div>
				<h1 className='main-heading'>Our Menu</h1>
				<div className='linee' />
			</div>

			{/* Item List */}
			<section>
				<ul className='menu'>
					<li onClick={(e) => categoryFinder()}>All</li>
					<li onClick={(e) => categoryFinder("breakfast")}>Breakfast</li>
					<li onClick={(e) => categoryFinder("lunch")}>Lunch</li>
					<li onClick={(e) => categoryFinder("shakes")}>Shakes</li>
				</ul>
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
