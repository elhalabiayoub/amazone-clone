import React, {useState} from "react";
import "./Login.css";
import {auth} from "../firebase";
import {useHistory} from "react-router-dom";

function Login() {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const changeHandler = (type, e) => {
		if (type === "email") {
			setEmail(e.target.value);
		}
		if (type === "password") {
			setPassword(e.target.value);
		}
	};
	const register = (e) => {
		e.preventDefault();
		if (email && password) {
			auth
				.createUserWithEmailAndPassword(email, password)
				.then((auth) => {
					console.log(auth);
					if (auth) {
						history.push("/");
					}
				})
				.catch((error) => {
					console.error(error.message);
				});
		}
		setEmail("");
		setPassword("");
	};
	const signIn = (e) => {
		e.preventDefault();
		if (email && password) {
			auth
				.signInWithEmailAndPassword(email, password)
				.then((user) => {
					console.log(user);
					history.push("/");
				})
				.catch((error) => {
					console.error(error.message);
				});
		}
		setEmail("");
		setPassword("");
	};
	return (
		<div className="login">
			<div className="login__container">
				<img src="https://cdn.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg" />
				<form className="login__form">
					<h3 style={{fontSize: "30px", fontWeight: "400"}}>Sign-In</h3>
					<div className="login__field">
						<label>Email : </label>
						<input
							type="email"
							value={email}
							onChange={changeHandler.bind(this, "email")}
						/>
					</div>
					<div className="login__field">
						<label>Password : </label>
						<input
							type="password"
							value={password}
							onChange={changeHandler.bind(this, "password")}
						/>
					</div>

					<button className="login__button" onClick={signIn}>
						Sign In
					</button>
					<p className="login__paragraphe">
						By continuing, you agree to <a>Amazon's Conditions of Use</a> and{" "}
						<a>Privacy Notice.</a>
					</p>
					<button className="login__button register" onClick={register}>
						{" "}
						Create your amazone account
					</button>
				</form>
			</div>
		</div>
	);
}

export default Login;
