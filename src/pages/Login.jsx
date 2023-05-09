import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Axios from 'axios'

const Login = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const addEmployee = (e) => {
    Axios.post('http://localhost:5000/api/auth/login', {
        email, password, 
    }, {withCredentials: true}).then((res) => {
        window.location.href = "/main"
        console.log(res)
    })}   

      return (
        <main>
          <div class="container">
            <div class="row">
              <div class="col-12  col-md-9">
                <div class="LoginWindow" >
                    <input value={email} name="email" type="text" placeholder='Email' class='RegistrateInput1' 
                      onChange={e => setEmail(e.target.value)}/>

                    <input value={password} name="password" type="password" placeholder='Password' class='RegistrateInput1'
                      onChange={e => setPassword(e.target.value)}/>

                    <div class="row" onClick={() => {addEmployee()
                      ;

                    }}>
                      <Link  type="submit" class='LogInButton' >Sign In</Link>
                        {/* <Link style={{padding_right:"0",padding_left: "0"}}  to="/register">
                          <input  class='LogInButton' value='Registration' />
                        </Link> */}
                    </div>
                    {/* <Link to="/ForgotPassword"> ForgotPassword</Link> */}
                </div>
            </div>
          </div>
          </div>
        </main>
      );
};
export default Login;

  