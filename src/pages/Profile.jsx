import React, { useState } from "react";
import Axios from 'axios'
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import logo from "../img/Profile/bandatra.png";
import ChangeAv from "../components/ChangeAvatar.jsx";

import { Context } from "../index";
import { useContext } from "react";

const Settings = () => {


  const {user} = useContext(Context)

  const [isLoading, setLoading] = React.useState(false)

  const [data, setData] = useState([])

  React.useEffect(() => {
    
    const fetchGet = async () => {
      setLoading(true)
      try{
        const response = await Axios.get('http://localhost:5000/api/user/info', {withCredentials: true})
        setData(response.data.user)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    console.log(data);
    fetchGet();
  }, []);

  return isLoading ? <></> : (
    <main>
      <div class="container p-2 pt-5 ">
        <div class="d-flex justify-content-center">
          <div>
            <div class="pMainimg">
            <img src={data[0]?.profile_pic ? `http://localhost:5000/api/avatar-pic/${data[0].profile_pic}` : logo} />

            </div>
            <h1 class="">{data[0]?.login}</h1>
            </div>
          
          <div class="ms-5 ">
            <div>
              <h3>Change avatar</h3>
              <ChangeAv />
            </div>
            <div class="mt-3 d-flex ">
              <button class="profileBut">
                <Link to={"/profile/changedata"} class="text-decoration-none">
                  <h3 class="text-dark">Change user data</h3>
                </Link>
              </button>
            </div>
            <div class="mt-3 d-flex ">
              {user.isAdmin && (
                <button class="profileBut">
                  <Link to={"/profile/adminpanel"} class="text-decoration-none">
                    <h3 class="text-dark">Admin panel</h3>
                  </Link>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Settings;
