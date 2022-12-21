import { useState } from 'react'
import { Link } from 'react-router-dom'

import './users.style.scss'

import PVL_icon from '../../assets/PVL.png'
import User_icon from '../../assets/user_b.png'
import Pass_icon from '../../assets/password.png'

import Input from '../../components/Input'

export default function Login() {
    const [user, setUser]  = useState("")
    const [pass, setPass]  = useState("")

    const [userrequire, setUserrequire]  = useState("form-msg-hidden")
    const [passrequire, setPassrequire]  = useState("form-msg-hidden")

    const handleUser = (e:any) => {
        setUser(e.target.value)
        if(e.target.value.length!==0){
            setUserrequire("form-msg-hidden")
        }
    }
    const handlePass = (e:any) => {
        setPass(e.target.value)
        if(e.target.value.length!==0){
            setPassrequire("form-msg-hidden")
        }
    }

    const handleLogin = () => {
        if(user.length===0 || pass.length===0){
            if(user.length===0){
                setUserrequire("form-require-msg")
            }
    
            if(pass.length===0){
                setPassrequire("form-require-msg")
            }
            return
        }else{
            if((user===window.localStorage.name || user===window.localStorage.email) && pass===window.localStorage.hash){
                window.localStorage.setItem("auth", "1")
                alert("successfully logged in")
                window.location.href = "/"
            }else{
                alert("Wrong user infor")
                return                
            }
        }
    }
    return(
        <div className="account">
            <div>
                <img className='account-pvl' src = {PVL_icon} alt = "pvl" />
            </div>
            <div className='account-container'>
                <div className='account-cont'>
                    <div className='account-cont-sup'>Login to your account</div>
                    <div className='account-cont-sub'>Log in to your account to start buying online accounts for a fraction of the price!</div>
                </div>
                <div className='account-form'>
                    <div className='account-type-forms'>
                        <div className='acc-type-form'>
                            <Input src = {User_icon} alt = "user" placeholder = "Username or Email" type = "text" value = {user} onChange = {handleUser} />
                            <div className={userrequire}>*require username</div>
                        </div>
                        <div className='acc-type-form'>
                            <Input src = {Pass_icon} alt = "password" placeholder = "Password" type = "password" value = {pass} onChange = {handlePass} />
                            <div className={passrequire}>*require password</div>
                        </div>
                    </div>
                    <div className='account-form-btn' onClick={handleLogin}>
                        <div className='account-form-btn-txt'>Log in</div>
                    </div>
                </div>
                <div className='acc-option'>
                    <div className='acc-option-cont'>Don't have an account?  </div>
                    <Link to = "/signup" >
                        <div className='acc-option-link'>Sign up here!</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}