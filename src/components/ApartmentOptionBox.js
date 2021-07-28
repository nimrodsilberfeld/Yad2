import React from "react"

const ApartmentOptionsBox = ({ option, isChecked, onClick }) => {
    return (
        <li>
            <div>
                <input className="input_type_mobile" checked={isChecked} value={option} onChange={onClick} type="checkbox"></input>
                <p>{option}</p>
            </div>
        </li>
    )
}
export default ApartmentOptionsBox