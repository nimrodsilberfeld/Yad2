import React, { useState } from "react"

import mobileLogo from "../img/New_logo_negative.svg"
import LoginPop from "./LoginPop"
import SideMenu from "./SideMenu"

const UpperMobileHeader = ({ closeSlideForMoblie, backButton, hidingForSale, stopHideForSale }) => {

    const [openMobile, setOpenMobile] = useState(false)
    const [openLogin, setOpenLogin] = useState(false)

    const closeSideMenu = () => {
        setOpenMobile(false)
    }
    const loginFromMoblie = () => {
        //hidingForSale()
        setOpenLogin(true)
    }
    const closeLogin = () => {
        //stopHideForSale()
        setOpenLogin(false)
    }
    return (
        <div>
            {openLogin &&
                <LoginPop closeLogin={closeLogin} toOpen={openLogin} />
            }
            <div onClick={() => { setOpenMobile(false) }} className={openMobile ? "y2_backdrop y2-sidenav-backdrop mobile_menu openBackdrop" : "y2_backdrop y2-sidenav-backdrop"}></div>
            <div id="sideNav" className={openMobile ? "y2_sidenav mobile_menu" : "hidden"}>
                <div className={openMobile ? "y2-sidenav-content hide open_side" : "y2-sidenav-content hide"}>
                    <SideMenu loginFromMoblie={loginFromMoblie} closeSideMenu={closeSideMenu} />
                </div>
            </div>
            <div className="mobile_header_wrapper">
                {backButton &&
                    <div className="back_button_mobile" onClick={() => {
                        closeSlideForMoblie()
                    }}>
                        <i className="fas fa-chevron-left"></i>
                    </div>
                }
                <div className="mobile_header_left">
                    <img alt="" src={mobileLogo} />
                </div>
                <div onClick={() => {
                    setOpenMobile(!openMobile)
                }} className="mobile_header_right">
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </div>
    )
}

export default UpperMobileHeader