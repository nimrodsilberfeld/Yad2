import React from "react"
import logo from "../img/New_logo_negative.svg"
import couch from "../img/couch_lamp.svg"
const LoginImage = () => {
    return (
        <div className="welcome">
            <div className="welcome_upper">
                <img alt="" className="not_mobile" src={logo} />
                <h1>ברוכים הבאים לאתר יד2</h1>
                <h4>טוב לראות אותך שוב!</h4>
            </div>
            <img alt="" src={couch} />
        </div>
    )
}
export default LoginImage