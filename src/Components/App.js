import React, {useEffect} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Banner from "./Banner";
import Products from "./Products";
import CheckOut from "./CheckOut";
import Login from "./Login";
import {useDispatch} from "react-redux";
import {setUser} from "../redux/actions/rootActions";
import {auth} from "../firebase";
import Payment from "./Payment";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe(
	"pk_test_51HRn1BFxpjUVQzq1HyaJTpyLMSVdh13SVJvwyHpvmeOAOlMJ6wuOdN4dkbhSnITLaILhcImNL2rDs1GkxO2tevSm00iBDZ3vfj"
);

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			console.log("the user is  : ", authUser);
			if (authUser) {
				dispatch(setUser(authUser));
			} else {
				dispatch(setUser(null));
			}
		});
	}, []);
	return (
		<Router>
			<div className="app">
				<Switch>
					<Route exact path="/login">
						{/*header */}
						<Login />
					</Route>
					<Route exact path="/checkout">
						{/*header */}
						<Header />
						<CheckOut />
					</Route>
					<Route exact path="/payment">
						{/*header */}
						<Header />
						<Elements stripe={promise}>
							<Payment />
						</Elements>
					</Route>
					<Route path="/">
						{/*header */}
						<Header />
						{/*banner */}
						<Banner />
						{/*products */}
						<Products />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
