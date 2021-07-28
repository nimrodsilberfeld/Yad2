import React, { useState } from "react";
import movie from "../img/movie.png"
import pen from "../img/pen.png"
import SearchArea from "./SearchArea";

const AddApartment2 = ({ AddApartment2Info, open, reOrderOpen }) => {
    const apartmentOptions = ["דירה", "דירת גן", "גג/פנטהאוז", "דופלקס", "דירת נופש", "מרתף/פרטר", "טריפלקס", "יחידת דיור", "סטודיו/לופט",]
    const housesOptions = ["בית פרטי/קוטג'", "דו משפחתי", "משק חקלאי/נחלה", "משק עזר",]
    const diffrentOptions = ["מגרשים", "דיור מוגן", "בניין מגורים", "מחסן", "חניה", "קב' רכישה/זכות לנכס", "כללי",]
    const [locationPicked, setLocationPicked] = useState(false)
    const [streetPicked, setStreetPicked] = useState(false)
    const [chosenApartmentType, setChosenApartmentType] = useState("")
    const [apartmentGroup, setApartmentGroup] = useState("")
    const [apartmentState, setApartmentState] = useState("")
    const [city, setCity] = useState("")
    const [street, setStreet] = useState("")
    const [floor, setFloor] = useState("")
    const [totalFloors, setTotalFloors] = useState("")
    const [neighborhood, setNeighborhood] = useState("")
    const [openType, setOpenType] = useState(false)
    const [propertyState, setPropertyState] = useState(false)
    const [houseNum, setHouseNum] = useState("")
    const [noPillar] = useState([
        "דירת גן", "מרתף/פרטר", "דיור מוגן"
    ])
    const [noFloorLine] = useState([
        "בית פרטי/קוטג'", "מגרשים", "דו משפחתי", "מחסן", "קב' רכישה/זכות לנכס", "חניה"
    ])
    const [noFloor] = useState(["בניין מגורים"])

    const clickNext = () => {
        AddApartment2Info({
            chosenApartmentType, apartmentGroup, apartmentState,
            city, street, houseNum, floor, totalFloors, neighborhood
        })
    }

    const clickApartmentType = (e) => {
        console.log(getEventTarget(e))
        setChosenApartmentType(getEventTarget(e) + "")
        if (apartmentOptions.includes(getEventTarget(e) + "")) {
            setApartmentGroup("דירות")
            console.log("דירות")
        }
        if (housesOptions.includes(getEventTarget(e) + "")) {
            setApartmentGroup("בתים")
            console.log("בתים")
        }
        if (diffrentOptions.includes(getEventTarget(e) + "")) {
            setApartmentGroup("כללי")
            console.log("כללי")
        }
        setOpenType(false)
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
    const locationGotPicked = () => {
        setLocationPicked(true)
    }
    const streetGotPicked = () => {
        setStreetPicked(true)
    }
    return (
        <div className={open.open ? "step" : "closeStep"}>
            <div className="step_content">
                <div className="numIcon"><span className="number">{open.checked ? <i className="fas fa-check"></i> : "2"}</span></div>
                <div className={open.open ? "step_title" : "step_title close_title"}>
                    <h2>כתובת הנכס</h2>
                    {open.open ?
                        <div className="recommendation">
                            <img alt="" className="movie_img" src={movie} />
                            <span><span className="highlight">המלצה שלנו</span> העלאת וידאו של הנכס תמשוך יותר מתעניינים למודעה שלך</span>
                        </div>
                        :
                        <div className="edit_type" onClick={() => {
                            reOrderOpen(1)
                        }}>
                            <img alt="" src={pen} />
                            <span>עריכה</span>
                        </div>
                    }
                </div>
                <div className="apartment_info">
                    <h4>סימנו עבורך את שדות החובה. שלא נפספס פרט חשוב</h4>
                    <div className="apartment_info_inputs">
                        <div className="info_input">
                            <span className="info_label">סוג הנכס</span>
                            <button onClick={() => {
                                setOpenType(!openType)
                            }}>
                                <span>{chosenApartmentType ? chosenApartmentType : "דירה או אולי פנטהאוז?"}</span>
                                <i className={openType ? "fas fa-chevron-up " : "fas fa-chevron-up close"}></i>
                            </button>
                            {openType &&
                                <div className="drop_property_type">
                                    <ul onClick={(e) => {
                                        clickApartmentType(e)
                                        //console.log(getEventTarget(e))
                                        // setChosenApartmentType(getEventTarget(e))
                                    }}>
                                        <li>
                                            <span>דירה</span>
                                        </li>
                                        <li>
                                            <span>דירת גן</span>
                                        </li>
                                        <li>
                                            <span>בית פרטי/קוטג'</span>
                                        </li>
                                        <li>
                                            <span>גג/פנטהאוז</span>
                                        </li>
                                        <li>
                                            <span>מגרשים</span>
                                        </li>
                                        <li>
                                            <span>דופלקס</span>
                                        </li>
                                        <li>
                                            <span>דירת נופש</span>
                                        </li>
                                        <li>
                                            <span>דו משפחתי</span>
                                        </li>
                                        <li>
                                            <span>מרתף/פרטר</span>
                                        </li>
                                        <li>
                                            <span>טריפלקס</span>
                                        </li>
                                        <li>
                                            <span>יחידת דיור</span>
                                        </li>
                                        <li>
                                            <span>משק חקלאי/נחלה</span>
                                        </li>
                                        <li>
                                            <span>משק עזר</span>
                                        </li>
                                        <li>
                                            <span>דיור מוגן</span>
                                        </li>
                                        <li>
                                            <span>בניין מגורים</span>
                                        </li>
                                        <li>
                                            <span>סטודיו/לופט</span>
                                        </li>
                                        <li>
                                            <span>מחסן</span>
                                        </li>
                                        <li>
                                            <span>קב' רכישה/זכות לנכס</span>
                                        </li>
                                        <li>
                                            <span>חניה</span>
                                        </li>
                                        <li>
                                            <span>כללי</span>
                                        </li>
                                    </ul>
                                </div>
                            }
                        </div>
                        <div className="info_input">
                            <span className="info_label">מצב הנכס</span>
                            <button onClick={() => {
                                setPropertyState(!propertyState)
                            }}>
                                <span>{apartmentState ? apartmentState : "משופץ? חדש מקבלן?"}</span>
                                <i className={openType ? "fas fa-chevron-up " : "fas fa-chevron-up close"}></i>
                            </button>
                            {propertyState &&
                                <div className="drop_property_type">
                                    <ul
                                    //  onClick={(e) => {
                                    //     setApartmentState(getEventTarget(e))
                                    //     console.log(getEventTarget(e))
                                    //     setPropertyState(false)
                                    // }}
                                    >
                                        <li onClick={() => {
                                            setApartmentState("חדש מקבלן")
                                        }}>
                                            <span>חדש מקבלן (לא גרו בו בכלל)</span>
                                        </li>
                                        <li onClick={() => {
                                            setApartmentState("חדש")
                                        }}>
                                            <span>חדש(נכס בן עד 5 שנים)</span>
                                        </li>
                                        <li onClick={() => {
                                            setApartmentState("משופץ")
                                        }}>
                                            <span>משופץ(שופץ ב5 שנים האחרונות)</span>
                                        </li>
                                        <li onClick={() => {
                                            setApartmentState("שמור")
                                        }}>
                                            <span>במצב שמור(במצב טוב, לא שופץ)</span>
                                        </li>
                                        <li onClick={() => {
                                            setApartmentState("דרוש שיפוץ")
                                        }}>
                                            <span>דרוש שיפוץ(זקוק לעבודת שיפוץ)</span>
                                        </li>

                                    </ul>
                                </div>
                            }
                        </div>
                        <div className="info_input">
                            <span className="info_label">ישוב</span>
                            <input value={city} onChange={(e) => {
                                if (locationPicked) {
                                    setLocationPicked(false)
                                }
                                setStreet("")
                                setCity(e.target.value)
                            }} placeholder="איפה נמצא הנכס?" />
                            {!locationPicked &&
                                <SearchArea place={city} setSearchLocation={setCity} locationGotPicked={locationGotPicked} />
                            }
                        </div>
                        <div className="info_input">
                            <span className="info_label">רחוב</span>
                            <input disabled={!locationPicked} value={street} onChange={(e) => {
                                setStreet(e.target.value)
                            }} placeholder="הכנסת שם הרחוב" />
                            {!streetPicked &&
                                <SearchArea prevPlace={city} place={street} setSearchLocation={setStreet} locationGotPicked={streetGotPicked} />
                            }
                        </div>
                        <div className="info_input">
                            <span className="info_label">מס' בית</span>
                            <input className="houseNum"
                                value={houseNum} onChange={(e) => {
                                    setHouseNum(e.target.value.replace(/[^\d]+/g, ''))
                                }} />
                        </div>
                        {!noFloorLine.includes(chosenApartmentType) &&
                            <div className="info_input_line">
                                {!noFloor.includes(chosenApartmentType) &&
                                    <div className="info_input">
                                        <span className="info_label">קומה</span>
                                        <input value={floor} onChange={(e) => {
                                            setFloor(e.target.value)
                                        }} placeholder="הכנסת מספר קומה" />
                                    </div>
                                }
                                <div className="info_input">
                                    <span className="info_label">סה"כ קומות בבניין</span>
                                    <input value={totalFloors} onChange={(e) => {
                                        setTotalFloors(e.target.value)
                                    }} placeholder='הכנסת סה"כ קומות' />
                                </div>
                                {!noPillar.includes(chosenApartmentType) &&
                                    <div className="last_check">
                                        <input type="checkbox" />
                                        <span>על עמודים</span>
                                    </div>
                                }
                            </div>
                        }
                        <div className="info_input">
                            <span className="info_label">שכונה</span>
                            <input value={neighborhood} onChange={(e) => {
                                setNeighborhood(e.target.value)
                            }} />
                        </div>
                        <div className="info_input">
                            <span className="info_label">איזור מכירה</span>
                            <input />
                        </div>
                        <div className="checkbox_info">
                            <input type="checkbox" />
                            <span>אני רוצה לקבל עדכון חודשי במייל עם הערכת שווי מעודכנת עבור הנכס, עסקאות באזור והצעות מקצועיות מיועצי נדל"ן</span>
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
export default AddApartment2