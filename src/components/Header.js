import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../img/yad2Logo.png"
import bell from "../img/bell.png"
import heart from "../img/heart.png"
import user from "../img/user.png"
import blueLogo from "../img/yad1_logo_blue.svg"
import blackLogo from "../img/yadata_logo_black.svg"

import { useHistory } from 'react-router-dom'
import LoginPop from './LoginPop'
import { AuthContext } from "../context/authContext"
import SideMenu from './SideMenu'
import { setLogoutAction } from '../action/authAction'
import { logout } from '../fetchRequest/fetchRequest'

const Header = () => {
    const history = useHistory()
    const { auth, dispatchAuth } = useContext(AuthContext)
    const [openMobile, setOpenMobile] = useState(false)
    const [openLogin, setOpenLogin] = useState(false)
    const [redirectUrl, setRedirectUrl] = useState("/")
    const closeLogin = () => {
        setOpenLogin(false)
    }
    // useEffect(() => {
    //     console.log(auth.user)
    // }, [auth])
    const closeSideMenu = () => {
        setOpenMobile(false)
    }
    const loginFromMoblie = () => {
        setOpenLogin(true)
    }

    const logingOut = () => {
        logout(auth.user.token).then(() => {
            localStorage.clear()
            dispatchAuth(setLogoutAction())
            // history.push("/")
        }, (err) => {
            console.log(err)
        })
    }

    return (
        <div className="header not_mobile">
            {openLogin &&
                <LoginPop toUrl={redirectUrl} closeLogin={closeLogin} toOpen={openLogin} />
            }
            <div onClick={() => { setOpenMobile(false) }} className={openMobile ? "y2_backdrop y2-sidenav-backdrop mobile_menu openBackdrop" : "y2_backdrop y2-sidenav-backdrop"}></div>
            <div className="line"></div>

            <div id="sideNav" className={openMobile ? "y2_sidenav mobile_menu" : "hidden"}>
                <div className={openMobile ? "y2-sidenav-content hide open_side" : "y2-sidenav-content hide"}>
                    <SideMenu loginFromMoblie={loginFromMoblie} closeSideMenu={closeSideMenu} />
                </div>
            </div>
            <div className="firstHeader not_mobile">
                <nav className="rightItems ">
                    <img alt="logo" src={logo} className="logo"></img>
                    <button onClick={() => {
                        setOpenMobile(!openMobile)
                    }} className="toggle_button tablet"><span></span><i className="fas fa-bars"></i>תפריט</button>
                    <ul className="first_header_items desktop_only">
                        <div>
                            <li className="first-item header-item">נדל"ן</li>
                            <div className="drop first-drop">
                                <div className="container">
                                    <ul className="drop-content">
                                        <li>דירות למכירה</li>
                                        <li>דירות להשכרה</li>
                                        <li>שותפים</li>
                                        <li>מסחרי</li>
                                        <li>חיפוש על גבי מפה</li>
                                    </ul>
                                    <ul className="drop-content">
                                        <li>כונס נכסים</li>
                                        <li>מדד הנדל"ן</li>
                                        <li>יד1 דירות חדשות</li>
                                        <li>הערכת שווי נכס</li>
                                        <li>משרדי תיווך בישראל</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <li className="second-item header-item">רכב</li>
                            <div className="drop second-drop">
                                <div className="container">
                                    <ul className="drop-content">
                                        <li>פרטי</li>
                                        <li>מסחרי</li>
                                        <li>ג'יפים</li>
                                        <li>אופנועים</li>
                                        <li>קטנועים</li>
                                        <li>מיוחדים</li>
                                        <li>אביזרים</li>
                                        <li>משאיות</li>
                                        <li>רכבי יוקרה</li>
                                        <li>כלי שייט</li>
                                    </ul>
                                    <ul className="drop-content">
                                        <li>קטלוג רכבים</li>
                                        <li>מחירון רכבים</li>
                                        <li>מכרזים וכינוס</li>
                                        <li>מימון רכב</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <li className="third-item header-item">יד שנייה</li>
                            <div className="drop third-drop">
                                <div className="container">
                                    <ul className="drop-content">
                                        <li>כל המוצרים</li>
                                        <li>מוצרי חשמל</li>
                                        <li>ריהוט</li>
                                        <li>עסקים למכירה</li>
                                        <li>ספורט</li>
                                        <li>סלולרי</li>
                                        <li>לתינוק ולילד</li>
                                        <li>הכל בחינם!</li>
                                    </ul>
                                    <ul className="drop-content">
                                        <li>קונסולות משחק</li>
                                        <li>מחשבים וציוד נלווה</li>
                                        <li>לגינה</li>
                                        <li>אופנה וטיפוח</li>
                                        <li>יד 2 מכל הלב</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <li className="fourth-item header-item">דרושים IL</li>
                            <div className="drop fourth-drop">
                                <div className="container">
                                    <ul className="drop-content">
                                        <li>חיפוש עבודה</li>
                                        <li>פרסום משרות</li>
                                        <li>כתיבת קורות חיים</li>
                                        <li>אודות החברות</li>
                                        <li>דרושים הייטק</li>
                                        <li>דרושים סטודנטים</li>
                                        <li>משרות ללא קו"ח</li>
                                        <li>כספים</li>
                                        <li>מכירות</li>
                                        <li>שירות לקוחות</li>
                                    </ul>
                                    <ul className="drop-content">
                                        <li>אדמיניסטרציה</li>
                                        <li>מהנדסים</li>
                                        <li>תחבורה</li>
                                        <li>מסעדנות/תיירות</li>
                                        <li>אבטחה</li>
                                        <li>בריאות</li>
                                        <li>בעלי מקצוע</li>
                                        <li>הדרכה/הוראה</li>
                                        <li>שיווק</li>
                                        <li>לתחומים נוספים</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <li className="fifth-item header-item">עסקים ומסחרי</li>
                            <div className="drop fifth-drop">
                                <div className="container">
                                    <ul className="drop-content">
                                        <li>עסקים למכירה</li>
                                        <li>נדל"ן מסחרי</li>
                                        <li>ציוד לעסקים</li>
                                        <li>זכיינות</li>
                                        <li>משרדים להשכרה</li>
                                        <li>חללי עבודה משותפים</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <li className="six-item header-item">חיות מחמד</li>
                            <div className="drop six-drop">
                                <div className="container">
                                    <ul className="drop-content">
                                        <li>כלבים</li>
                                        <li>חתולים</li>
                                        <li>תוכים ובעלי כנף</li>
                                        <li>דגים</li>
                                        <li>זוחלים</li>
                                        <li>מכרסמים</li>
                                        <li>סוסים</li>
                                        <li>תרנגולות</li>
                                        <li>חיות משק</li>
                                        <li>חמוסים</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <li className="seven-item header-item">בעלי מקצוע</li>
                            <div className="drop seven-drop">
                                <div className="container">
                                    <ul className="drop-content">
                                        <li>מכוני בדיקה ורישוי לרכב</li>
                                        <li>רחיצת רכב</li>
                                        <li>שמאי מקרקעין</li>
                                        <li>חומרי בניין</li>
                                        <li>אינסטלטור</li>
                                        <li>חשמלאים</li>
                                        <li>שיפוצים</li>
                                        <li>הובלות</li>
                                        <li>רהיטים</li>
                                        <li>חברות ניקוי והחזקה</li>
                                        <li>לכל בעלי החיים</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <li className="eight-item header-item">עוד...</li>
                            <div className="drop eight-drop">
                                <div className="container">
                                    <ul className="drop-content">
                                        <li>תיירות ונופש</li>
                                        <li>לימודים</li>
                                        <li>מגזין יד2</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </ul>
                </nav>
                <nav className="leftItems">
                    <div className="png_cont desktop_only">
                        <img className="png header_png" src={bell} alt="bell"></img>
                    </div>
                    <div className="png_cont">
                        <div className="user_div">
                            <img className="png header_png" src={heart} alt="heart"></img>
                        </div>
                    </div>
                    <div className="png_cont png_cont_user desktop_only">
                        {auth.user ?
                            <>
                                <div className="user_div user_div_connect">
                                    <div className="png header_png connect_png">
                                        <span>{auth.user.user.name.charAt(0)}{auth.user.user.last_name.charAt(0)}</span>
                                    </div>
                                    <span className="user_name_header">{auth.user.user.name} {auth.user.user.last_name}</span>
                                </div>
                                <div className="drop nine-drop">
                                    <div className="container">
                                        <ul className="drop-content">
                                            <li>איזור אישי</li>
                                            <li>השוואת רכבים</li>
                                            <li>חיפושים אחרונים</li>
                                            <li onClick={() => {
                                                logingOut()
                                            }}>התנתקות</li>
                                        </ul>
                                    </div>
                                </div>
                            </>
                            :
                            <>
                                <div className="user_div" onClick={() => {
                                    setOpenLogin(true)
                                    setRedirectUrl("/forsale")
                                }}>
                                    <img className="png nine-item" src={user} alt="user"></img>
                                </div>
                                <div className="drop nine-drop">
                                    <div className="container">
                                        <ul className="drop-content">
                                            <li>השוואת רכבים</li>
                                            <li>חיפושים אחרונים</li>
                                        </ul>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                    <div onClick={() => {
                        auth.user ?
                            history.push("/newApartment")
                            :
                            setOpenLogin(true)
                    }} className="newPost">+ פרסום מודעה חדשה</div>
                </nav>
            </div>
            <div className="secondHeader not_mobile">
                <div className="border"></div>
                <div className="second-wraper">
                    <div className="secondHeader_content">
                        <nav className="rightItems">
                            <ul className="first_header_items">
                                <NavLink to="/forsale" className="header-link" activeClassName="header-active-link">
                                    <li className="header-item">מכירה</li>
                                </NavLink>
                                <NavLink to="/forRent" className="header-link" activeClassName="header-active-link">
                                    <li className="header-item">השכרה</li>
                                </NavLink>
                                <li className="header-item">דירות שותפים</li>
                                <li className="header-item">נדל"ן מסחרי</li>
                            </ul>
                        </nav>
                        <nav className="leftItems">
                            <ul className="first_header_items">
                                <li className="header-item"><i className="fas fa-gavel"></i> כונס נכסים</li>
                                <li className="header-item"><i className="fas fa-chart-line"></i> מדד הנדל"ן</li>
                                <li className="header-item desktop_only"><img alt="" src={blueLogo} className="smallPictures"></img>יד 1 דירות חדשות</li>
                                <li className="header-item desktop_only"><img alt="" src={blackLogo} className="mediumPictures"></img>הערכת שווי נכס</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Header