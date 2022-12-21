import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './users.style.scss'

import PVL_icon from '../../assets/PVL.png'
import User_icon from '../../assets/user_b.png'
import Email_icon from '../../assets/email_b.png'
import Pass_icon from '../../assets/password.png'

import Input from '../../components/Input'

export default function SignUp() {
    const [user, setUser]  = useState("")
    const [email, setEmail]  = useState("")
    const [pass, setPass]  = useState("")
    const [confirmpass, setConfirmpass]  = useState("")

    const [userclass, setUserclass]  = useState("form-msg-hidden")
    const [emailclass, setEmailclass]  = useState("form-msg-hidden")
    const [passclass, setPassclass]  = useState("form-msg-hidden")
    const [confirmpassclass, setConfirmpassclass]  = useState("form-msg-hidden")

    const [userrequire, setUserrequire]  = useState("form-msg-hidden")
    const [emailrequire, setEmailrequire]  = useState("form-msg-hidden")
    const [passrequire, setPassrequire]  = useState("form-msg-hidden")
    const [confirmpassrequire, setConfirmpassrequire]  = useState("form-msg-hidden")

    useEffect(() => {
        if(email && !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            setEmailclass("form-error-msg")
            return
        }else{
            setEmailclass("form-msg-hidden")
        }

        if(pass && pass.length < 8){
            setPassclass("form-error-msg")
            return
        }else{
            setPassclass("form-msg-hidden")
        }

        if(confirmpass && pass !== confirmpass){
            setConfirmpassclass("form-error-msg")
            return
        }else{
            setConfirmpassclass("form-msg-hidden")
        }

    }, [user, email, pass, confirmpass])

    const handleUser = (e:any) => {
        setUser(e.target.value)
        if(e.target.value.length!==0){
            setUserrequire("form-msg-hidden")
        }
    }
    const handleEmail = (e:any) => {
        setEmail(e.target.value)
        if(e.target.value.length!==0){
            setEmailrequire("form-msg-hidden")
        }
    }
    const handlePass = (e:any) => {
        setPass(e.target.value)
        if(e.target.value.length!==0){
            setPassrequire("form-msg-hidden")
        }
    }
    const handleConfirmpass = (e:any) => {
        setConfirmpass(e.target.value)
        if(e.target.value.length!==0){
            setConfirmpassrequire("form-msg-hidden")
        }
    }

    const handleSignup = () => {
        if(user.length === 0 || email.length === 0 || pass.length === 0 || confirmpass.length === 0){

            if(user.length===0){
                setUserrequire("form-require-msg")
            }
    
            if(email.length===0){
                setEmailrequire("form-require-msg")
            }
    
            if(pass.length===0){
                setPassrequire("form-require-msg")
            }
    
            if(confirmpass.length===0){
                setConfirmpassrequire("form-require-msg")
            }
            return
        }else{

            window.localStorage.setItem("name", user);
            window.localStorage.setItem("email", email);
            if(pass === confirmpass){
                window.localStorage.setItem("hash", pass);
            }else{
                return
            }
            window.localStorage.setItem("auth", "0")
            alert("successfully registered")
            window.location.href = "/login";
        }
    }

    return(
        <div className="account">
            <div>
                <img className='account-pvl' src = {PVL_icon} alt = "pvl" />
            </div>
            <div className='account-container'>
                <div className='account-cont'>
                    <div className='account-cont-sup'>Create account</div>
                    <div className='account-cont-sub'>Welcome! enter your details and start buying online accounts for a fraction of the price.</div>
                </div>
                <div className='account-form'>
                    <div className='account-type-forms'>
                        <div className='acc-type-form'>
                            <Input src = {User_icon} alt = "user" placeholder = "Username" type = "text" value = {user} onChange = {handleUser} />
                            <div className={userclass}>Already exist this Username</div>
                            <div className={userrequire}>*require username</div>
                        </div>
                        <div className='acc-type-form'>
                            <Input src = {Email_icon} alt = "email" placeholder = "Email Address" type = "email" value = {email} onChange = {handleEmail} />
                            <div className={emailclass}>Invalid Email</div>
                            <div className={emailrequire}>*required email</div>
                        </div>
                        <div className='acc-type-form'>
                            <Input src = {Pass_icon} alt = "password" placeholder = "Password" type = "password" value = {pass} onChange = {handlePass} />
                            <div className={passclass}>Must have at least 8 Characters</div>
                            <div className={passrequire}>*require password</div>
                        </div>
                        <div className='acc-type-form'>
                            <Input src = {Pass_icon} alt = "password" placeholder = "Confirm Password" type = "password" value = {confirmpass} onChange = {handleConfirmpass} />
                            <div className={confirmpassclass}>Not matched</div>
                            <div className={confirmpassrequire}>*require confirm password</div>
                        </div>
                    </div>
                    <div className='account-form-btn' onClick={handleSignup}>
                        <div className='account-form-btn-txt'>Create account</div>
                    </div>
                </div>
                <div className='acc-option'>
                    <div className='acc-option-cont'>Already have an account? </div>
                    <Link to = "/login" >
                        <div className='acc-option-link'>Login here!</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}