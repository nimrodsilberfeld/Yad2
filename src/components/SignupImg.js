import React from "react"
import logo from "../img/New_logo_negative.svg"
import couch from "../img/couch_lamp.svg"
const SignupImg = () => {
    return (
        <div className="welcome">
            <div className="welcome_upper">
                <img alt="logo" className="not_mobile" src={logo} />
                <h1>ברוכים הבאים לאתר יד2</h1>
                <h4>הצטרפו לקהילה שלנו!</h4>
            </div>
            <img alt="" src={couch} />
        </div>
    )
}
export default SignupImg