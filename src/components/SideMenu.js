import React, { useContext, useState } from "react"
import house from "../img/house.png"
import car from "../img/car.png"
import couch from "../img/couch.png"
import suitcase from "../img/suitcase.png"
import paw from "../img/paw.png"
import palmtree from "../img/palm-tree.png"
import graduationcap from "../img/graduation-cap.png"
import user from "../img/user.png"
import { AuthContext } from "../context/authContext"
import { logout } from "../fetchRequest/fetchRequest"
import { setLogoutAction } from "../action/authAction"
import { useHistory } from "react-router-dom"
const SideMenu = ({ closeSideMenu, loginFromMoblie }) => {
    const history = useHistory()
    const { auth, dispatchAuth } = useContext(AuthContext)
    const [realState, setRealState] = useState(false)
    const [carMobile, setCar] = useState(false)
    const [secondHand, setSecondHand] = useState(false)
    const [wanted, setWanted] = useState(false)
    const [buisnes, setBuisness] = useState(false)
    const [pets, setPets] = useState(false)
    const [worker, setWorker] = useState(false)

    const logingOut = () => {
        logout(auth.user.token).then(() => {
            localStorage.clear()
            dispatchAuth(setLogoutAction())
            history.push("/")
        }, (err) => {
            console.log(err)
        })
    }
    return (
        <nav className="menu_container">
            <button onClick={() => { closeSideMenu() }} className="close_button">X</button>
            <div className="mobile_menu_top_section">
                <div className="personal_area">
                    {auth.user ?
                        <div className="connected_mobile">
                            <div className="hidden"></div>
                            <div className="right_connect_item">
                                <div className="name_icon">
                                    <span>{auth.user.user.name.charAt(0)}{auth.user.user.last_name.charAt(0)}</span>
                                </div>
                                <div className="name_private_area">
                                    <span>{auth.user.user.name} {auth.user.user.last_name}</span>
                                    <span >לאזור אישי</span>
                                </div>
                            </div>
                            <div className="left_connect_item">
                                <span onClick={() => {
                                    logingOut()
                                }}>התנתקות</span>
                            </div>
                        </div>
                        :
                        <div className="user_icon" onClick={() => {
                            closeSideMenu()
                            loginFromMoblie()
                        }}>
                            <div>
                                <img alt="" className="pngMedium" src={user} alt="user"></img>
                            </div>
                            <span>התחברות</span>
                        </div>
                    }
                </div>
                <button onClick={()=>{
                    history.push("/newApartment")
                }} className="newPostMobile">פרסום מודעה</button>
                <div className="link_container">
                    <button className="my_alert_link">
                        <i className="far fa-bell"></i>
                        <span>התראות שלי</span>
                        <span id="label_customize">חדש</span>
                    </button>
                    <button className="my_alert_link">
                        <i className="far fa-heart"></i>
                        <span>מודעות שאהבתי</span>
                    </button>
                    <button className="my_alert_link">
                        <i className="fas fa-search"></i>
                        <span>חיפושים אחרונים</span>
                    </button>
                    <button className="my_alert_link">
                        <i className="fas fa-exchange-alt"></i>
                        <span>השוואת רכבים</span>
                    </button>
                </div>
            </div>
            <div className="search_link_section">
                <span className="search_link_section_title">חיפוש מהיר באתר</span>
                <ul>
                    <li className="search_link">
                        <img alt="" src={house} />
                        <span>נדל"ן</span>
                    </li>
                    <li className="search_link">
                        <img alt="" src={car} />
                        <span>רכב</span>
                    </li>
                    <li className="search_link">
                        <img alt="" src={couch} />
                        <span>יד שנייה</span>
                    </li>
                    <li className="search_link">
                        <img alt="" className="suitcase" src={suitcase} />
                        <span>עסקים ומסחרי</span>
                    </li>
                    <li className="search_link">
                        <i className="fas fa-search-dollar"></i>
                        <span>דרושים</span>
                    </li>
                    <li className="search_link">
                        <img alt="" src={paw} />
                        <span>חיות מחמד</span>
                    </li>
                    <li className="search_link">
                        <img alt="" src={palmtree} />
                        <span>תיירות ונופש</span>
                    </li>
                    <li className="search_link">
                        <img alt="" src={graduationcap} />
                        <span>לימודים</span>
                    </li>
                </ul>
            </div>
            <div className="feed_links_section">
                <span className="search_link_section_title">ניווט לפי קטגוריות</span>
                <ul>
                    <li>
                        <div className="show_content">
                            <button onClick={() => {
                                setRealState(!realState)
                            }} className="content_header">
                                <span>נדל"ן</span>
                                <i className="fas fa-chevron-up close"></i>
                            </button>
                            <div className={realState ? "content_feed open_Mobile_feed" : "content_feed"} >
                                <ul >
                                    <li><span>דירות למכירה</span></li>
                                    <li><span>דירות להשכרה</span></li>
                                    <li><span>דירות שותפים</span></li>
                                    <li><span>נדל"ן מסחרי</span></li>
                                    <li><span>חיפוש נכסים על המפה</span></li>
                                    <li><span>כונס נכסים</span></li>
                                    <li><span>מדד הנדל"ן</span></li>
                                    <li><span>יד1 דירות חדשות</span></li>
                                    <li><span>הערכת שווי נכס</span></li>
                                    <li><span>משרדי תיווך בישראל</span></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="show_content">
                            <button onClick={() => {
                                setCar(!carMobile)
                            }} className="content_header">
                                <span>רכב</span>
                                <i className="fas fa-chevron-up close"></i>
                            </button>
                            <div className={carMobile ? "content_feed open_Mobile_feed" : "content_feed"}>
                                <ul>
                                    <li><span>פרטי</span></li>
                                    <li><span>מסחרי</span></li>
                                    <li><span>ג'יפים</span></li>
                                    <li><span>אופנועים</span></li>
                                    <li><span>קטנועים</span></li>
                                    <li><span>מיוחדים</span></li>
                                    <li><span>אביזרים</span></li>
                                    <li><span>משאיות</span></li>
                                    <li><span>כלי שייט</span></li>
                                    <li><span>קטלוג רכבים</span></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="show_content">
                            <button onClick={() => {
                                setSecondHand(!secondHand)
                            }} className="content_header">
                                <span>יד שנייה</span>
                                <i className="fas fa-chevron-up close"></i>
                            </button>
                            <div className={secondHand ? "content_feed open_Mobile_feed" : "content_feed"}>
                                <ul>
                                    <li><span>כל המוצרים</span></li>
                                    <li><span>מוצרי חשמל</span></li>
                                    <li><span>ריהוט</span></li>
                                    <li><span>עסקים למכירה</span></li>
                                    <li><span>ספורט</span></li>
                                    <li><span>סלולרי</span></li>
                                    <li><span>לתינוק ולילד</span></li>
                                    <li><span>הכל בחינם!</span></li>
                                    <li><span>קונסולות משחק</span></li>
                                    <li><span>מחשבים וציוד נלווה</span></li>
                                    <li><span>לגינה</span></li>
                                    <li><span>אופנה וטיפוח</span></li>
                                    <li><span>בזאר יד2 מכל הלב</span></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="show_content">
                            <button onClick={() => {
                                setWanted(!wanted)
                            }} className="content_header">
                                <span>דרושים IL</span>
                                <i className="fas fa-chevron-up close"></i>
                            </button>
                            <div className={wanted ? "content_feed open_Mobile_feed" : "content_feed"}>
                                <ul>
                                    <li><span>חיפוש עבודה</span></li>
                                    <li><span>פרסום משרות</span></li>
                                    <li><span>כתיבת קורות חיים</span></li>
                                    <li><span>אודות החברות</span></li>
                                    <li><span>דרושים הייטק</span></li>
                                    <li><span>דרושים סטודנטים</span></li>
                                    <li><span>משרות ללא קו"ח</span></li>
                                    <li><span>כספים</span></li>
                                    <li><span>מכירות</span></li>
                                    <li><span>שירות לקוחות</span></li>
                                    <li><span>אדמיניסטרציה</span></li>
                                    <li><span>מהנדסים</span></li>
                                    <li><span>תחבורה</span></li>
                                    <li><span>מסעדנות\תיירות</span></li>
                                    <li><span>אבטחה</span></li>
                                    <li><span>בריאות</span></li>
                                    <li><span>בעלי מקצוע</span></li>
                                    <li><span>הדרכה\הוראה</span></li>
                                    <li><span>שיווק</span></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="show_content">
                            <button onClick={() => {
                                setBuisness(!buisnes)
                            }} className="content_header">
                                <span>עסקים ומסחרי</span>
                                <i className="fas fa-chevron-up close"></i>
                            </button>
                            <div className={buisnes ? "content_feed open_Mobile_feed" : "content_feed"}>
                                <ul>
                                    <li><span></span></li>
                                    <li><span>כל מה שהעסק צריך</span></li>
                                    <li><span>עסקים למכירה</span></li>
                                    <li><span>נדל"ן מסחרי</span></li>
                                    <li><span>ציוד לעסקים</span></li>
                                    <li><span>זכיינות</span></li>
                                    <li><span>חללי עבודה משותפים</span></li>
                                    <li><span>משרדים להשכרה</span></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="show_content">
                            <button onClick={() => {
                                setPets(!pets)
                            }} className="content_header">
                                <span>חיות מחמד</span>
                                <i className="fas fa-chevron-up close"></i>
                            </button>
                            <div className={pets ? "content_feed open_Mobile_feed" : "content_feed"}>
                                <ul>
                                    <li><span>כלבים</span></li>
                                    <li><span>חתולים</span></li>
                                    <li><span>תוכים ובעלי כנף</span></li>
                                    <li><span>דגים</span></li>
                                    <li><span>זוחלים</span></li>
                                    <li><span>מכרסמים</span></li>
                                    <li><span>סוסים</span></li>
                                    <li><span>תרנגולים</span></li>
                                    <li><span>חיות משק</span></li>
                                    <li><span>חמוסים</span></li>
                                    <li><span>כל בעלי החיים</span></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="show_content">
                            <button onClick={() => {
                                setWorker(!worker)
                            }} className="content_header">
                                <span>בעלי מקצוע</span>
                                <i className="fas fa-chevron-up close"></i>
                            </button>
                            <div className={worker ? "content_feed open_Mobile_feed" : "content_feed"}>
                                <ul>
                                    <li><span>מכוני בדיקה ורישוי לרכב</span></li>
                                    <li><span>רחיצת רכב</span></li>
                                    <li><span>שמאי מקרקעין</span></li>
                                    <li><span>חומרי בניין</span></li>
                                    <li><span>אינסטלטור</span></li>
                                    <li><span>חשמלאים</span></li>
                                    <li><span>שיפוצים</span></li>
                                    <li><span>הובלות</span></li>
                                    <li><span>רהיטים</span></li>
                                    <li><span>חברות ניקוי והחזקה</span></li>
                                    <li><span>לכל בעלי המקצוע</span></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="show_content">
                            <button className="content_header">
                                <span>תיירות ונופש</span>
                            </button>
                        </div>
                    </li>
                    <li>
                        <div className="show_content">
                            <button className="content_header">
                                <span>לימודים</span>
                            </button>
                        </div>
                    </li>
                    <li>
                        <div className="show_content">
                            <button className="content_header">
                                <span>מגזין יד 2</span>
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default SideMenu