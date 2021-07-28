import React, { useState } from "react"
import lightBulb from "../img/lightbulb.png"
import pen from "../img/pen.png"

const AddApartment4 = ({ AddApartment4Info, open, reOrderOpen }) => {
    const [meter, setMeter] = useState("")
    // const [totalMeter, setTotalMeter] = useState("")
    const [price, setPrice] = useState("")
    const [enterDate, setEnterDate] = useState("")
    const clickNext = () => {
        AddApartment4Info(meter, price, enterDate)
    }
    return (
        <div className={open.open ? "step" : "closeStep"}>
            <div className="step_content">
                <div className="numIcon"><span className="number">{open.checked ? <i className="fas fa-check"></i> : "4"}</span></div>
                <div className={open.open?"step_title":"step_title close_title"}>
                    <h2>תשלומים, תאריכים ועוד</h2>
                    {open.open
                        ?
                        <div className="recommendation_Light">
                            <img alt="" className="lightbulb" src={lightBulb} />
                            <span className="lightBulb_span"><span className="highlight">גם לנו היה קשה להאמין!</span> מודעות שעולות עם מחירים לא עגולים מוכרות מהר יותר</span>
                        </div>
                        :
                        <div className="edit_type" onClick={() => {
                            reOrderOpen(3)
                        }}>
                            <img alt="" src={pen} />
                            <span>עריכה</span>
                        </div>
                    }
                </div>
                <div className="apartment_info">
                    <div className="info_input">
                        <span >מ"ר בנוי</span>
                        <input value={meter} onChange={(e) => {
                            setMeter(e.target.value)
                        }} placeholder='כמה מ"ר יש בדירה?' />
                    </div>
                    <div className="info_input">
                        <span className="info_label">גודל במ"ר סך הכל</span>
                        <input />
                    </div>
                    <div className="info_input">
                        <span >מחיר</span>
                        <div className="amount_input_wrapper">
                            <div className="shekel_icon"><i className="fas fa-shekel-sign"></i></div>
                            <input value={price.replace(/[^\d]+/g, '')} onChange={(e) => {
                                setPrice(e.target.value.replace(/[^\d]+/g, ''))
                            }} placeholder="סכום מינימלי 100,000" />
                        </div>
                    </div>
                    <div className="info_input_line">
                        <div className="info_input">
                            <span >תאריך כניסה</span>
                            <div className="amount_input_wrapper">
                                <input className="date_input" type="date" onChange={(e) => {
                                    console.log(e.target.valueAsNumber)
                                    setEnterDate(e.target.valueAsNumber)
                                }} />
                            </div>
                        </div>
                        <div className="last_check">
                            <input type="checkbox" />
                            <span>מיידי</span>
                        </div>
                    </div>
                    <div className="bottom_buttons">
                        <button className="btn"><span>חזרה</span></button>
                        <button className="next_button" onClick={() => {
                            clickNext()
                        }}>להמשיך לשלב הבא</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddApartment4