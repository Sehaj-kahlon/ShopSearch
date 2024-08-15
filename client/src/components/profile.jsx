import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import PromptInput from "./promptInput";
import "./components.css";
function Profile() {
  const [userDetails, setUserDetails] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);

      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        {userDetails ? (
          <div className="d-flex justify-content-between w-100 align-items-center">
            <div className="navbar-brand mb-0">
              <img src="/logo.png" alt="ShopSearch Logo" className="logo" />
              <h3 className="title">ShopSearch</h3>
            </div>
            <div className="user-data">
              <button className="btn" onClick={toggleMenu}>
                <i className="fas fa-user-circle fa-2x"></i>
              </button>
              {showMenu && (
                <div
                  className="dropdown-menu dropdown-menu-right show user-data-menu"
                  style={{
                    position: "absolute",
                    right: 0,
                    top: "100%",
                    display: "block",
                  }}
                >
                  <p className="dropdown-item disabled">
                    Welcome, {userDetails.firstName}
                  </p>
                  <p className="dropdown-item">Email: {userDetails.email}</p>
                  <p className="dropdown-item">
                    First Name: {userDetails.firstName}
                  </p>
                  <button
                    className="dropdown-item logout"
                    onClick={handleLogout}
                  >
                    Logout&nbsp;
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          "Fetching user details..."
        )}
      </nav>
      <div  className="promptInput">
        <PromptInput />
      </div>
    </div>
  );
}

export default Profile;
