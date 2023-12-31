import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React, { useState, useEffect } from "react";
import Nav from "./component/nav/nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import HomePage from "./pages/homePage/HomePage";
import LoginPage from "./pages/loginPage/LoginPage";
import axios from "axios";
import SettingsPage from "./pages/settingsPage/SettingsPage";
import Footer from "./component/footer/Footer";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import SubscriptionPage from "./pages/subscriptionPage/Subscriptionpage";
import RegisterPage from "./pages/registerPage/RegisterPage";
import ProductsPage from "./pages/productspage/ProductsPage";
import SingleproductPage from "./pages/singleProductPage/Singleproductpage";
import Aboutuspage from "./pages/aboutuspage/Aboutuspage";
import Contactuspage from "./pages/contactuspage/Contactuspage";
import ClaypotDetailPage from "./pages/claypotdetailpage/ClaypotDetailPage"

function App() {
  // State to store the token and user_idClaypotDetailPage
  const [authData, setAuthData] = useState({
    token: localStorage.getItem("token") || "",
    user_id: null,
  });
  let userId = localStorage.getItem("user_id");
  let username = localStorage.getItem("user_name");
  // Function to handle login and set the token and user_id

  // Function to handle logout and clear the token and user_id
  const handleLogout = () => {
    setAuthData({ token: "", user_id: null });
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("user_name");
  };

  const handleLogin = (token, user_id, user_name) => {
    console.log("Logging in with user_id:", user_id);
    setAuthData({ token, user_id });
    localStorage.setItem("token", token);
    localStorage.setItem("user_id", user_id);
    localStorage.setItem("user_name", user_name);
    console.log("Current user_id after login:", authData.user_id, authData.user_name);
  };

  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("user_id");

      console.log("User ID from localStorage:", userId);

      if (token) {
        try {
          const response = await axios.get(
            `http://localhost:8080/petree/${userId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log(response);
          setAuthData((prevData) => ({
            ...prevData,
            user_id: response.data.id,
          }));
          console.log("Current user_id:", localStorage.getItem("user_id"));
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    getUser();
  }, []);

  // empty dependency array to run only on component mount

  // Determine if the navigation bar should be displayed based on the route
  const showNav = !(window.location.pathname === "/login"||window.location.pathname === "/registerPage");

  return (
    <BrowserRouter>
      <div>
        {showNav && (<Nav token={authData.token} handleLogout={handleLogout} user_id={userId} user_name={username}/>)}

        {/* Pass the user_id prop to the Nav component */}
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login"element={<LoginPage handleLogin={handleLogin} authData={authData} />}/>
        <Route path="/settings/:user_id"element={<SettingsPage authData={authData} />}/>
         <Route path="/subscriptionPage" element={<SubscriptionPage />} /> 
         <Route path="/registerPage" element={<RegisterPage/>}/>
         <Route path="/productsPage" element={<ProductsPage/>}/>
         <Route path="/singleproductpage/:tree_id" element={<SingleproductPage/>}/>
         <Route path="/claypotdetailpage/:claypot_id" element={<ClaypotDetailPage/>}/>
         <Route path="/aboutuspage" element={<Aboutuspage/>}/>
         <Route path="/contactuspage" element={<Contactuspage/>}/>
        </Routes>
        
        {showNav && <Footer />}
      </div>
    </BrowserRouter>
  );
}

export default App;
