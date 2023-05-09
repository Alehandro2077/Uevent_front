import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import CarFoto from "../img/Event.png";
import Edit from "../img/Profile/Edit.png";
import Delete from "../img/Profile/Delete.png";
import Axios from "axios";

const MyEventComponent = ({ dataEvent }) => {
  const { event_id, title, description, event_pic} = dataEvent;

  const DeleteEmployee = (e) => {
    Axios.delete(`http://localhost:5000/api/event/delete/${event_id}`, {withCredentials: true}).then((res) => {
        console.log(res)
    })}
    return (
      <div class="Profile">
        <div class="col-md-9">
          <div class="row">
            <div class="col-md-2">
              <img class="CarFoto" src={event_pic ? `http://localhost:5000/api/avatar-pic/${event_pic}` : CarFoto} alt="" />
            </div>
            <div class="col-md-8">
            <Link to={`/productOwerview/${event_id}`}><p className="Title">{title}</p></Link>
              <div className="DescriptionBLock">
                <p className="Description">
                  {description}
                </p>
              </div>
            </div>
            <div class="col-md-2">
              <row>
                <Link to={`/edit-event/${event_id}`}><img className="OrderSettings" src={Edit}></img></Link>
                
                <img className="OrderSettings" src={Delete}  onClick={() => {DeleteEmployee()
                    window.location.reload()}}></img>
              </row>
            </div>
            <div class="col-md-2 offset-md-1"></div>
          </div>
        </div>
      </div>
    );
  }

export default MyEventComponent;
