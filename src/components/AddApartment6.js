import React, { useState } from "react"
import pen from "../img/pen.png"

const AddApartment6 = ({ AddApartment6Info, open, reOrderOpen }) => {
    const [name, setName] = useState("")
    const [localPhone, setLocalPhone] = useState(false)
    const [areaPhone, setAreaPhone] = useState("052")
    const [mainNumber, setMainNumber] = useState("")
    const [terms, setTerms] = useState(false)
    const [showError, setError] = useState(false)
    const clickNext = () => {
        if (!terms) {
            setError(true)
            return
        }
        let phone = areaPhone + mainNumber
        //console.log(phone)
        AddApartment6Info({ phone, name })
    }

    const updateNum = (number) => {
        console.log(number.target.value)
        let cloneNum = number.target.value
        if (cloneNum.length <= 7) {
            setMainNumber(cloneNum)
        }
        // if (cloneNum.length < 7) {
        //     setMainNumber(cloneNum)
        // }
    }
    const getEventTarget = (e) => {
        e = e || window.event;
        if (e.target.children[0]) {
            return e.target.children[0].innerHTML
        } else {
            return e.target.innerHTML
        }
        //return e.target.children[0].innerHTML;
    }
    return (
        <div className={open.open ? "step" : "closeStep"}>
            <div className="step_content">
                <div className="numIcon"><span className="number">{open.checked ? <i className="fas fa-check"></i> : "6"}</span></div>
                <div className={open.open ? "step_title" : "step_title close_title"}>
                    <h2>פרטים ליצירת קשר</h2>
                    {!open.open &&
                        <div className="edit_type" onClick={() => {
                            reOrderOpen(5)
                        }}>
                            <img alt="" src={pen} />
                            <span>עריכה</span>
                        </div>
                    }
                </div>
                <div className="apartment_info">
                    <h4>רגע לפני שמפרסמים את המודעה, נבדוק שפרטי הקשר נכונים</h4>
                    <div className="contact_info_input_line info_item">
                        <div className="contact_name">
                            <span className="info_label">שם איש קשר</span>
                            <input value={name} onChange={(e) => {
                                setName(e.target.value)
                            }}></input>
                        </div>
                        <div className="phone_section">
                            <div className="contact_phone_input">
                                <span className="info_label">טלפון ראשי</span>
                                <input value={mainNumber} onChange={(e) => {
                                    // updateNum(e.target.value.replace(/[^\d]+/g, ''))
                                    updateNum(e)
                                }} autoComplete="tel-local"></input>
                            </div>
                            <div className="info_input phone_zone">
                                <span className="hidden"> a</span>
                                <button onClick={() => {
                                    setLocalPhone(!localPhone)
                                }}>
                                    <span>{areaPhone}</span>
                                    <i className="fas fa-chevron-up close"></i>
                                </button>
                                {localPhone &&
                                    <div className="drop_property_type">
                                        <ul onClick={(e) => {
                                            console.log(getEventTarget(e))
                                            setAreaPhone(getEventTarget(e))
                                            setLocalPhone(false)
                                        }}>
                                            <li>050</li>
                                            <li>051</li>
                                            <li>052</li>
                                            <li>053</li>
                                            <li>054</li>
                                            <li>055</li>
                                            <li>058</li>
                                        </ul>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="info_input checked_button">
                            <span className="hidden"> a</span>
                            <button id="checked_number_button">
                                <i className="fas fa-check"></i>
                                <span>המספר אומת</span>
                            </button>
                        </div>
                    </div>
                    <div className="add_contact">
                        <i className="fas fa-plus"></i>
                        <span > הוספת איש קשר נוסף</span>
                    </div>
                    <div className="checkBox_inputs">
                        <div className="checkBox_input">
                            <input type="checkbox" checked={true} onChange={() => { }} />
                            <span>אני רוצה שיופיע מספר וירטואלי במודעה שלי <i className="fas fa-question-circle"></i></span>
                        </div>
                        <div className="checkBox_input">
                            <input type="checkbox" checked={true} onChange={() => { }} />
                            <span>אני רוצה לקבל שיחות גם בסופי שבוע <i className="fas fa-question-circle"></i></span>
                        </div>
                    </div>
                    <div className="info_input">
                        <span>דוא"ל</span>
                        <input type="email" autoComplete="email" />
                    </div>
                    <div className={showError ? "checkBox_input_highlight error" : "checkBox_input_highlight"}>
                        <input value={terms} onChange={() => {
                            setTerms(!terms)
                            if (!terms) {
                                setError(false)
                            }
                        }} type="checkbox" className="big_checkbox" />
                        <span>קראתי ואישרתי את <span className="orange_span">התקנון,</span><span className="info_label_second">זה חשוב</span></span>
                    </div>
                    {showError &&
                        <span className="errorSpan">חובה לסמן אם תרצו להמשיך</span>
                    }
                    <div style={{ padding: " 10px 10px 10px 10px" }}>
                        <input type="checkbox" className="big_checkbox" />
                        <span>אני רוצה שתשלחו לי עדכונים במייל</span>
                    </div>
                    <div className="bottom_buttons">
                        <button className="hidden"><span>חזרה</span></button>
                        <button className="next_button" onClick={() => {
                            clickNext()
                        }}>המשך לבחירת מסלול</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddApartment6