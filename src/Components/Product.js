import React from "react";
import "./Product.css";
import {useDispatch} from "react-redux";
import {addToBasket} from "../redux/actions/rootActions";

function Product({id, stars, description, price, image, currency}) {
	const dispatch = useDispatch();
	const clickHandler = () => {
		dispatch(addToBasket({id, description, price, image, currency, stars}));
	};
	return (
		<div className="product">
			{/*description */}
			<div className="product__description">
				<p>{description}</p>
			</div>
			{/*price */}
			<div className="product__price">
				<span>{currency}</span>
				<span>{price}</span>
			</div>
			{/*stars */}
			<div className="product__stars">
				{Array(stars)
					.fill()
					.map(() => (
						<span className="product__yellowStar fa fa-star"></span>
					))}
			</div>
			{/*image */}
			<div className="product__image">
				<img src={image} />
			</div>
			{/*add to basket button */}
			<div className="product__button">
				<button onClick={clickHandler}>add to basket</button>
			</div>
		</div>
	);
}

export default Product;
