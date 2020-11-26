import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import axios from "../axios";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Link, useHistory} from "react-router-dom";
import "./Payment.css";
import ProductInBasket from "./ProductInBasket";

function Payment() {
	const products = useSelector((state) => state.products);
	const total = useSelector((state) => state.total);
	const user = useSelector((state) => state.user);
	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);
	const [processing, setProcessing] = useState("");
	const [succeeded, setSucceeded] = useState(false);
	const [clientSecret, setClientSecret] = useState(true);
	const stripe = useStripe();
	const elements = useElements();
	const history = useHistory();
	useEffect(() => {
		const getClientSecret = async () => {
			const response = await axios({
				method: "post",
				url: `/payments/create?total=${total * 100}`,
			});
			setClientSecret(response.data.clientSecret);
		};
	}, [total]);
	const handleSubmit = async (e) => {
		e.prevenDefault();
		setProcessing(true);
		const payload = await stripe
			.confirmCardPayment(clientSecret, {
				payment_method: {
					card: elements.getElement(CardElement),
				},
			})
			.then(({paymentIntent}) => {
				setSucceeded(true);
				setError(false);
				setProcessing(false);
				history.replaceState("/orders");
			});
	};
	const handleChange = (e) => {
		setDisabled(e.empty);
		setError(e.error ? e.error.message : "");
	};
	return (
		<div className="payment">
			<div className="payment__title">
				<h3>
					Checkout <Link to="/checkout"> ({products.length} items)</Link>
				</h3>
			</div>

			<div className="payment__container">
				<div className=" payment__section ">
					<h3>Delivery Address</h3>
					<div className="payment__clientInfo">
						<p>{user?.email}</p>
						<p>Nablus n°1589 , california</p>
						<p>+01254789652</p>
					</div>
				</div>
				<hr />
				<div className=" payment__section ">
					<h3>Review Items and delivery</h3>
					<div className="payment__itemsReview">
						{products?.map((product) => (
							<ProductInBasket product={product} />
						))}
					</div>
				</div>
				<hr />
				<div className=" payment__section ">
					<h3>Payment Method</h3>
					<div className="payment__method">
						<form onSubmit={handleSubmit}>
							<CardElement onChange={handleChange} />
							<p>Totale :$ {total}</p>
							<button disabled={processing || disabled || succeeded}>
								<span>{processing ? <p>Processing</p> : "Buy Now"}</span>
							</button>
							{/*errors */}
							{error && <div>{error}</div>}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Payment;
