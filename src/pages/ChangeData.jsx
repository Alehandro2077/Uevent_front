import React from 'react'
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../App.css";
import Axios from 'axios'
import { Link } from "react-router-dom";
import { set } from 'mobx';
import { Context } from "../index";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';

const ChangeData = () => {
  const navigate = useNavigate()
    
  const {user} = useContext(Context)
    const handleSubmit = (e) => {
      e.preventDefault();
      // handle form submission here
    };

    const [user_id, setId] = useState("");
    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [status, setStatus] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const [isLoading, setLoading] = React.useState(false)

    const [isCompany, setIscompany] = useState(user.isOrganiser);

    // const [isUnconnect, setUnconnect] = React.useState(true)

    React.useEffect(() => {
      const fetchGet = async () => {
        setLoading(true)
        try{
          const response = await Axios.get('http://localhost:5000/api/user/info', {withCredentials: true})
          setId(response.data.user[0].user_id)
          setLogin(response.data.user[0].login)
          setFirstName(response.data.user[0].firstName)
          setLastName(response.data.user[0].lastName)
          setMiddleName(response.data.user[0].middleName)
          setEmail(response.data.user[0].email)
          setStatus(response.data.user[0].status)
        } catch (err) {
          console.error(err)
        } finally {
          setLoading(false)
        }
      }
      fetchGet();
    }, []);
    
  const addEmployee = () => {
    Axios.patch('http://localhost:5000/api/user/update', {
        login, firstName, lastName, middleName 
    }, {withCredentials: true}).then((res) => {
        window.location.href = "/Profile"
        console.log(res)
    })}

    const deleteEmployee = async () => {
      // console.log(user_id);
      const response = await Axios.delete(`http://localhost:5000/api/user/${user_id}/delete/`, {withCredentials: true});
      console.log(response);
    }  

    const OrgniserCreateEmployee = () => {
      Axios.post('http://localhost:5000/api/organiser/update', {
          title, description 
      }, {withCredentials: true}).then((res) => {
          console.log(res)
      })
    }  

      const OrgniserDeleteEmployee = () => {
        Axios.delete('http://localhost:5000/api/organiser/delete', 
        {withCredentials: true}).then((res) => {
            console.log(res)
        })}

  return isLoading ? <></> : (
    <main>
      <div className="container">
        <div className="row">
          <div className="container">
            <h1>Change user data</h1>
              <p className='mt-3'>Login</p>
              <input  value={login} name="login" type="text" placeholder='Login' className='RegistrateInput2' 
                        onChange={e => setLogin(e.target.value)}/>
              <p className='mt-3'>FirstName</p>
              <input  value={firstName} name="firstName" type="text" placeholder='First Name' className='RegistrateInput2' 
                        onChange={e => setFirstName(e.target.value)}/>  
              <p className='mt-3'>LastName</p>
              <input  value={lastName} name="lastName" type="text" placeholder='Last Name' className='RegistrateInput2' 
                        onChange={e => setLastName(e.target.value)}/>
              <p className='mt-3'>MiddleName</p>
              <input  value={middleName} name="middleName" type="text" placeholder='Middle Name' className='RegistrateInput2' 
                        onChange={e => setMiddleName(e.target.value)}/>

              <p className='mt-3'>Email</p>
              <input  value={email} name="middleName" type="text" placeholder='Email' className='RegistrateInput2' 
                        onChange={e => setEmail(e.target.value)}/>

                <div class="form-check">
              <input checked={isCompany} onChange={() => {
                setIscompany(!isCompany);
                }} class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                  <label class="form-check-label" for="flexCheckDefault">
                    Company
                  </label>
                </div>
                {isCompany ?
                <>
                  <p className='mt-3'>Title</p>
                  <input  value={title} name="middleName" type="text" placeholder='Title' className='RegistrateInput2' 
                        onChange={e => setTitle(e.target.value)}/>
                  <p className='mt-3'>Description</p>
                  <input  value={description} name="middleName" type="text" placeholder='Description' className='RegistrateInput2' 
                        onChange={e => setDescription(e.target.value)}/>
                  
                </>
              : <></>}
              <Link className="myButton mt-3 mb-4" to={'/Profile'} type="submit" onClick={() => {
                if (isCompany) {
                  OrgniserCreateEmployee()
                }
                addEmployee()
              }}>Save Changes</Link>
              
              <Link to={'/profile'}><button className="myButton mt-3" style={{backgroundColor:"red", float:"right",marginRight:"7.5em"}}  type="submit" onClick={() => {deleteEmployee()}}>Delete account</button></Link>
              {user.isOrganiser && 
                  <Link to={'/profile'}><button className="myButton mt-3" style={{backgroundColor:"red", float:"right",marginRight:"7.5em"}}  type="submit" onClick={() => {OrgniserDeleteEmployee()}}>Delete organiser</button></Link>
              }
              
             
            {/* </Form> */}
          </div>
        </div>
      </div>
    </main>
  );
}

export default ChangeData