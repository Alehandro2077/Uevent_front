import React from 'react'
import Axios from 'axios'
import {Link, NavLink} from 'react-router-dom'
import { useParams } from 'react-router-dom'

const ResetPassword = () => {
  const [newPassword, setPassword] = React.useState('')
  const [confirm_newPassword, setNewPassword] = React.useState('')
  const {token} = useParams()

  const addEmployee = (e) => {
    e.preventDefault()
    Axios.post(`http://localhost:5000/api/auth/password-reset/${token}`, {
      newPassword, confirm_newPassword
    }).then((res) => {
        console.log(res)
    })
  }   
  
  return(
    <main>
    <div class="bform py-5 text-center ">
    <div class="row">
        <div class="container">
                      <div class="col-lg-6 align-justify-center pr-4 pl-0 contact-form mx-auto">
                <div class="">
                    <h2 class="mb-3 font-weight-light">Reset pasword</h2>
                   
                    <form class="mt-3">
                          <div class="row">
                              <div class="col-lg-12">
                                  <div class="form-group">
                                      <input class="form-control" type="newPassword" placeholder="new password"
                                          onChange={(event) => {
                                              setPassword(event.target.value)
                                          }}
                                      />
                                  </div>
                              </div>
                              <div class="col-lg-12">
                                  <div class="form-group">
                                      <input class="form-control" type="confirmNewPassword" placeholder="confrim new password"
                                          onChange={(event) => {
                                              setNewPassword(event.target.value)
                                          }}
                                      />
                                  </div>
                              </div>
                              <div class="col-lg-12" onClick={addEmployee}>
                                          <Link to={'/login'} href="/login" type="submit" class="btn-block myButton text-decoration-none text-center text-white border-0">Send</Link>
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
</main>
  )
}

export default ResetPassword;