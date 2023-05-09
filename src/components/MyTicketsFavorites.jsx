import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import CarFoto from "../img/LogoNight.png";
import Edit from "../img/Profile/Edit.png";
import Delete from "../img/Profile/Delete.png";
class MyTicketsFavorites extends React.Component {
  render() {
    return (
      <div class="Profile">
        <div class="col-md-9">
          <div class="row">
            <div class="col-md-2">
              <img class="CarFoto" src={CarFoto} alt="" />
            </div>
            <div class="col-md-8">
              <p className="Title"> <Link to="/productOwerview">Mustang Mach-e 2021</Link> </p>
              <div className="DescriptionBLock">
                <p className="Description">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic... printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap
                  into electronic...
                </p>
              </div>
            </div>
            <div class="col-md-2">
              <row>
                <img className="OrderSettings" src={Delete}></img>
              </row>
            </div>
            <div class="col-md-2 offset-md-1"></div>
          </div>
        </div>
      </div>
    );
  }
}
export default MyTicketsFavorites;
