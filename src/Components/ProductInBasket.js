import React from "react";
import {useDispatch} from "react-redux";
import {removeFromBasket} from "../redux/actions/rootActions";

function ProductInBasket({product}) {
	const dispatch = useDispatch();
	const clickHandler = (id) => {
		dispatch(removeFromBasket(id));
	};
	return (
		<div className="checkout__product">
			{/*image */}
			<div className="checkout__image">
				<img src={product.image} alt="product_image" />
			</div>
			<div className="checkout__productInfo">
				<div>
					{/*description */}
					<div className="checkout__description">
						<p>{product.description}</p>
					</div>
					{/*price */}
					<div className="checkout__price">
						<span>{product.currency}</span>
						<span>{product.price.toFixed(2)}</span>
					</div>
					{/*stars */}

					<div className="product__stars">
						{Array(product.stars)
							.fill()
							.map(() => (
								<span className="checkout__yellowStar fa fa-star"></span>
							))}
					</div>
				</div>

				{/*add to basket button */}
				<div className="checkout__button">
					<button onClick={clickHandler.bind(this, product.id)}>
						Remove from basket
					</button>
				</div>
			</div>
		</div>
	);
}

export default ProductInBasket;
