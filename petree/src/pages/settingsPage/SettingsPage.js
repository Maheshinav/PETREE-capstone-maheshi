import ProPic from "../../assets/icons/Avatar.svg";
import "./settingsPage.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; // Import axios

const SettingsPage = () => {
  // Get the user_id from the URL parameters
  const { user_id } = useParams();

  // State to store user data
  const [userData, setUserData] = useState(null);
  const [updatedUser, setUpdatedUser] = useState({});

  useEffect(() => {
    console.log("Fetching user data for user ID:", user_id);
    const fetchUserData = async () => {
      try {
        // Replace 'YOUR_API_URL' with the actual API URL to fetch user data
        const response = await axios.get(
          `http://localhost:8080/petree/${user_id}`
        );
        setUserData(response.data); 
        setUpdatedUser(response.data);// Set the fetched user data to state
        console.log("User data fetched successfully:", response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [user_id]);

  // ..const renderUserData = () => {
  if (userData === null) {
    // Data is not available yet, show loading or a placeholder
    return <div>Loading...</div>;
  }
  // Render user data in your component based on 'userData' state
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        console.log('Sending updated user data:', updatedUser);
      const response = await axios.patch(
        `http://localhost:8080/petree/${user_id}`,
        updatedUser
      );
      console.log("User data updated successfully:", response.data);
      // If the update is successful, you can optionally fetch the user data again to refresh the state
      // Or update only the specific properties that were updated, to keep the state up-to-date.
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  if (userData === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="container-fluid col-xl-8 settings__main">
        <div className="container-fluid d-flex justify-content-start align-items-center ">
          <img className="settings__propic" src={ProPic} alt="ProPic" />
          <h5 className="settings__color">{updatedUser.user_name}</h5>
        </div>
        <hr className="settings__divider" />
        <div className="container-fluid">
          <h5 className="settings__color">Your Information</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label settings__color"
              >
                First Name
              </label>
              <input
                type="text"
                className="form-control settings__color"
                id="exampleFormControlInput1"
                placeholder=""
                name="first_name" // The name attribute should match the property name in the user data object
                value={updatedUser.first_name || ""} // Set the initial value of the input field to the current value from userData or an empty string if userData is null
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label settings__color"
              >
                Last Name
              </label>
              <input
                type="text"
                className="form-control settings__color"
                id="exampleFormControlInput1"
                name="last_name" // The name attribute should match the property name in the user data object
                value={updatedUser.last_name} // Set the initial value of the input field to the current value from userData
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label settings__color "
              >
                Username
              </label>
              <input
                type="text"
                className="form-control settings__color"
                id="exampleFormControlInput1"
                name="user_name" // The name attribute should match the property name in the user data object
                value={updatedUser.user_name} // Set the initial value of the input field to the current value from userData
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label settings__color"
              >
                Email
              </label>
              <input
                type="email"
                className="form-control settings__color"
                id="exampleFormControlInput1"
                name="email" // The name attribute should match the property name in the user data object
                value={updatedUser.email} // Set the initial value of the input field to the current value from userData
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label settings__color"
              >
                Contact Number
              </label>
              <input
                type="text"
                className="form-control settings__color"
                id="exampleFormControlInput1"
                name="contact_number" // The name attribute should match the property name in the user data object
                value={updatedUser.contact_number} // Set the initial value of the input field to the current value from userData
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label settings__color"
              >
                Address
              </label>
              <input
                type="text"
                className="form-control settings__color"
                id="exampleFormControlInput1"
                name="address" // The name attribute should match the property name in the user data object
                value={updatedUser.address} // Set the initial value of the input field to the current value from userData
                onChange={handleInputChange}
              />
            </div>
            <button
              className="btn settings__button col-12 settings__input-center mb-2 settings__color"
              type="submit"
            >
              Update Details
            </button>
          </form>
        </div>
        <hr className="settings__divider" />
        <div className="container-fluid">
          <h5 className="settings__color settings__color">Password Settings</h5>
          <form>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label settings__color settings__color"
              >
                Old Password
              </label>
              <input
                type="email"
                className="form-control settings__color"
                id="exampleFormControlInput1"
                placeholder=""
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label settings__color"
              >
                New Password
              </label>
              <input
                type="email"
                className="form-control settings__color"
                id="exampleFormControlInput1"
                placeholder=""
              />
            </div>
            <button
              className="btn settings__button col-12 settings__input-center mb-2"
              type="submit"
            >
              Change Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
