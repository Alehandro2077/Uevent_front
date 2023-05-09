import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Eventimg from "../img/Event.png";
import authStore from "../store/UserStore";
import { Context } from '../index'
import { useContext } from 'react'
import { useParams } from "react-router-dom"; 
import Axios from "axios";
import CheckoutButton from "./CheckoutButton";

const ProductOwerview = () => {
  const { user } = useContext(Context);
  const { id } = useParams();
  const [isLoading, setLoading] = React.useState(false);
  const [dateEvent, setDateEvent] = React.useState({});
  const [userDate, setUserDate] = React.useState('');
  const [typeS, setType] = React.useState('');
  
  React.useEffect(() => {
    const fetchGet = async () => {
      setLoading(true)
      try{
        const response = await Axios.get(`http://localhost:5000/api/event/${id}`, {withCredentials: true})
        setDateEvent(response.data.info)
        setUserDate(response.data.user)
        if(dateEvent.type === 'master_class')
          setType('Master class')
        if(dateEvent.type === 'training')
          setType('Business training')
        if(dateEvent.type === 'discoveries')
          setType('Discoveries')
        if(dateEvent.type === 'seminar')
          setType('Seminar')
        if(dateEvent.type === 'concerts')
          setType('Concert')
        if(dateEvent.type === 'festivals')
          setType('Festival')
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchGet();
  }, []);

  

    return isLoading ? <></> : (
      <main>
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-3">
              <div class="menu">
                <div class="row">
                  <img class="CarFoto" src={dateEvent.event_pic ? `http://localhost:5000/api/avatar-pic/${dateEvent.event_pic}` : Eventimg} alt="" />
                </div>
              </div>
            </div>
            <div class="col-12  col-md-9">
              <div class="OverviewProduct">
                <div class="col-md-9">
                  <p class="Name">{dateEvent.title} </p>
                  <p class="Price">{dateEvent.price}$</p>
                </div>
                <div class="col-md-9">
                  <div class="NameSelect">
                    <div class="row">
                      <div class="col-md-4">
                        <p class="LabelProperty">Type</p>
                        <p class="LabelProperty">Adress</p>
                      </div>
                      <div class="col-md-4">
                        <p class="Property">{typeS}</p>
                        <p class="Property">{dateEvent.address}</p>
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-9">
                  <p class="DescriptionP">Description</p>
                  <textarea cols="30" rows="3" class="Description" readOnly>
                    {dateEvent.description}
                  </textarea>
                </div>
                <div class="col-md-9">
                  <div class="UserContact p-3">
                    <div class="row">
                      <div class="col-md-4">
                        <p class="UserName">{userDate.login}</p>
                        <p class="tex">{dateEvent.tickets_count} tickets</p>
                      </div>
                      <div class="col-md-8">
                      {/* Проверка если чел зареган то может посмотреть номер телефона создателя ивента и купить билет */}
                      {user.isAuth &&
                      
                         <CheckoutButton 
                            data={{ ...dateEvent }} 
                            name={'Buy'}
                          
                          /> 
                      
                      }
                      {/* Проверка если чел НЕ зареган то НЕ может  посмотреть номер телефона создателя ивента
                       если нажмет кнопку купить то пойдет на регистрацию */}
                                        
                      </div>
                    </div>
                    <Link class="text-decoration-none text-black" to={`/user/${userDate.user_id}`}>
                      <p>go to profile</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
}

export default ProductOwerview;
