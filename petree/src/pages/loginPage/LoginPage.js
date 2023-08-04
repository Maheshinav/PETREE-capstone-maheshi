import "./loginpage.css";
import MainImage from "../../assets/images/login-image.png";
import { FloatingLabel, Form } from "react-bootstrap";
import React, { useState } from "react";
import { authenticateUser } from "./authenticateUser";

const LoginPage = ({ handleLogin }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("handleSubmit called");
		console.log(`Email: ${email}`);
		console.log(`Password: ${password}`);
		try {
			const authData = await authenticateUser(email, password);
			console.log("Result from authenticateUser:", authData);

			if (authData) {
				const { token, userId, username } = authData;
				console.log("User ID received after login:", userId);

				handleLogin(token, userId);

				localStorage.setItem("token", token);
				localStorage.setItem("user_id", userId);
				localStorage.setItem("user_name", username);

				window.location.href = "/";
			} else {
				alert("Invalid email or password. Please try again.");
			}
		} catch (error) {
			console.error("Login error:", error);
			alert("An error occurred during login. Please try again.");
		}
	};
	const Logo =
		"https://res.cloudinary.com/dchzjr4bz/image/upload/v1691044702/unnamed_2_uowdpc.jpg";

	return (
		<div>
			<div className="container-fluid d-flex justify-content-center align-items-center">
				<a className="navbar-brand" href="/">
					<img className="nav__logo" src={Logo} alt="Your Logo" />
				</a>
			</div>
			<div className="container-fluid d-flex justify-content-center align-items-center">
				<img className="login__image" src={MainImage} alt="login_image" />
			</div>
			<div>
				<h3 className="text-center login__header mb-3">Login</h3>
				<form
					className="col-11 col-md-6 col-lg-4 login__input-center"
					onSubmit={handleSubmit}
				>
					<div className="mb-4">
						<FloatingLabel
							controlId="emailInput"
							className="login__input-text"
							label="Email"
						>
							<Form.Control
								type="email"
								value={email}
								onChange={handleEmailChange}
								className="form-control login__input-text"
								placeholder="Email"
							/>
						</FloatingLabel>
					</div>
					<div className="mb-3">
						<FloatingLabel
							controlId="passwordInput"
							className="login__input-text"
							label="Password"
						>
							<Form.Control
								type="password"
								value={password}
								onChange={handlePasswordChange}
								className="login__input-text"
								placeholder="Password"
							/>
						</FloatingLabel>
					</div>
					<button
						className="btn login__button col-12 login__input-center mb-2"
						type="submit"
					>
						Login
					</button>
					<div className="mb-4 login__forgot">
						<h6>Forgot password?</h6>
					</div>
					<div className="login__not-member">
						<p className="login__not-member-text">Not a member yet?</p>
						<h6 className="login__register_link">
							<a href="/registerPage" className="login__register">
								Register
							</a>
						</h6>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
