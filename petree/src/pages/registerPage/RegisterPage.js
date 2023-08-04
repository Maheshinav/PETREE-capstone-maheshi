import React, { useState } from "react";
import axios from "axios";
import "./registerPage.css";
import MainImage from "../../assets/images/register.png";
import { FloatingLabel, Form } from "react-bootstrap";

const RegisterPage = () => {
	const [formData, setFormData] = useState({
		first_name: "",
		email: "",
		user_name: "",
		password: "",
	});
	const [redirectToLogin, setRedirectToLogin] = useState(false);

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		try {
			const defaultImageUrl = "../../assets/images/login-image.png";

			const response = await axios.post("http://localhost:8080/petree", {
				...formData,
				user_image: defaultImageUrl,
				user_type: "user",
			});

			console.log(response.data);
			setRedirectToLogin(true);
		} catch (error) {
			console.error(error);
		}
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};
	if (redirectToLogin) {
		window.location.href = "/login";
	}

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
				<img className="register__image" src={MainImage} alt="register_image" />
			</div>
			<div>
				<h3 className="text-center register__header mb-3">Register</h3>
				<form
					className="col-11 col-md-6 col-lg-4 register__input-center"
					onSubmit={handleFormSubmit}
				>
					<div className="mb-2">
						<FloatingLabel
							controlId="firstNameInput"
							className="register__text"
							label="First Name"
						>
							<Form.Control
								type="text"
								className="form-control register__text"
								placeholder="First Name"
								name="first_name"
								value={formData.first_name}
								onChange={handleInputChange}
							/>
						</FloatingLabel>
					</div>
					<div className="mb-2">
						<FloatingLabel
							controlId="emailInput"
							className="register__text"
							label="Email"
						>
							<Form.Control
								type="text"
								className="form-control register__text"
								placeholder="Email"
								name="email"
								value={formData.email}
								onChange={handleInputChange}
							/>
						</FloatingLabel>
					</div>
					<div className="mb-2">
						<FloatingLabel
							controlId="userNmaeInput"
							className="register__text"
							label="User Name"
						>
							<Form.Control
								type="text"
								className="form-control register__text"
								placeholder="User Name"
								name="user_name"
								value={formData.user_name}
								onChange={handleInputChange}
							/>
						</FloatingLabel>
					</div>
					<div className="mb-2">
						<FloatingLabel
							controlId="passwordInput"
							className="register__text"
							label="Password"
						>
							<Form.Control
								type="text"
								className="form-control register__text"
								placeholder="Password"
								name="password"
								value={formData.password}
								onChange={handleInputChange}
							/>
						</FloatingLabel>
					</div>
					<button
						className="btn register__button col-12 register__input-center mb-2"
						type="submit"
					>
						Create account
					</button>
				</form>
			</div>
		</div>
	);
};

export default RegisterPage;
