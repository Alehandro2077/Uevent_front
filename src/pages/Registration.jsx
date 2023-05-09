import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Axios from 'axios'

const Registration = () => {
        const [login, setLogin] = React.useState('')
        const [email, setEmail] = React.useState('')
        const [password, setPassword] = React.useState('')
        const [confirmPassword, setconfirmPassword] = React.useState('')
        const [firstName, setfirstName] = React.useState('')
        const [lastName, setlastName] = React.useState('')
        const [middleName, setmiddleName] = React.useState('')

        const [loginError, setLoginError] = React.useState('Login field cannot be empty')
        const [emailError, setEmailError] = React.useState('Email field cannot be empty')
        const [passError, setPassError] = React.useState('Password field cannot be empty')
        const [confirmPassError, setConfirmPassError] = React.useState('Confrim password field cannot be empty')
        const [firstNameError, setfirstNameError] = React.useState('First name field cannot be empty')
        const [middleNameError, setmiddleNameError] = React.useState('Middle name field cannot be empty')
        const [secondNameError, setsecondNameError] = React.useState('Second name password field cannot be empty')

        const [loginDirty, setLoginDirty] = React.useState(false)
        const [emailDirty, setEmailDirty] = React.useState(false)
        const [passDirty, setPassDirty] = React.useState(false)
        const [confirmPassDirty, setConfirmPassDirty] = React.useState(false)
        const [firstNameDirty, setFirstNameDirty] = React.useState(false)
        const [middleNameDirty, setMiddleNameDirty] = React.useState(false)
        const [secondNameDirty, setSecondNameDirty] = React.useState(false)

        const [formValid, setFormValid] = React.useState(false)

        React.useEffect(() => {
            if(emailError || passError){
                setFormValid(false)
            } else {
                setFormValid(true)
            }
        }, [emailError, passError, loginError, confirmPassError, firstNameError, secondNameError, middleNameError])

        const loginHandler = (e) => {
            setLogin(e.target.value)
            const re = /[^a-z0-9]/
            if(e.target.value.length < 3 || e.target.value.length > 20){
                setLoginError('Password must be longer than 3 and shorter than 20')
                if(!e.target.value) {
                    setLoginError('Login field cannot be empty')
                }
            }
            else if(re.test(String(e.target.value).toLowerCase())){
                setLoginError('Uncorrect login')
            } 
            else {
                setLoginError('')
            }
        }

        const firstNameHandler = (e) => {
            setfirstName(e.target.value)
            if(!e.target.value) {
                setfirstNameError('First name field cannot be empty')
            } else {
                setfirstNameError('')
            }
        }

        const middleNameHandler = (e) => {
            setmiddleName(e.target.value)
            if(!e.target.value) {
                setmiddleNameError('First name field cannot be empty')
            } else {
                setmiddleNameError('')
            }
        }
    
        const secondNameHandler = (e) => {
            setlastName(e.target.value)
            if(!e.target.value) {
                setsecondNameError('Second name field cannot be empty')
            } else {
                setsecondNameError('')
            }
        }
    
        const emailHandler = (e) => {
            setEmail(e.target.value)
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
            if(!re.test(String(e.target.value).toLowerCase())){
                setEmailError('Uncorrect email')
            } else {
                setEmailError("")
            }
        }
    
        const passHandler = (e) => {
            setPassword(e.target.value)
            const re = /[^a-zA-Z0-9]/
            if(re.test(String(e.target.value))){
                setPassError('Password must been to consist of numbers and letters!')
                if(!e.target.value) {
                    setPassError('Password field cannot be empty')
                }
            }
            else if(e.target.value.length < 3 || e.target.value.length > 20){
                setPassError('Password must be longer than 3 and shorter than 20')
                if(!e.target.value) {
                    setPassError('Password field cannot be empty')
                }
            } else {
                setPassError('')
            }
        }
    
        const confirmPassHandler = (e) => {
            setconfirmPassword(e.target.value)
            if(!e.target.value) {
                setConfirmPassError('Password field cannot be empty')
            } else {
                setConfirmPassError('')
            }
        }

        const blurHandler = (e) => {
            switch (e.target.name){
                case 'email':
                    setEmailDirty(true)
                    break
                case 'password':
                    setPassDirty(true)
                    break
                case 'login':
                    setLoginDirty(true)
                    break
                case 'confrimPassword':
                    setConfirmPassDirty(true)
                    break
                case 'firstName':
                    setFirstNameDirty(true)
                    break
                case 'secondName':
                    setSecondNameDirty(true)
                    break
                case 'middleName':
                    setMiddleNameDirty(true)
                    break
            }
        }
        
        const addEmployee = (e) => {
            e.preventDefault()
            Axios.post('http://localhost:5000/api/auth/register', 
            {
                login, password, email, firstName, lastName, middleName, confirmPassword 
            }).then((res) => {
                console.log(res)
            })
        }

        return (
            
                <form>
                    <div class="EroreWindow">
                        {(passDirty && passError) &&  <li>{passError}</li>}
                        {(loginDirty && loginError) &&  <li>{loginError}</li>}
                        {(emailDirty && emailError) && <li>{emailError}</li>}
                        {(confirmPassDirty && confirmPassError) && <li>{confirmPassError}</li>}
                        {(firstNameDirty && firstNameError) && <li>{firstNameError}</li>}
                        {(middleNameDirty && middleNameError) && <li>{middleNameError}</li>}
                        {(secondNameDirty && secondNameError) && <li>{secondNameError}</li>} 
                    </div>
                    {/* {(passDirty && passError || passDirty && passError || loginDirty && loginError
                        || emailDirty && emailError || confirmPassDirty && confirmPassError ||
                        firstNameDirty && firstNameError || middleNameDirty && middleNameError ||
                        secondNameDirty && secondNameError) &&  <div class="EroreWindow">
                            <li>{passError}</li>
                            <li>{loginError}</li>
                            <li>{emailError}</li>
                            <li>{confirmPassError}</li>
                            <li>{firstNameError}</li>
                            <li>{middleNameError}</li>
                            <li>{secondNameError}</li></div>} */}

                   
                <div class="RegistrationWindow">
                    <div class="row">
                        <div class="col-md-5 offset-md-1">
                                <input value={email} onBlur={e => blurHandler(e)} name="email" class='RegistrateInput' type="text" placeholder='Email' 
                                    onChange={(event) => {
                                        setEmail(event.target.value)
                                        emailHandler(event)
                                    }} 
                                />
                        </div>
                        <div class="col-md-5 ">
                            <input value={login} onBlur={e => blurHandler(e)} name="login" class='RegistrateInput' id="RegistrationLogin" type="text" placeholder='Login' 
                                 onChange={(event) => {
                                    setLogin(event.target.value)
                                    loginHandler(event)
                                }}
                            />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-5 offset-md-1">
                            <input value={password} onBlur={e => blurHandler(e)} name="password" class='RegistrateInput' id="RegistrationPassoword" type="password" placeholder='Password' 
                                 onChange={(event) => {
                                    setPassword(event.target.value)
                                    passHandler(event)
                                }}
                            />
                        </div>
                        <div class="col-md-5 ">
                            <input value={confirmPassword} onBlur={e => blurHandler(e)} name="confirmPassword"  class='RegistrateInput' id="RegistrationConfirmPassoword" type="password" placeholder='ConfirmPassword' 
                                 onChange={(event) => {
                                    setconfirmPassword(event.target.value)
                                    confirmPassHandler(event)
                                }}
                            />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-5 offset-md-1">
                            <input value={firstName}  onBlur={e => blurHandler(e)} name="firstName" class='RegistrateInput' type="text" placeholder='Name' 
                                 onChange={(event) => {
                                    setfirstName(event.target.value)
                                    firstNameHandler(event)
                                }}
                            />
                        </div>
                        <div class="col-md-5 ">
                            <input value={lastName}  onBlur={e => blurHandler(e)} name="lastName" class='RegistrateInput' type="text" placeholder='Surname'
                                 onChange={(event) => {
                                    setlastName(event.target.value)
                                    secondNameHandler(event)
                                }}
                            />
                        </div>
                    </div>
                    <div class="row">
                        {/* <div class="col-md-5 offset-md-1">
                            <input ref={FoneNumber} class='RegistrateInput' type="number" placeholder='Fone number' />
                        </div> */}
                            <input value={middleName} onBlur={e => blurHandler(e)}  name="middleName" class='RegistrateInputFull' type="text" placeholder='Middle name' 
                            onChange={(event) => {
                                setmiddleName(event.target.value)
                                middleNameHandler(event)
                            }}
                            />
                    </div>


                    <div onClick={addEmployee}>
                        <Link to={'/confirm-message'}>
                            <button disabled={!formValid} class='RegButton'>
                                Registrate
                            </button>
                        </Link>
                    </div>
                    <Link to="/login">
                        <input type="button" class='LogInButton' value='Login' />
                    </Link>
                </div>
                </form>
        );
}
export default Registration;
