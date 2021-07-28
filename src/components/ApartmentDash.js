import React, { useEffect, useState } from "react"
//import { useHistory } from 'react-router-dom'
import elevator from "../img/elevator2.png"
import airconditioner from "../img/air-conditioner.png"
// import ImageSlideShow from "./ImageSlideShow"

const ApartmentDash = ({ apartment, openSlide }) => {
    //const history = useHistory()
    const [clicked, setClicked] = useState(false)
    //const [params, setParams] = useState(false)
    //const [pLength, setLength] = useState(0)
    const [tooLong] = useState(apartment.description.length>196?true:false)
    const [readMore, setReadMore] = useState(false)
    const [fixPhone] = useState("")
    const [seller_info, setSeller] = useState(false)
    
    useEffect(() => {
        // let phone = apartment.owner.phone + ""
        // phone = phone.slice(0, 3) + "-" + phone.slice(3)
        // setPhone(phone)
        // let paragraph = apartment.description.length
        // if (paragraph > 196) {
        //     setTooLong(true)
        // }
    }, [])

    const clickReadMore = () => {
        setReadMore(!readMore)
    }
    // const closeSlide = () => {
    //     document.body.classList.remove('slide-open')
    //     setParams(false)
    // }
    // const openSlide = () => {
    //     document.body.classList.add('slide-open')
    //     setParams(true)
    // }

    return (
        <div>
            {/* {params && <ImageSlideShow closeSlide={closeSlide} />} */}
            <div className={clicked ? "apartment_feed_open" : "apartment_feed"} >
                <div onClick={() => { setClicked(!clicked) }} className={clicked ? "color_container_open" : "color_container"}>
                    <div className={clicked ? "right_col_open" : "right_col"}>
                        <div onClick={() => {
                            openSlide(apartment)

                            // history.push(`forsale/${apartment.id}`)
                            // openSlide()
                        }} className={clicked ? "image_container_open" : "image_container"}>
                            <div className="like_btn">
                                <div className="like_btn_wrapper">
                                    <button className="like_icon y2i_like"><i className="far fa-heart heart_icon"></i></button>
                                </div>
                            </div>
                            <div className="plus_image">
                                <div className="plus_content">
                                    <i className="fas fa-copy"></i>
                                    <span>{apartment.images.length - 1}+</span>
                                </div>
                            </div>
                            <div className="image_0">
                                <img alt=""

                                    className="feed_image" src={apartment.images[0]} />
                            </div>

                        </div>
                        <div className="rows">
                            <span>
                                <span className="rows_title">{apartment.location.street} {apartment.location.number}</span>
                                <span className="rows_subtitle">{apartment.propertyType.subType}, {apartment.location.neighborhood},{apartment.location.city} </span>
                                {/* <span className="rows_subtitle">דופלקס,רמת חן,רמת גן</span> */}
                            </span>
                        </div>
                    </div>
                    <div className={clicked ? "middle_col_open" : "middle_col"}>
                        <div className="middle_col_data">
                            <span className="rows_title">{apartment.propertyInfo.rooms}</span>
                            <span className="rows_subtitle">חדרים</span>
                        </div>
                        <div className="middle_col_data">
                            <span className="rows_title">{apartment.propertyInfo.floor}</span>
                            <span className="rows_subtitle">קומה</span>
                        </div>
                        <div className="middle_col_data">
                            <span className="rows_title">{apartment.propertyInfo.size}</span>
                            <span className="rows_subtitle">מ"ר</span>
                        </div>
                    </div>
                    <div className={clicked ? "left_col_open" : "left_col"}>
                        <span className="left_title">{apartment.propertyInfo.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}<i className="fas fa-shekel-sign"></i></span>
                        <div className="left_hover_items">
                            {!clicked && <span className="rows_subtitle  left_span moreDetails">לחצו לפרטים</span>}
                            <span className={clicked ? "rows_subtitle left_span_open updateToday_open" : "rows_subtitle left_span updateToday"}>עודכן היום</span>
                        </div>
                    </div>
                </div>
                {clicked &&
                    <div className="accordion">
                        <div className="wrapper">
                            <div className="contact_seller">
                                <button onClick={() => {
                                    setSeller(!seller_info)
                                }} className="contact_seller_button"><i className="fas fa-phone-volume"></i>הצגת מספר טלפון</button>
                                {seller_info &&
                                    <div className="seller_info">
                                        <div className="seller_name">
                                            <span>{apartment.owner.name}</span>
                                        </div>
                                        <div className="seller_name">
                                            <span>{fixPhone}</span>
                                        </div>
                                        <div className="seller_name seller_mail">
                                            <span>שליחת דוא"ל למפרסם</span>
                                        </div>
                                    </div>
                                }
                            </div>
                            <div className="main_content">
                                <div className="content">
                                    <div className="dynamic_content">
                                        <div className="about_content">
                                            <h3>תיאור הנכס</h3>
                                            <div className="show_more_content">
                                                <div className={readMore ? "show-more-container_open" : "show-more-container"}>
                                                    <p className={tooLong ? "show_more_contents_short" : "show_more_contents"} >
                                                        {apartment.description}
                                                    </p>
                                                    {tooLong &&
                                                        <div>
                                                            {!readMore &&
                                                                <div className="gardient"></div>
                                                            }
                                                            <span className="read_more" onClick={() => {
                                                                clickReadMore()
                                                            }}>{readMore ? "קרא פחות" : "קרא עוד"}</span>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="info_items">
                                            <div className="info_item">
                                                <span>מצב הנכס <span className="info_item_bold">{apartment.propertyInfo.state}</span></span>
                                            </div>
                                            <div className="info_item">
                                                <span>תאריך כניסה <span className="info_item_bold">{new Date(apartment.propertyInfo.entryDate).toLocaleDateString()}</span></span>
                                            </div>
                                            <div className="info_item">
                                                <span> קומות בבנין <span className="info_item_bold">{apartment.propertyInfo.building_floor}</span></span>
                                            </div>
                                            <div className="info_item">
                                                <span>מרפסות <span className="info_item_bold">{apartment.propertyInfo.balcony > 0 ? apartment.propertyInfo.balcony : "אין"}</span></span>
                                            </div>
                                            <div className="info_item">
                                                <span>חניות <span className="info_item_bold">{apartment.propertyInfo.parking > 0 ? apartment.propertyInfo.parking : "אין"}</span></span>
                                            </div>
                                            <div className="info_item">
                                                <span>חסכו בענק ברכישת דירה<i className="fas fa-chevron-up"></i></span>
                                            </div>
                                        </div>
                                        <div className="additional_info">
                                            <div className="additional_info_title">
                                                <h3>מה יש בכנס?</h3>
                                                <span>להשוואת מחירי הובלה<i className="fas fa-chevron-up"></i></span>
                                            </div>
                                            <div className="items_container">
                                                <div className={apartment.propertyFeatures.includes("מיזוג אוויר") ? "info_feature" : "info_feature exclude"}>
                                                    <i className="far fa-snowflake"></i>
                                                    <span>מיזוג אוויר</span>
                                                </div>
                                                <div className={apartment.propertyFeatures.includes("סורגים") ? "info_feature" : "info_feature exclude"}>
                                                    <i className="fas fa-border-all"></i>
                                                    <span>סורגים</span>
                                                </div>
                                                <div className={apartment.propertyFeatures.includes("מעלית") ? "info_feature" : "info_feature exclude"}>
                                                    <img alt="" src={elevator}></img>
                                                    <span>מעלית</span>
                                                </div>
                                                <div className={apartment.propertyFeatures.includes("מטבח כשר") ? "info_feature" : "info_feature exclude"}>
                                                    <i className="fas fa-faucet"></i>
                                                    <span>מטבח כשר</span>
                                                </div>
                                                <div className={apartment.propertyFeatures.includes("גישה לנכים") ? "info_feature" : "info_feature exclude"}>
                                                    <i className="fas fa-wheelchair"></i>
                                                    <span>גישה לנכים</span>
                                                </div>
                                                <div className={apartment.propertyFeatures.includes("משופצת") ? "info_feature" : "info_feature exclude"}>
                                                    <i className="fas fa-paint-roller"></i>
                                                    <span>משופצת</span>
                                                </div>
                                                <div className={apartment.propertyFeatures.includes('ממ"ד') ? "info_feature" : "info_feature exclude"}>
                                                    <i className="fas fa-user-shield"></i>
                                                    <span>ממ"ד</span>
                                                </div>
                                                <div className={apartment.propertyFeatures.includes("מחסן") ? "info_feature" : "info_feature exclude"}>
                                                    <i className="fas fa-archive"></i>
                                                    <span>מחסן</span>
                                                </div>
                                                <div className={apartment.propertyFeatures.includes("דלתות פנדור") ? "info_feature" : "info_feature exclude"}>
                                                    <i className="fas fa-door-closed"></i>
                                                    <span>דלתות פנדור</span>
                                                </div>
                                                <div className={apartment.propertyFeatures.includes("מזגן תדיראן") ? "info_feature" : "info_feature exclude"}>
                                                    <img alt="" src={airconditioner} />
                                                    <span>מזגן תדיראן</span>
                                                </div>
                                                <div className={apartment.propertyFeatures.includes("ריהוט") ? "info_feature" : "info_feature exclude"}>
                                                    <i className="fas fa-couch"></i>
                                                    <span>ריהוט</span>
                                                </div>
                                                <div className={apartment.propertyFeatures.includes("יחידת דיור") ? "info_feature" : "info_feature exclude"}>
                                                    <i className="fas fa-home"></i>
                                                    <span>יחידת דיור</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="wrapper_footer">
                                <div className="share-strip-icons">
                                    <div className="whatsapp footer_icon">
                                        <i className="fab fa-whatsapp"></i>
                                    </div>
                                    <div className="facebook_div footer_icon">
                                        <i className="fab fa-facebook facebook"></i>
                                    </div>
                                    <div className="mail_icon footer_icon">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div className="footer_icon">
                                        <i className="fas fa-print"></i>
                                    </div>
                                    <div className="footer_icon">
                                        <i className="fas fa-link"></i>
                                    </div>
                                    <div className="footer_icon">
                                        <i className="far fa-copy"></i>
                                    </div>
                                </div>
                                <div className="left_side">
                                    <h3>מצאתי טעות</h3>
                                    <span>מספר מודעה: {apartment.owner.phone}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div >

        </div>
    )
}
export default ApartmentDash