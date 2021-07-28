import React, { useContext, useState } from "react"
import { useHistory } from 'react-router-dom'
import { AuthContext } from "../context/authContext"
import { setLoginAction } from "../action/authAction"
import { loginToSite } from "../fetchRequest/fetchRequest"

const LoginForm = ({ openSignForm, toUrl,closeLogin }) => {
    const { auth, dispatchAuth } = useContext(AuthContext)
    const history = useHistory()
    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState(false)
    const passwordChange = (password) => {
        let pass = password
        if (pass.length === 0) {
            setError(true)
        } else {
            setError(false)
        }
        setPassword(pass)

    }
    const submitLogin = (e) => {
        e.preventDefault()
        console.log("email", email)
        console.log("Password", password)
        loginToSite(email, password).then((userData) => {
           // console.log(userData.data)
            localStorage.setItem("user", JSON.stringify(userData.data))
            dispatchAuth(setLoginAction(userData.data))
            closeLogin()
            // history.push("/")
        }, (err) => {
            console.log(err)
            // if (err.message === "EMAIL_NOT_FOUND" || err.message === "INVALID_PASSWORD") {
            //     setErrorMessage("Email or Password are incorrect.")
            //     setIsEmailInputValid(false)
            // }
        })
    }
    return (
        <div className="inner-wrapper">
            <div className="header_login">
                <h3>התחברות</h3>
                <p>הזן את הפרטים כדי להתחבר</p>
            </div>
            <div className="inner-wrapper_content">
                <form onSubmit={(e) => {
                    submitLogin(e)
                }}>
                    <div className="input_wrapper">
                        <p>כתובת מייל</p>
                        <input value={email} onChange={(e) => {
                            setEmail(e.target.value)
                        }} className="login_input" type="email" autoComplete="email" placeholder="your@mail.com"></input>
                        <p>סיסמה</p>
                        <div className={error ? "input_div error_border" : "input_div"}>
                            <input value={password} onChange={(e) => {
                                passwordChange(e.target.value)
                            }} type={showPassword ? "text" : "password"} placeholder="הקלד סיסמה" autoComplete="password" />
                            <div className="eye_wrapper">
                                {showPassword ?
                                    <i onClick={() => {
                                        setShowPassword(false)
                                    }} className="far fa-eye"></i>
                                    :
                                    <i onClick={() => {
                                        setShowPassword(true)
                                    }} className="far fa-eye-slash"></i>
                                }
                            </div>
                        </div>
                        {error &&
                            <p className="error_text">שדה חובה</p>
                        }
                        <p className="forgot">שכחתי את הסיסמה</p>
                    </div>
                    <div className="bottom_login">
                        {/* <div className="loader">Loading...</div> */}
                        <button type="submit" className={password.length > 0 ? "login_button valid_button" : "login_button"}>התחבר</button>
                        <span onClick={() => {
                            openSignForm()
                        }}>לא רשום? <span className="orange">להרשמה</span></span>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default LoginForm