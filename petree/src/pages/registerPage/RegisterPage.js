import React, { useState } from 'react';
import axios from 'axios';
import "./registerPage.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/unnamed.jpg";
import MainImage from "../../assets/images/register.png";
import { FloatingLabel, Form } from 'react-bootstrap';

const RegisterPage = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    first_name: '',
    email: '',
    user_name: '',
    password: '',
  });
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  // Function to handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Set the default image URL if the user hasn't provided an image URL
      const defaultImageUrl = "../../assets/images/login-image.png"; // Replace with your default image URL

      // Send the form data to the backend
      const response = await axios.post('http://localhost:8080/petree', {
        ...formData,
        user_image:defaultImageUrl,
        user_type: "user",
      });

      // Handle the response from the server if needed
      console.log(response.data);
      setRedirectToLogin(true);
      // Optionally, you can redirect to a new page or display a success message
      // For example: history.push('/success');
    } catch (error) {
      // Handle errors if needed
      console.error(error);
    }
  };

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  if (redirectToLogin) {
    // Redirect to the login page after successful registration
    window.location.href = '/login';
  }
  return (
    <div>
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <Link className="navbar-brand" to="/">
          <img className="nav__logo" src={Logo} alt="Your Logo" />
        </Link>
      </div>
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <img className="register__image" src={MainImage} alt="register_image" />
      </div>
      <div>
        <h3 className="text-center register__header mb-3">Register</h3>
        <form className="col-11 col-md-6 col-lg-4 register__input-center" onSubmit={handleFormSubmit}>
          <div className="mb-2">
            <FloatingLabel controlId="firstNameInput" className="register__text" label="First Name">
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
            <FloatingLabel controlId="emailInput" className="register__text" label="Email">
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
            <FloatingLabel controlId="userNmaeInput" className="register__text" label="User Name">
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
            <FloatingLabel controlId="passwordInput" className="register__text" label="Password">
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
