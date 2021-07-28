import React, { useContext } from "react"
import logo from "../img/yad2Logo.png"
import user from "../img/user.png"
import { useHistory } from 'react-router-dom'
import { AuthContext } from "../context/authContext"

const Semi_Header = () => {
    const history = useHistory()

    const { auth } = useContext(AuthContext)
    return (
        <div className="semi_header ">
            <div className="semi_header_wrapper">
                <div className="right_side">
                    <img alt="" src={logo} />
                    <h1 className="not_mobile">פרסום מודעה חדשה</h1>
                </div>
                <div className="left_side">
                    <div className="user_info">
                        <i className="far fa-user"></i>
                        <p>{auth.user.user.name} {auth.user.user.last_name}</p>
                    </div>
                    <h1 className="not_mobile">צור קשר</h1>
                    <button onClick={() => {
                        history.push("/forsale")
                    }}>
                        <span className="not_mobile">יציאה</span>
                        <i className="fas fa-times"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Semi_Header