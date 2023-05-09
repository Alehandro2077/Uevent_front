import React from "react";
import "../App.css";
import logo from "../img/Profile/bandatra.png";
import { Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Axios from 'axios'
// import authStore from "../store/UserStore";
import reload from "../store/scripts/Reload"


import { Context } from '../index'
import { useContext } from 'react'

import {useLocation} from "react-router-dom"

const Header = () => {


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
  const {user} = useContext(Context)
  const addEmployee = (e) => {
    Axios.post('http://localhost:5000/api/auth/logout', {
    }, {withCredentials: true}).then((res) => {
        window.location.href = "/register"
        console.log(res)
    })
  }


  const [isLoading, setLoading] = React.useState(false)

  const [data, setData] = React.useState([])

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

    return isLoading ?  <></> :(
      <header class="header">
        <div class="flex">
          <div>
          {/* {(ban == false) && 
            <Link to="/login" class="Logo">
              PAZHILIYE EVENTS
            </Link>
           } */}

          </div>
          {(ban == true) && 
          <>
            <Link to="/main" class="Logo">
              PAZHILIYE EVENTS
            </Link>
            {user.isAuth == false &&  (
              <div class="ms-auto d-flex">
                <Link class="me-3" to="/register">
                  <button class="AddProductBut">Register</button>
                </Link>
                <Link class="me-3" to="/login">
                  <button class="AddProductBut">Login</button>
                </Link>
              </div>
            )}
            {user.isAuth && (
              <>
                <Navbar />
                <div class="ms-auto d-flex">
                  {user.isOrganiser && (
                    <Link class="me-3" to="/createEvent">
                      <button class="AddProductBut">Create event</button>
                    </Link>
                  )}

                  <div class="BurgerMenu">
                    <div class="profileImage">
                      <img src={data[0]?.profile_pic ? `http://localhost:5000/api/avatar-pic/${data[0].profile_pic}` : logo} class="imgh" />
                    </div>
                    <div class="DropdownContent">

                      <Link to="/Profile">
                        <p>Profile</p>
                      </Link>
                      
                      <div
                        onClick={() => {
                          addEmployee()
                         
                        }}
                      >
                        <Link to="/login">
                          <p>Exit</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </>
          )}
          </>
         } 
          
        </div>
      </header>
    );
  }
export default Header;

// <header class="header">
        //   <div class="flex">
        //     <div>
        //       <Link to="/" class="Logo">
        //         PAZHILIYE EVENTS
        //       </Link>
        //     </div>
        //      {/* Короче проверка если  ты НЕ зарегестрировавшийся тип */}
        //      {/* {authStore.isAuth() &&            */}
        //      {/* <div class="ms-auto d-flex">
        //       <Link class="me-3" to="/register">
        //             <button class="RegisterBut">Register</button>
        //         </Link>
        //         <Link class="me-3" to="/createEvent">
        //             <button class="AddProductBut">Login</button>
        //         </Link>
        //     </div>   */}
        //     {/* тут надо кнопки наверстать я 14 днем сделаю */}
  
        //     {/* Короче проверка и отрисовка если ты зарегестрировавшийся тип */}
        //     {/* {authStore.isAuth() &&  */}
        //       <div>
        //         <Navbar />
        //         <div class="ms-auto d-flex">
        //           <Link class="me-3" to="/createEvent">
        //             <button class="AddProductBut">Create event</button>
        //           </Link>
        //           <div class="BurgerMenu">
        //             <div class="profileImage">
        //               <img src={logo} class=" rounded-circle" />
        //             </div>
        //             <div class="DropdownContent">
        //               <Link to="/MyEvents">
        //                 <p>My Events</p>
        //               </Link>
        //               <Link to="/Profile">
        //                 <p>Profile</p>
        //               </Link>
        //               <Link to="/Tickets">
        //                 <p>Tickets</p>
        //               </Link>
        //               {/* Короче проверка и отрисовка если ты компания  */}
        //               {/* {authStore.isCompany() &&  */}
        //                 <Link to="/CreateEvent">
        //                   <p>Create Event</p>
        //                 </Link>
        //               {/* } */}
        //               <div onClick={() => { addEmployee() }}>
        //                 <Link to="/login">
        //                   <p>Exit</p>
        //                 </Link>
        //               </div>
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //     {/* } */}
        //   </div>
        // </header>}


{/* <header class="header">
          {(user.isAuth) && 
            <div class="flex">
            <div>
              <Link to="/" class="Logo">
                PAZHILIYE EVENTS
              </Link>
            </div>

            <Navbar />

            <div class="ms-auto d-flex">
              <Link class="me-3" to="/createEvent">
                <button class="AddProductBut">Create event</button>
              </Link>
              <div class="BurgerMenu">
                <div class="profileImage">
                  <img src={logo} class=" rounded-circle" />
                </div>
                <div class="DropdownContent">
                  <Link to="/MyEvents">
                    <p>My Events</p>
                  </Link>
                  <Link to="/Profile">
                    <p>Profile</p>
                  </Link>
                  <Link to="/Tickets">
                    <p>Tickets</p>
                  </Link>
                  <Link to="/CreateEvent">
                    <p>Create Event</p>
                  </Link>
                  <div onClick={() => { addEmployee() 
                    reload.reloadThePage()}}>
                  <Link to="/login">
                    <p>Exit</p>
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          } 
      </header>  */}