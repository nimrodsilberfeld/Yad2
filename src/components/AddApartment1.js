import React, { useState } from "react"
import house from "../img/house2.png"
import houseRent from "../img/houseRent.png"
import keys from "../img/keys.png"
import building from "../img/building.png"
import pen from "../img/pen.png"
// import check from "../img/check.png"
const AddApartment1 = ({ AddApartment1Info, open, reOrderOpen }) => {

    const [choosenType, setChoosenType] = useState([
        { type: "מכירה", chosen: true },
        { type: "השכרה", chosen: false },
        { type: "שותפים", chosen: false },
        { type: "מסחרי", chosen: false }
    ])



    const clickChooseType = (type) => {
        let clone = [...choosenType]
        if (clone[type].chosen) {
            clone[type].chosen = false
            setChoosenType(clone)
            AddApartment1Info(choosenType[type])
            return
        } else {
            clone.map((item, index) => {
                if (index !== type) {
                    //item.chosen = false
                    return item.chosen = false
                } else {
                    //item.chosen = true
                    return item.chosen = true
                }
            })
            setChoosenType(clone)
            AddApartment1Info(choosenType[type])
        }
    }

    return (
        <div className={open.open ? "step" : "closeStep"}>
            <div className="step_content">
                <div className="numIcon"><span className="number">{open.checked ? <i className="fas fa-check"></i> : "1"}</span></div>
                <div className={open.open?"step_title":"step_title close_title"}>
                    {open.open ? <h2>באיזו קטגוריה נפרסם היום?</h2> : <h2>אני רוצה למכור נכס</h2>}
                    {!open.open &&
                        <div className="edit_type" onClick={() => {
                            reOrderOpen(0)
                        }}>
                            <img alt="" src={pen} />
                            <span>עריכה</span>
                        </div>
                    }
                </div>
                <div className="choose_type">
                    <button onClick={() => {
                        clickChooseType(0)
                    }} className="choose_type_button">
                        <img alt="" className={choosenType[0].chosen ? "choosen_type" : ""} src={house} />
                        <span>מכירה</span>
                    </button>
                    <button onClick={() => {
                        clickChooseType(1)
                    }} className="choose_type_button">
                        <img alt="" className={choosenType[1].chosen ? "choosen_type" : ""} src={houseRent} />
                        <span>השכרה</span>
                    </button>
                    <button onClick={() => {
                        clickChooseType(2)
                    }} className="choose_type_button">
                        <img alt="" className={choosenType[2].chosen ? "choosen_type" : ""} src={keys} />
                        <span>שותפים</span>
                    </button>
                    <button onClick={() => {
                        clickChooseType(3)
                    }} className="choose_type_button">
                        <img alt="" className={choosenType[3].chosen ? "choosen_type" : ""} src={building} />
                        <span>מסחרי</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default AddApartment1