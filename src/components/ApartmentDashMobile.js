import React from "react"
//import { useHistory } from 'react-router-dom'
// import elevator from "../img/elevator2.png"
// import airconditioner from "../img/air-conditioner.png"
// import ImageSlideShow from "./ImageSlideShow"

const ApartmentDashMobile = ({ apartment, openSlideForMoblie }) => {
    //const history = useHistory()
    //const [clicked, setClicked] = useState(false)
    //const [pLength, setLength] = useState(0)
    //const [tooLong, setTooLong] = useState(false)
    //const [params, setParams] = useState(false)
    // const [readMore, setReadMore] = useState(false)
    // const [fixPhone, setPhone] = useState("")
    // const [seller_info, setSeller] = useState(false)
    // useEffect(() => {
    //     let phone = apartment.owner.phone + ""
    //     phone = phone.slice(0, 3) + "-" + phone.slice(3)
    //     setPhone(phone)
    //     let paragraph = apartment.description.length
    //     if (paragraph > 196) {
    //         setTooLong(true)
    //     }
    // }, [tooLong])

   
    return (
        <div>
            <div className="apartment_feed" onClick={()=>{
                openSlideForMoblie(apartment)
            }}>
                <div className="color_container">
                    <div className= "right_col">
                        <div className= "image_container">
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
                    <div className= "middle_col">
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
                    <div className= "left_col">
                        <span className="left_title">{apartment.propertyInfo.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}<i className="fas fa-shekel-sign"></i></span>
                        <div className="left_hover_items">
                            {/* {!clicked && <span className="rows_subtitle  left_span moreDetails">לחצו לפרטים</span>} */}
                            <span className="rows_subtitle left_span updateToday">עודכן היום</span>
                        </div>
                    </div>
                </div>
               
            </div >

        </div>
    )
}
export default ApartmentDashMobile