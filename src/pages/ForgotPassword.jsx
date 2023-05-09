import React from 'react'
import Axios from 'axios'
import { useParams } from 'react-router-dom'
import {Link, NavLink} from 'react-router-dom'



const  ForgotPassword = () => {
  const [email, setEmail] = React.useState('')

  const addEmployee = (e) => {
    e.preventDefault()
    Axios.post('http://localhost:5000/api/auth/password-reset', {
        email
    }).then((res) => {
        console.log(res)
    })
  }   
    
return (
  <main >
  <form>
      <div class="bform py-5 text-center">
      <div class="row">
          <div class="container">
                        <div class="col-lg-6 align-justify-center pr-4 pl-0 contact-form mx-auto">
                  <div class="">
                                <h2 class="mb-3 font-weight-light">Password recovery</h2>
                      {/* <h6 class="subtitle font-weight-normal">Registration completed successfully.</h6>
                      <h6 class="subtitle font-weight-normal">Mail is confirmed.</h6> */}
                      <form class="mt-3">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <input class="form-control" type="email" placeholder="email address"
                                            onChange={(event) => {
                                                setEmail(event.target.value)
                                            }}
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-12" onClick={addEmployee}>
                                            <Link to={'/confirm-message'} href="/confirm-message" type="submit" class=" btn-block myButton text-decoration-none text-center text-white border-0">Send</Link>
                                </div>
                            </div>
                        </form>
                  <div class="row">
                      <div class="col-lg-12 text-center mt-2">
                          Move to
                          <Link to={'/login'} href="/login" class="text-danger"><span> login </span></Link>
                          page.
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>
  </form>
  </main>
)
}
export default  ForgotPassword;