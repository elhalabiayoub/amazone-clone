import React, {useState} from "react";
import "./Header.css";
import Search from "@material-ui/icons/Search";
import Basket from "@material-ui/icons/ShoppingBasketOutlined";
import {IconButton} from "@material-ui/core";
import {Link, useHistory} from "react-router-dom";
import {useSelector} from "react-redux";

import {auth} from "../firebase";
function Header() {
	const user = useSelector((state) => state.user);
	const count = useSelector((state) => state.counter);
	const [inputValue, setInputValue] = useState("");
	const history = useHistory();

	const changeHandler = (e) => {
		setInputValue(e.target.value);
		const elements = document.querySelectorAll(".product");

		elements.forEach((element) => {
			const content = element.firstChild.firstChild.textContent.toLowerCase();
			console.log(content);
			if (content.includes(e.target.value.toLowerCase())) {
				element.style.display = "";
			} else {
				element.style.display = "none";
			}
		});
	};
	return (
		<div className="header">
			{/*logo */}
			<div
				className="header__logo"
				onClick={() => {
					history.push("/");
				}}
			>
				<img src="https://cdn.clipart.email/59d9037e2664572ec5d8f1f37c84abe1_amazon-logo-background-transparent-png-clipart-free-download-ywd_1334-402.png" />
			</div>
			{/*search */}
			<div className="header__search">
				<input
					placeholder="Search for a product "
					onChange={changeHandler}
					value={inputValue}
				/>
				<Search className="header__searchIcon" />
			</div>
			{/* nav */}
			<div className="header__nav">
				<div
					className="header__navOption"
					onClick={() => {
						auth.signOut();
						history.push("/login");
					}}
				>
					<span style={{wordBreak: "break-all"}}>
						Hello {user ? user.email.split("@")[0] : ""}
					</span>
					<span>{user ? "Sign Out" : "Sign In"}</span>
				</div>
				<div className="header__navOption">
					<span>Returns</span>
					<span>& orders</span>
				</div>
				<div className="header__navOption">
					<span>Test</span>
					<span>Prime</span>
				</div>
			</div>
			{/* basket with number of items */}
			<div className="header__basket">
				<Link to="/checkout">
					<IconButton className="header__basketIcon">
						<Basket />
						<span>{count}</span>
					</IconButton>
				</Link>
			</div>
		</div>
	);
}

export default Header;
