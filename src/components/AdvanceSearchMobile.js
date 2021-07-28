import React, { useState } from "react"
import PropertyFeatures from "./PropertyFeatures"
const AdvanceSearchMobile = ({updateFeatures}) => {
    const [floor] = useState([
        { value: "הכל" }, { value: "מרתף/פרטר" }, { value: "1" }, { value: "2" },
        { value: "3" }, { value: "4" }, { value: "5" },
        { value: "6" }, { value: "7" }, { value: "8" },
        { value: "9" }, { value: "10" },])

    const [fromFloor, setFromFloor] = useState("")
    const [toFloor, setToFloor] = useState("")
    const [fromSize, setFromSize] = useState("")
    const [toSize, setToSize] = useState("")
    const [enteryDate, setEnteryDate] = useState(null)
    const getTodayDate = () => {
        let date = new Date()
        console.log(date)
    }
    return (
        <div>
            <div className="advance_section">
                <PropertyFeatures updateFeatures={updateFeatures}/>
            </div>

            <div className="rooms_ranger">
                <h3 className="search_title">קומה</h3>
                <div className="price_range_btn_wrapper">
                    <select value={fromFloor} onChange={(e) => {
                        setFromFloor(e.target.value)
                    }} className="search_select rooms_select">
                        {floor.map((option, index) => {
                            return <option key={index}>{option.value}</option>
                        })}
                    </select>
                    <div className="seperate">_</div>
                    <select value={toFloor} onChange={(e) => {
                        setToFloor(e.target.value)
                    }} className="search_select rooms_select">
                        {floor.map((option, index) => {
                            return <option key={index} value={option.value}>{option.value}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className="range_wrapper">
                <h3 className="search_title">גודל דירה (במ"ר)</h3>
                <div className="range_inputs_wrapper">
                    <input value={fromSize} onChange={(e) => {
                        setFromSize(e.target.value)
                    }} className="range_input" placeholder="מ-"></input>
                    <div className="seperate">_</div>
                    <input value={toSize} onChange={(e) => {
                        setToSize(e.target.value)
                    }} className="range_input" placeholder="עד-"></input>
                </div>
            </div>
            <div className="enterDate_wrapper">
                <h3 className="search_title">תאריך כניסה</h3>
                <div>
                    <input type="date" onChange={(e) => {
                        setEnteryDate(e.target.valueAsNumber)
                    }} data-date-format="DD-YY-MM" />
                </div>
                <div>
                    <label className="enterNow">
                        <input onChange={(e) => {
                            if (e.target.checked) {
                                getTodayDate()
                            }
                        }} type="checkbox" />
                        <span>כניסה מיידית </span>
                    </label>
                </div>
            </div>
            <div className="free_search">
                <div className="free_search_content">
                    <h3 className="search_title">חיפוש חופשי</h3>
                    <input type="text"></input>
                </div>

            </div>
        </div>
    )
}
export default AdvanceSearchMobile