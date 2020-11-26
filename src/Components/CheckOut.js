import React, {useEffect} from "react";
import "./CheckOut.css";
import {useSelector} from "react-redux";

import {useHistory} from "react-router-dom";
import ProductInBasket from "./ProductInBasket";

function CheckOut() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const history = useHistory();
	const products = useSelector((state) => state.products);
	const total = useSelector((state) => state.total);

	return (
		<div className="checkout">
			<div style={{width: "70%", marginLeft: "20px"}}>
				{/* publicity banner  */}
				{/*title */}
				<h3 className="checkout__header">Your Shopping Basket</h3>
				<hr />

				{products.length === 0 ? (
					<div
						style={{
							backgroundColor: "lightgray",
							marginTop: "10px",
							padding: "10px",
							fontWeight: "700",
							color: "grey",
						}}
					>
						<p> you don't have a product in the basket yet</p>
					</div>
				) : (
					<div className="checkout__products">
						{products.map((product) => (
							<ProductInBasket product={product} />
						))}
					</div>
				)}
			</div>
			<div className="checkout__subtotal">
				<p>
					Subtotal ({products.length} items) : <strong>${total}</strong>
				</p>
				<div className="checkout__subtotalGift">
					<input type="checkbox" />
					<label>this order contains a gift</label>
				</div>
				<div
					className="checkout__button"
					style={{margin: "15px 0 5px 0 ", width: "100%"}}
				>
					<button
						onClick={() => {
							history.push("/payment");
						}}
					>
						Procead to Checkout
					</button>
				</div>
			</div>
		</div>
	);
}

export default CheckOut;
