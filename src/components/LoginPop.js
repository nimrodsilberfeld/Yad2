import React, { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { setLoginAction } from "../action/authAction"
import { AuthContext } from "../context/authContext"
import { loginToSite, signUpToSite } from "../fetchRequest/fetchRequest"

import LoginForm from "./LoginForm"
import LoginImage from "./LoginImg"
import SignupDetails from "./SignupDetails"
import SignupForm from "./SignupForm"
import SignupImg from "./SignupImg"

const LoginPop = ({ closeLogin, toOpen, toUrl }) => {
    const history = useHistory()
    const { auth, dispatchAuth } = useContext(AuthContext)
    const [signUp, setSignup] = useState(false)
    const [signUpSecond, setSignUpSecond] = useState(false)
    const [reRender, setRerender] = useState(false)
    const [signupDetails, setSignupDetails] = useState({
        email: "",
        password: "",
        name: "",
        last_name: "",
        phone: ""
    })
    const getEmailAndPassword = (email, password) => {
        let clone = { ...signupDetails }
        clone.email = email
        clone.password = password
        setSignupDetails(clone)
        console.log(clone)
    }
    const openSignForm = () => {
        // setRerender(false)
        toRerender()
        setSignup(true)
    }
    const closeSignForm = () => {
        // setRerender(false)
        toRerender()
        setSignup(false)
    }
    const toRerender = () => {
        setRerender(false)
        setRerender(true)
        setTimeout(() => {
            setRerender(false)
        }, 400);
    }
    const openSecondSign = () => {
        setSignUpSecond(true)
    }
    const getLastSignUpDetails = (name, last_name, phone) => {
        let clone = { ...signupDetails }
        clone.name = name
        clone.last_name = last_name
        clone.phone = phone
        console.log(clone)
        setSignupDetails(clone)
        signUpToSite(clone).then((userData) => {
            console.log(userData.data)
            localStorage.setItem("user", JSON.stringify(userData.data))
            dispatchAuth(setLoginAction(userData.data))
            // history.push("/")
        }, (err) => {
            console.log(err)
        })
    }
    return (
        <div>
            {/* <div onClick={() => { setOpenMobile(false) }} className={openMobile ? "y2_backdrop y2-sidenav-backdrop mobile_menu openBackdrop" : "y2_backdrop y2-sidenav-backdrop"}></div> */}
            <div className="y2_backdrop y2-sidenav-backdrop openBackdrop" ></div>
            <div className="login_box">
                <div className="login_box_content">
                    <button onClick={() => {
                        closeLogin()
                    }} className="close_login">
                        <i className="fas fa-times"></i>
                    </button>
                    <div className="dynamic_container">
                        <div className={reRender ? "outer-wrapper opacity-animation" : "outer-wrapper"}>
                            {signUp ?
                                <>
                                    <SignupImg />
                                    {signUpSecond ?
                                        <SignupDetails getLastSignUpDetails={getLastSignUpDetails} />
                                        :
                                        <>
                                            <SignupForm
                                                getEmailAndPassword={getEmailAndPassword}
                                                toUrl openSecondSign={openSecondSign}
                                                closeSignForm={closeSignForm} />
                                        </>
                                    }
                                </>
                                :
                                <>
                                    <LoginImage />
                                    <LoginForm closeLogin={closeLogin} toUrl openSignForm={openSignForm} />
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default LoginPop