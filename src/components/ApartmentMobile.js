import React, { useState } from "react"
// import { ApartmentContext } from "../context/apartmentContext"
// import MobileHeader from "./MobileHeader"
import UpperMobileHeader from "./UpperMoblieHeader"
import whatsapp from "../img/whatsapp_no_bg.svg"
import facebook from "../img/facebook.svg"
import email from "../img/email.svg"
import share from "../img/native_share.svg"
import ImageSlideShow from "./ImageSlideShow"
const ApartmentMobile = ({ closeSlideForMoblie, apartment, hidingForSale, stopHideForSale }) => {
    // const { apartments } = useContext(ApartmentContext)
    console.log(apartment)
    const [readMore, setReadMore] = useState(false)
    const [apartment_contain] = useState([...apartment.propertyFeatures])
    const [open_popup, setOpenPopup] = useState(false)
    const [openImageShow_mobile, setOpenImageShow_mobile] = useState(false)
    const closeSlide = () => {
        setOpenImageShow_mobile(false)
    }
    return (
        <div className="ApartmentMobile mobile_only">
            {open_popup &&
                <>
                    <div className="y2_backdrop y2-sidenav-backdrop openBackdrop"
                        onClick={() => {
                            setOpenPopup(false)
                        }}
                    ></div>
                    < div className="contact_popup_container ">
                        <div className="contact_popup_content ">
                            <h1>{apartment.owner.name}</h1>
                            <button>{apartment.owner.phone}</button>
                            <span>שליחת דוא"ל למפרסם</span>
                        </div>
                    </div>
                </>
            }
            {
                openImageShow_mobile &&
                <ImageSlideShow images={apartment.images} closeSlide={closeSlide} />
            }
            <div className="mobile_header mobile_only show_menu">
                <UpperMobileHeader closeSlideForMoblie={closeSlideForMoblie} backButton={true} hidingForSale={hidingForSale} stopHideForSale={stopHideForSale} />
            </div>
            <div className="contact_btn_wrapper">
                <button className="contact_btn_mobile" onClick={() => {
                    setOpenPopup(true)
                }}>
                    הצגת מספר טלפון
                </button>
            </div>
            <div className="main_mobile_apartment">
                <div className="top_mobile_apartment">
                    <div className="main_mobile_upper_title">
                        <span>דירה למכירה {apartment.location.city}</span>
                        <span>עודכן היום</span>
                    </div>
                    <div className="top_section">
                        <div className="mobile_image_container">
                            <div className="like_btn">
                                <div className="like_btn_wrapper">
                                    <button className="like_icon y2i_like"><i className="far fa-heart heart_icon"></i></button>
                                </div>
                            </div>
                            <div className="plus_image_mobile">
                                <div className="plus_content">
                                    <i className="fas fa-copy"></i>
                                    <span>{apartment.images.length - 1}+</span>
                                    {/* <span>{apartment.images.length - 1}+</span> */}
                                </div>
                            </div>
                            <div onClick={() => {
                                setOpenImageShow_mobile(true)
                            }}>
                                <img alt="main_img" src={apartment.images[0]} />
                            </div>
                        </div>
                        <div className="main_mobile_content">
                            <div className="wrapper_mobile_content">
                                <div className="price">{apartment.propertyInfo.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ₪</div>
                                <h4 className="main_title">{apartment.location.street} {apartment.location.number}</h4>
                                {/* <span className="location_description">גג/פנטהאוז, הל"ה, גבעתיים</span> */}
                                <span className="location_description">{apartment.propertyType.subType},{apartment.location.neighborhood},{apartment.location.city}</span>
                                <div className="table">
                                    <div className="cell">
                                        <span className="value">{apartment.propertyInfo.rooms}</span>
                                        <span className="label">חדרים</span>
                                    </div>
                                    <div className="cell">
                                        <span className="value">{apartment.propertyInfo.floor}</span>
                                        <span className="label">קומה</span>
                                    </div>
                                    <div className="cell">
                                        <span className="value">{apartment.propertyInfo.size}</span>
                                        <span className="label">מ"ר</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="middle_section">
                        <div className="tabs_navigation">
                            <ul className="toggle_tabs">
                                <li className="active">
                                    <label className="y2_btn">
                                        <span>על הנכס</span>
                                    </label>
                                </li>
                                <li>
                                    <label className="y2_btn">
                                        <span>איך השכונה?</span>
                                    </label>
                                </li>
                                <li>
                                    <label className="y2_btn">
                                        <span>עסקאות באיזור</span>
                                    </label>
                                </li>
                                <li>
                                    <label className="y2_btn">
                                        <span>בית ספר וגני ילדים</span>
                                    </label>
                                </li>
                                <li>
                                    <label className="y2_btn">
                                        <span>איך השכנים?</span>
                                    </label>
                                </li>
                                <li>
                                    <label className="y2_btn">
                                        <span>תחבורה ציבורית</span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div className="apartment_description_mobile">
                            <h3 className="middle_title">על הכנס</h3>
                            <div className={readMore ? "show_more_container open" : "show_more_container"}>
                                <p className="show_more_content">
                                    {apartment.description}
                                </p>
                                {!readMore && <div className="gardient_mobile"></div>}
                            </div>
                            <div className="show_more_btn" onClick={() => {
                                setReadMore(!readMore)
                            }}>{readMore ? "קרא פחות" : "קרא עוד"}</div>
                        </div>
                        <div className="navigation_table">
                            <button className="nav_button">
                                <i className="fas fa-map-marker-alt"></i>
                                <span>מפה</span>
                            </button>
                            <button className="nav_button">
                                <i className="fas fa-location-arrow"></i>
                                <span>ניווט</span>
                            </button>
                        </div>
                        <ul className="details_wrapper">
                            <li className="details_item">
                                <span className="item_title">מצב הנכס</span>
                                <span className="item_value">במצב שמור</span>
                            </li>
                            <li className="details_item">
                                <span className="item_title">תאריך כניסה</span>
                                <span className="item_value">16/2/21</span>
                            </li>
                            <li className="details_item">
                                <span className="item_title">קומות בבנין</span>
                                <span className="item_value">3</span>
                            </li>
                            <li className="details_item">
                                <span className="item_title">מרפסות</span>
                                <span className="item_value">1</span>
                            </li>
                            <li className="details_item">
                                <span className="item_title">חניות</span>
                                <span className="item_value">ללא</span>
                            </li>
                        </ul>
                        <div className="share_menu">
                            <div className="share_tags">
                                <div className="whatsapp_wrapper share_tag">
                                    <img alt="wahtapp" src={whatsapp} />
                                </div>
                                <div className="facebook_wrapper share_tag">
                                    <img alt="facebook" src={facebook} />
                                </div>
                                <div className="email_wrapper share_tag">
                                    <img alt="email" src={email} />
                                </div>
                                <div className="share_wrapper share_tag">
                                    <img alt="share" src={share} />
                                </div>
                            </div>
                            <button className="link_button">
                                <i className="fas fa-link"></i>
                                <span>העתקת קישור</span>
                            </button>
                        </div>
                        <div className="additional_info_mobile">
                            <div className="additional_info_content">
                                <h3>מה יש בנכס?</h3>
                                <div className="additional_info_items">
                                    <div className={apartment_contain.includes("מיזוג") ? "additional_info_item include" : "additional_info_item"}>
                                        <i className="fas fa-times"></i>
                                        <i className="fas fa-check"></i>
                                        <span>מיזוג</span>
                                    </div>
                                    <div className={apartment_contain.includes("מעלית") ? "additional_info_item include" : "additional_info_item"}>
                                        <i className="fas fa-times"></i>
                                        <i className="fas fa-check"></i>
                                        <span>מעלית</span>
                                    </div>
                                    <div className={apartment_contain.includes("גישה לנכים") ? "additional_info_item include" : "additional_info_item"}>
                                        <i className="fas fa-times"></i>
                                        <i className="fas fa-check"></i>
                                        <span>גישה לנכים</span>
                                    </div>
                                    <div className={apartment_contain.includes('ממ"ד') ? "additional_info_item include" : "additional_info_item"}>
                                        <i className="fas fa-times"></i>
                                        <i className="fas fa-check"></i>
                                        <span>ממ"ד</span>
                                    </div>
                                    <div className={apartment_contain.includes("דלתות פנדור") ? "additional_info_item include" : "additional_info_item"}>
                                        <i className="fas fa-times"></i>
                                        <i className="fas fa-check"></i>
                                        <span>דלתות פנדור</span>
                                    </div>
                                    <div className={apartment_contain.includes("ריהוט") ? "additional_info_item include" : "additional_info_item"}>
                                        <i className="fas fa-times"></i>
                                        <i className="fas fa-check"></i>
                                        <span>ריהוט</span>
                                    </div>
                                    <div className={apartment_contain.includes("סורגים") ? "additional_info_item include" : "additional_info_item"}>
                                        <i className="fas fa-times"></i>
                                        <i className="fas fa-check"></i>
                                        <span>סורגים</span>
                                    </div>
                                    <div className={apartment_contain.includes("מטבח כשר") ? "additional_info_item include" : "additional_info_item"}>
                                        <i className="fas fa-times"></i>
                                        <i className="fas fa-check"></i>
                                        <span>מטבח כשר</span>
                                    </div>
                                    <div className={apartment_contain.includes("משופצת") ? "additional_info_item include" : "additional_info_item"}>
                                        <i className="fas fa-times"></i>
                                        <i className="fas fa-check"></i>
                                        <span>משופצת</span>
                                    </div>
                                    <div className={apartment_contain.includes("מחסן") ? "additional_info_item include" : "additional_info_item"}>
                                        <i className="fas fa-times"></i>
                                        <i className="fas fa-check"></i>
                                        <span>מחסן</span>
                                    </div>
                                    <div className={apartment_contain.includes("מזגן תדיראן") ? "additional_info_item include" : "additional_info_item"}>
                                        <i className="fas fa-times"></i>
                                        <i className="fas fa-check"></i>
                                        <span>מזגן תדיראן</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mobile_apartment_footer">
                            <div className="apartment_footer_content">
                                <div>
                                    <i className="fas fa-exclamation-circle"></i>
                                    <span>דיווח על בעיה</span>
                                </div>
                                <div>
                                    <span>מספר מודעה:58244144</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default ApartmentMobile