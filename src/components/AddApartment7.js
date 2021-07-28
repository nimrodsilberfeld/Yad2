import React from "react"
import crown from "../img/crown.png"
import vip_spaceship from "../img/rocketShip_VIP.png"
import check from "../img/check.png"
import cancel from "../img/cancel.png"
import premium_spacehip from "../img/rocketShip_Bold.png"
import clouds from "../img/rocketShip_Free.png"
// import multer from "multer"
import pen from "../img/pen.png"

const AddApartment7 = ({ AddApartment7Info, open, reOrderOpen }) => {


    return (
        <div className={open.open ? "step" : "closeStep"}>
            <form>

            </form>
            <div className="step_content">
                <div className="numIcon"><span className="number">{open.checked ? <i className="fas fa-check"></i> : "7"}</span></div>
                <div className={open.open?"step_title":"step_title close_title"}>
                    <h2>סיום פרסום</h2>
                    {!open.open &&
                        <div className="edit_type" onClick={() => {
                            reOrderOpen(6)
                        }}>
                            <img alt="" src={pen} />
                            <span>עריכה</span>
                        </div>
                    }
                </div>
                <div className="sub_title_wrapper">
                    <h4>זהו, אנחנו בסוף. לנו נשאר לשמור את המודעה שלך, לך נשאר לבחור את מסלול הפרסום.</h4>
                    <h4>אגב, רצינו לספר לך שיש באתר עוד <span className="circle_number_wrapper"> <span className="circle_number"> 283 </span> </span>
                        מודעות דומות לשלך באזור חדרה והסביבה שמתחרות על
                        תשומת
                        הלב של הקונים!
                        המלצה שלנו?
                        <span className="highlight_yellow"> לשדרג </span>
                        את המודעה, להופיע לפני כולם ולהתקדם להסכם תיק תק</h4>
                </div>
                <div className="apartment_info order_info">
                    <div className="bottom_border"></div>
                    <h4>באיזה מסלול לפרסם את המודעה? זה הרגע לבלוט מעל כולם</h4>
                    <div className="choose_order_type">

                        <div className="order_type basic_type" onClick={() => {
                            AddApartment7Info(0)
                        }}>
                            <div className="order_type_top_area">
                                <div className="vip_header">
                                    <div className="vip_title">בסיסי</div>
                                    {/* <div className="recommended_container">
                                        <span className="recommended_img_container">
                                            <img alt="" src={crown} />
                                        </span>
                                        <span>מומלץ</span>
                                    </div> */}
                                </div>
                                <div className="order_type_img_container clouds_container">
                                    <img alt="" src={clouds} />
                                </div>
                            </div>
                            <div className="order_descriptions">
                                <div className="order_description">
                                    <img alt="" src={check} />
                                    <span>מודעה רגילה בצבע אפור</span>
                                </div>
                                <div className="order_description canceld">
                                    <img alt="" src={cancel} />
                                    <span>הקפצה אוטומטית לחסכון בזמן</span>
                                </div>
                                <button className="btn_order">
                                    <span><span className="bigger_font free">חינם</span></span>
                                </button>
                            </div>

                        </div>
                        <div className="order_type vip_type" onClick={() => {
                            AddApartment7Info(2)
                        }}>
                            <div className="order_type_top_area">
                                <div className="vip_header">
                                    <div className="vip_title">vip</div>
                                    <div className="recommended_container">
                                        <span className="recommended_img_container">
                                            <img alt="" src={crown} />
                                        </span>
                                        <span>מומלץ</span>
                                    </div>
                                </div>
                                <div className="order_type_img_container">
                                    <img alt="" src={vip_spaceship} />
                                </div>
                            </div>
                            <div className="order_descriptions">
                                <div className="order_description">
                                    <img alt="" src={check} />
                                    <span>מודעה מודגשת בצבע צהוב</span>
                                </div>
                                <div className="order_description">
                                    <img alt="" src={check} />
                                    <span>הקפצה אוטומטית לחסכון בזמן</span>
                                </div>
                                <div className="order_description">
                                    <img alt="" src={check} />
                                    <span>מופיעה מעל מודעות אפורות וורודות</span>
                                </div>
                                <button className="btn_order btn_vip">
                                    <span><span className="bigger_font">199 <i className="fas fa-shekel-sign"></i></span> / 28 ימים</span>
                                </button>
                            </div>
                        </div>
                        <div className="order_type recommend_type" onClick={() => {
                            AddApartment7Info(1)
                        }}>
                            <div className="order_type_top_area">
                                <div className="vip_header">
                                    <div className="vip_title">מודגשת</div>
                                    {/* <div className="recommended_container">
                                        <span className="recommended_img_container">
                                            <img alt="" src={crown} />
                                        </span>
                                        <span>מומלץ</span>
                                    </div> */}
                                </div>
                                <div className="order_type_img_container">
                                    <img alt="" src={premium_spacehip} />
                                </div>
                            </div>
                            <div className="order_descriptions">
                                <div className="order_description">
                                    <img alt="" src={check} />
                                    <span>מודעה מודגשת בצבע ורוד</span>
                                </div>
                                <div className="order_description">
                                    <img alt="" src={check} />
                                    <span>הקפצה אוטומטית לחסכון בזמן</span>
                                </div>
                                <button className="btn_order">
                                    <span><span className="bigger_font">99 <i className="fas fa-shekel-sign"></i></span> / 28 ימים</span>
                                </button>
                            </div>

                        </div>
                    </div>
                    <div style={{ padding: " 10px 10px 10px 10px" }}>
                        <input type="checkbox" checked={true} onChange={() => { }} className="big_checkbox" />
                        <span>אני מאשר קבלת דיוור פרסומי הקשור למודעה שפרסמתי באתר יד 2 (להסרה - יש להוריד את הסימון בתיבה)</span>
                    </div>


                </div>
            </div>
        </div>
    )
}
export default AddApartment7