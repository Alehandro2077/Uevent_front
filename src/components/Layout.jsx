import React from "react";
import {useLocation} from "react-router-dom"
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export const Layout = ({ children }) => {
  const location = useLocation();
  let ban = true;
  if (
    location.pathname !== "/login" &&
    location.pathname !== "/register" &&
    location.pathname !== "/confirm-message" &&
    location.pathname !== "/forgotPassword" &&
    location.pathname !== "/send-password-link/:token" &&
    location.pathname !== "/confirm-email/:token"
  )
    ban = true;
  else ban = false;



  return (
    <React.Fragment>
      <div class="wrapper">
          <Header />
        {children}
      </div>
        <Footer />
    </React.Fragment>
  );
};
