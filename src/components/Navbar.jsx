import React from "react";
import { useLocation, Link } from "react-router-dom";
import authStore from "../store/UserStore";
import { useContext } from "react";
import { Context } from "../index";

const Navbar = () => {
  const location = useLocation();

  // statusUser

  const { user } = useContext(Context);


  return (
    <div class="d-flex mx-auto mt-1">
      {user.isOrganiser && (
        <Link to={"/myevents"} className="YourAds">
          <button
            className={
              location.pathname === "/myevents" ? "selectNavBtn" : "navBtn"
            }
          >
            My events
          </button>
        </Link>
      )}
      <Link to={"/tickets"} className="YourAds">
        <button
          className={
            location.pathname === "/tickets" ? "selectNavBtn" : "navBtn"
          }
        >
          My tickets
        </button>
      </Link>

    </div>
  );
};

export default Navbar;
