import React, { useState } from "react"
import ApartmentOptionsBox from "./ApartmentOptionBox"
const PopupApartmentType = ({
    closePopup,
    countTypes,
    updateProperty,
    apartmentOptions,
    setApartmentOptions,
    setCountBuilding,
    housesOptions,
    setHousesOptions,
    setCountHouses,
    diffrentOptions,
    setDiffrentOptions,
    setCountDifferent,
    updateAllProperty,
}) => {
    const [subApartments, setSubApartments] = useState(false)
    const [subHouse, setSubHouse] = useState(false)
    const [subDiffrent, setSubDiffrent] = useState(false)

    const handleAllCheckedApartment = (e, type) => {
        let clone
        switch (type) {
            case "apartment":
                clone = [...apartmentOptions]
                break;
            case "house":
                clone = [...housesOptions]
                break;
            case "diffrent":
                clone = [...diffrentOptions]
                break;
            default:
                break;
        }

        clone.map((option) => {
            option.isChecked = e.target.checked
        })
        switch (type) {
            case "apartment":
                countTypes("building", clone)
                updateProperty("building", clone)
                updateAllProperty(apartmentOptions, setCountBuilding, setApartmentOptions)
                //setApartmentOptions(clone)

                break;
            case "house":
                countTypes("houses", clone)
                updateProperty("houses", clone)
                updateAllProperty(housesOptions, setCountHouses, setHousesOptions)
                // setHousesOptions(clone)
                break;
            case "diffrent":
                countTypes("different", clone)
                updateProperty("different", clone)
                updateAllProperty(diffrentOptions, setCountDifferent, setDiffrentOptions)
                //setDiffrentOptions(clone)
                break;
            default:
                break;
        }
    }
    const handleCheckChildElement = (event, type) => {
        let clone
        switch (type) {
            case "apartment":
                clone = [...apartmentOptions]
                break;
            case "house":
                clone = [...housesOptions]
                break;
            case "diffrent":
                clone = [...diffrentOptions]
                break;
            default:
                break;
        }
        clone.forEach(option => {
            if (option.value === event.target.value) {
                option.isChecked = event.target.checked
            }
        })
        switch (type) {
            case "apartment":
                countTypes("building", clone)
                updateProperty("building", clone)
                //setApartmentOptions(clone)
                break;
            case "house":
                countTypes("houses", clone)
                updateProperty("houses", clone)
                //setHousesOptions(clone)
                break;
            case "diffrent":
                countTypes("different", clone)
                updateProperty("different", clone)
                //setDiffrentOptions(clone)
                break;
            default:
                break;
        }
        //console.log(apartmentOptions)
    };
    return (
        <div className="popUp">
            <div className="popup_title">
                <span>כל סוגי הנכסים</span>
                <i onClick={() => {
                    closePopup()
                }} className="fas fa-chevron-left"></i>
            </div>
            <div className="main_pop_content">
                <span className="clear_span">איפוס</span>
                <div className="dropdown mobile_dropdown">
                    <ul className="propertyDropdown">
                        <li>
                            <div className="dropdown_search">
                                <div className="dropdown_search_right dropdown_search_mobile">
                                    <input onChange={(e) => {
                                        handleAllCheckedApartment(e, "apartment")
                                    }} type="checkbox"></input>
                                    <p>דירות</p>
                                </div>
                                <div>
                                    <i onClick={() => {
                                        setSubApartments(!subApartments)
                                    }} className={subApartments ? "fas fa-chevron-up open" : "fas fa-chevron-up close"}></i>
                                </div>
                            </div>
                        </li>
                        {subApartments &&
                            <div className="subDrop">
                                <ul className="subDrop_ul">
                                    {apartmentOptions.map(option => {
                                        // { console.log(option) }
                                        return (
                                            <ApartmentOptionsBox
                                                key={option.id}
                                                option={option.value}
                                                isChecked={option.isChecked}
                                                onClick={(e) => { handleCheckChildElement(e, "apartment") }}
                                            />
                                        )
                                    })}
                                </ul>
                            </div>
                        }
                        <li>
                            <div className="dropdown_search">
                                <div className="dropdown_search_right dropdown_search_mobile">
                                    <input onChange={(e) => {
                                        handleAllCheckedApartment(e, "house")
                                    }} type="checkbox"></input>
                                    <p>בתים</p>
                                </div>
                                <div>
                                    <i onClick={() => {
                                        setSubHouse(!subHouse)
                                        // clickSubHouse()
                                    }} className={subHouse ? "fas fa-chevron-up open" : "fas fa-chevron-up close"}></i>
                                </div>
                            </div>
                        </li>
                        {subHouse &&
                            <div className="subDrop">
                                <ul className="subDrop_ul">
                                    {housesOptions.map(option => {
                                        // { console.log(option) }
                                        return (
                                            <ApartmentOptionsBox
                                                key={option.id}
                                                option={option.value}
                                                isChecked={option.isChecked}
                                                onClick={(e) => { handleCheckChildElement(e, "house") }}
                                            />
                                        )
                                    })}
                                </ul>
                            </div>
                        }
                        <li>
                            <div className="dropdown_search">
                                <div className="dropdown_search_right dropdown_search_mobile">
                                    <input onChange={(e) => {
                                        handleAllCheckedApartment(e, "diffrent")
                                    }} type="checkbox"></input>
                                    <p>סוגים נוספים</p>
                                </div>
                                <div>
                                    <i onClick={() => {
                                        setSubDiffrent(!subDiffrent)
                                        //clickSubDiffrent()
                                    }} className={subDiffrent ? "fas fa-chevron-up open" : "fas fa-chevron-up close"}></i>
                                </div>
                            </div>
                        </li>
                        {subDiffrent &&
                            <div className="subDrop">
                                <ul className="subDrop_ul">
                                    {diffrentOptions.map(option => {
                                        // { console.log(option) }
                                        return (
                                            <ApartmentOptionsBox
                                                key={option.id}
                                                option={option.value}
                                                isChecked={option.isChecked}
                                                onClick={(e) => { handleCheckChildElement(e, "diffrent") }}
                                            />
                                        )
                                    })}
                                </ul>
                            </div>
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default PopupApartmentType