  import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
const WaitingForMail = () => {
    return (
      <main>
        <div class="container">
          <div class="row">
            <div class="col-12  col-md-9">
              <div class="LoginWindowEmail" >
                <h6 class="EmailWaiterText">Confirmation has been sent to your email.</h6>
                <h6 class="EmailWaiterText">To confirm the operation, follow the link in the sent email.</h6>
                <div class="col-lg-12 text-center mt-3">
                Move to
                <Link to={'/login'} href="/login" class="text-danger"><span> login </span></Link>
                page.
            </div>
              </div>
          </div>
        </div>
        </div>
      </main>
    );
  }
export default WaitingForMail;
