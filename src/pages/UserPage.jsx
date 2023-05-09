import React from "react";
import logo from "../img/Profile/bandatra.png";
import { Link } from "react-router-dom";
import { useContext } from 'react'
import { useParams } from "react-router-dom"; 
import Axios from "axios";

const UserPage = () => {

  const [isLoading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState('');
  const [org, setOrg] = React.useState('');
  const [org_id, setId] = React.useState('');

  const { user_id } = useParams()
  
  React.useEffect(() => {
    const fetchGet = async () => {
      setLoading(true)
      try{
        const response = await Axios.get(`http://localhost:5000/api/user/info/${user_id}`, {withCredentials: true})
        setUser(response.data.user)
        setOrg(response.data.org)
        setId(response.data.org[0].organiser_id)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchGet();
  }, []);


  return isLoading ? <></> :(
    <main>
      <div class="container p-2 pt-5 ">
        <div class="d-flex justify-content-center">
          <div class="w-25">
            <img src={logo} class=" rounded-circle" />
            <h1 class="">{user[0]?.login}</h1>
          </div>
          <div class="ms-5 ">
            <div>
            <h1 class="">Organiser name: {org[0]?.title}</h1>
              <h5>About</h5>
              <div>
               {org[0]?.description}
              </div>
            </div>
            <div class="mt-3 d-flex ">
              <button class="profileBut">
                <Link to={`/user/events/${org_id}`} class="text-decoration-none">
                  <h3 class="text-dark">Organiser`s events</h3>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserPage;
