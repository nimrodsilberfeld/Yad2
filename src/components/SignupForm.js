import React, { useState } from "react"

const SignupForm = ({ closeSignForm, openSecondSign, getEmailAndPassword }) => {
    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [secondPassword, setSecondPassword] = useState("")
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
    const submitSignUp = (e) => {
        e.preventDefault()
        getEmailAndPassword(email, password)
        openSecondSign()
    }
    return (
        <div className="inner-wrapper">
            <div className="header_login">
                <h3>הרשמה</h3>
                <p>הזן את הפרטים כדי להירשם</p>
            </div>
            <div className="inner-wrapper_content">
                <form onSubmit={(e) => {
                    submitSignUp(e)
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
                        <div className={error ? "input_div error_border" : "input_div"}>
                            <input value={secondPassword} onChange={(e) => {
                                setSecondPassword(e.target.value)
                            }} type={showPassword ? "text" : "password"} placeholder="חזור על הסיסמה שהקלדת" autoComplete="password" />
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
                    </div>
                    <div className="bottom_login">
                        <button type="submit" disabled={password.length > 0 && password === secondPassword ? false : true}  className={password.length > 0 && password === secondPassword ? "login_button valid_button" : "login_button"}>המשך</button>
                        <span onClick={() => {

                            closeSignForm()
                        }}> כבר רשום? <span className="orange"> להתחברות </span></span>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default SignupForm