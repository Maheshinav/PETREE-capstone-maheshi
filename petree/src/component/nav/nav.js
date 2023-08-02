import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../assets/images/unnamed.jpg";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";
import "./nav.css";
import ProPic from "../../assets/icons/Avatar.svg";
import Avatar from "../../assets/icons/🦆 icon _profile circle_.svg";
import Pot from "../../assets/icons/🦆 icon _plant_.svg";
import Subscription from "../../assets/icons/subscription plans.svg";
import About from "../../assets/icons/🦆 icon _info_.png";
import Notifications from "../../assets/icons/🦆 icon _notification_.svg";
import Metrices from "../../assets/icons/metrics.svg";
import Order from "../../assets/icons/order details.svg";
import Subscription_Details from "../../assets/icons/subscription-details.svg";
import Items from "../../assets/icons/myitems.svg";
import Settings from "../../assets/icons/settings.svg";
import Logout from "../../assets/icons/logincurve.svg";
import Contact from "../../assets/icons/contacts.svg";
import axios from "axios";
import React, { useState, useEffect } from "react";


const Nav = ({ handleLogout, user_id }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      if (user_id) {
        try {
          const response = await axios.get(`http://localhost:8080/petree/${user_id}`);
          setUser(response.data.user);
        } catch (error) {
          console.error("Error fetching user data:", error);
        } finally {
          setIsLoading(false); // Stop showing the loading indicator
        }
      } else {
        setIsLoading(false);
      }
    };

    getUser();
  }, [user_id]);

  // Show a loading indicator while waiting for the data
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  return (
    <nav expand="md" className="navbar nav__navbar">
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <Link className="navbar-brand" to="/">
          <img className="nav__logo" src={Logo} alt="Your Logo" />
        </Link>
      </div>
      <div className="col-11 col-md-6 col-lg-4 nav_input-center">
        <div className="input-group mb-3">
          <div className="input-group-prepend"></div>
          <div>
            <span className="input-group-append">
              <div className="input-group-text bg-transparent nav__search-icon">
                <i className="fa fa-search"></i>
              </div>
            </span>
          </div>
          <input
            type="text"
            className="form-control nav__input"
            placeholder="Search..."
          ></input>
        </div>
      </div>
      <div className="container-fluid nav__bg-color">
      <div className="container-fluid col-xl-8 nav__bg-color d-flex justify-content-center align-items-center">
        <div className="nav__menu">
          <div className="navbar navbar-expand-md nav__setcart">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav nav__list ">
                  {user_id ? (
                    <>
                      {/* Show user-specific elements if token exists */}
                      <li className="nav-item nav__item-list">
                        <div>
                        <img
                          className="nav__avatar"
                          src={ProPic}
                          alt="Profile Pic"
                        />
                        <span className="nav__menu-item">{user && user.name}</span>
                        </div>
                        <div>
                        <div className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          
          </a>
          <ul className="dropdown-menu dropstart nav__drop-down">
            <li className="nav__sub-menu" >
            <img className="nav__icon" src={Notifications} alt="Avatar" />
                <a className="dropdown-item" href="#">Notifications</a>
                </li>
            <li className="nav__sub-menu">
            <img className="nav__icon" src={Metrices} alt="Avatar" />
                <a className="dropdown-item" href="#">Self Satisfaction Metrices</a>
                </li>
                <li className="nav__sub-menu">
            <img className="nav__icon" src={Order} alt="Avatar" />
                <a className="dropdown-item" href="#">Order Details</a>
                </li>
                <li className="nav__sub-menu">
            <img className="nav__icon" src={Subscription_Details} alt="Avatar" />
                <a className="dropdown-item" href="#">Subscription Details</a>
                </li>
                <li className="nav__sub-menu">
            <img className="nav__icon" src={Items} alt="Avatar" />
                <a className="dropdown-item" href="#">My Items</a>
                </li>
                <li className="nav__sub-menu">
            <img className="nav__icon" src={Settings} alt="Avatar" />
            <Link className="dropdown-item" to={`/settings/${user_id}`}>Settings</Link>
                </li>
                

            <li><hr className="dropdown-divider"/></li>
            <li className="nav__sub-menu">
            <img className="nav__icon" src={Logout} alt="Avatar" />
            <Link to="/" className="dropdown-item" onClick={handleLogout}>Logout</Link>
                </li>
          </ul>
          </div>
        </div>
                        
                      </li>
                      {/* You can add more authenticated user-specific elements here */}
                    
                    </>
                  ) : (
                    // Show default elements if token does not exist
                    <li className="nav-item nav__item-list">
                      <img
                        className="nav__avatar"
                        src={Avatar}
                        alt="Profile Pic"
                      />
                      <a href="/login" className="nav__login nav__menu-item">
                        Login
                      </a>
                      
                    </li>
                  )}
                  <li className="nav-item nav__item-list">
                    <img className="nav__icon" src={Pot} alt="Avatar" />
                    <span className="nav__menu-item">Trees & Pot</span>
                  </li>
                  <Link to="/subscriptionPage">
                  <li className="nav-item nav__item-list">
                    <img
                      className="nav__icon"
                      src={Subscription}
                      alt="Avatar"
                    />
                    <span className="nav__menu-item">Subscription Plans</span>
                  </li>
                  </Link>
                  <li className="nav-item nav__item-list">
                    <img className="nav__icon" src={About} alt="Avatar" />
                    <span className="nav__menu-item">About US</span>
                  </li>
                  <li className="nav-item nav__item-list">
                    <img className="nav__icon" src={Contact} alt="Avatar" />
                    <span className="nav__menu-item">Contact</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <i className="fa fa-shopping-cart nav__cart-icon"></i>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Nav;
