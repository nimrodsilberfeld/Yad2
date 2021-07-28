import React, { useContext, useEffect, useState } from "react"
import bell from "../img/bell.png"
import plus from "../img/add.png"
import glass from "../img/search.png"
import { setLocationFilter, setNewFilters, setTypeFilter } from "../action/filtersAction"
import { ApartmentContext } from "../context/apartmentContext"
import ApartmentOptionsBox from "./ApartmentOptionBox"
import SearchArea from "./SearchArea"

const SearchBox = ({ type }) => {

    const { filters, dispatchFilters } = useContext(ApartmentContext)
    const [propertyButton, setPropertyButton] = useState(false)
    const [roomsButton, setRoomsButton] = useState(false)
    const [subApartments, setSubApartments] = useState(false) //כפתור דירות בתוך חיפוש נכס
    const [subHouse, setSubHouse] = useState(false) //כפתור דירות בתוך חיפוש נכס
    const [subDiffrent, setSubDiffrent] = useState(false)
    const [fromRoom, setFromRooms] = useState(false)
    const [toRoom, setToRooms] = useState(false)
    const [fromFloor, setFromFloor] = useState(false)
    const [toFloor, setToFloor] = useState(false)
    const [advanceSearch, setAdvanceSearch] = useState(false)
    const [locationPicked, setLocationPicked] = useState(false)
    /////
    const [searchLocation, setSearchLocation] = useState("")
    const [fromRoomFilter, setFromRoomFilter] = useState("")
    const [toRoomFilter, setToRoomFilter] = useState("")
    const [fromPrice, setFromPrice] = useState("")
    const [toPrice, setToPrice] = useState("")
    const [enteryDate, setEnteryDate] = useState(null)
    const [propertyFeatures, setPropertyFeatures] = useState([
        "דלתות פנדור", "חניה", "מעלית", "מיזוג", "מרפסת", 'ממ"ד', "סורגים", "מחסן", "גישה לנכים", "משופצת", "מרוהטת", "בבלעדיות",
    ])
    const [propertyFeaturesList, setPropertyFeaturesList] = useState(
        new Array(12).fill(false)
    )
    const [filterFeature, setFilterFeature] = useState([])
    const [apartmentOptions, setApartmentOptions] = useState(
        [
            { id: 1, value: "דירה", isChecked: false },
            { id: 2, value: "דירת גן", isChecked: false },
            { id: 3, value: "גג/פנטהאוז", isChecked: false },
            { id: 4, value: "דופלקס", isChecked: false },
            { id: 5, value: "דירת נופש", isChecked: false },
            { id: 6, value: "מרתף/פרטר", isChecked: false },
            { id: 7, value: "טריפלקס", isChecked: false },
            { id: 8, value: "יחידת דיור", isChecked: false },
            { id: 9, value: "סטודיו/לופט", isChecked: false },

        ])
    const [housesOptions, setHousesOptions] = useState(
        [
            { id: 1, value: "בית פרטי/קוטג'", isChecked: false },
            { id: 2, value: "דו משפחתי", isChecked: false },
            { id: 3, value: "משק חקלאי/נחלה", isChecked: false },
            { id: 4, value: "משק עזר", isChecked: false },
        ])
    const [diffrentOptions, setDiffrentOptions] = useState(
        [
            { id: 1, value: "מגרשים", isChecked: false },
            { id: 2, value: "דיור מוגן", isChecked: false },
            { id: 3, value: "בניין מגורים", isChecked: false },
            { id: 4, value: "מחסן", isChecked: false },
            { id: 5, value: "חניה", isChecked: false },
            { id: 6, value: "קב' רכישה/זכות לנכס", isChecked: false },
            { id: 7, value: "כללי", isChecked: false },
        ])

    useEffect(() => {
        console.log(filters)
    }, [])

    const clickSearch = (e) => {
        e.preventDefault()
        dispatchFilters(
            //setLocationFilter(searchLocation),
            setNewFilters({
                locationFilter: searchLocation,
                apartmentOptions: apartmentOptions,
                housesOptions: housesOptions,
                diffrentOptions: diffrentOptions,
                fromRoomFilter: fromRoomFilter,
                toRoomFilter: toRoomFilter,
                priceFromFilter: fromPrice,
                priceToFilter: toPrice,
                featureOptions: filterFeature,
                enteryDate: enteryDate
            })
        )
        // console.log(filters)
    }

    const handleOnChangeFeature = (position) => {
        let newList = [...propertyFeaturesList]

        for (let i = 0; i < newList.length; i++) {
            if (i === position) {
                newList[i] = !newList[i]
                if (newList[i]) {
                    console.log("adding")
                    setFilterFeature([...filterFeature, propertyFeatures[i]])
                } else {
                    let clone = [...filterFeature]
                    clone = clone.filter((item) => {
                        return item != propertyFeatures[position]
                    })
                    console.log("removed ", clone)
                    setFilterFeature(clone)
                }
            }
        }
        console.log(newList)
        console.log(filterFeature)
        setPropertyFeaturesList(newList)
    }

    const getEventTarget = (e) => {
        e = e || window.event;
        return e.target.innerHTML;
    }

    const clickFromRoomFilter = (e) => {
        console.log(e.target.value)
    }
    const clickAdvanceSearch = (e) => {
        e.preventDefault()
        setAdvanceSearch(!advanceSearch)
    }
    const clickFromFloor = (e) => {
        e.preventDefault()
        setFromFloor(!fromFloor)
    }
    const clickToFloor = (e) => {
        e.preventDefault()
        setToFloor(!toFloor)
    }
    const clickFromRoom = (e) => {
        e.preventDefault()
        setFromRooms(!fromRoom)
    }
    const clickToRoom = (e) => {
        e.preventDefault()
        setToRooms(!toRoom)
    }
    const clickProprty = (e) => {
        e.preventDefault()
        setPropertyButton(!propertyButton)
    }
    const clickRooms = (e) => {
        e.preventDefault()
        setRoomsButton(!roomsButton)
    }
    const clickSubApartment = () => {
        //setDropProperty(!dropProperty)
        setSubApartments(!subApartments)
    }
    const clickSubHouse = () => {
        setSubHouse(!subHouse)
    }
    const clickSubDiffrent = () => {
        setSubDiffrent(!subDiffrent)
    }
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
                setApartmentOptions(clone)
                console.log(apartmentOptions)
                break;
            case "house":
                setHousesOptions(clone)
                console.log(housesOptions)
            case "diffrent":
                setDiffrentOptions(clone)
                console.log(diffrentOptions)
            default:
                break;
        }
    }
    const handleCheckChieldElement = (event, type) => {
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
                setApartmentOptions(clone)
                console.log(apartmentOptions)
                break;
            case "house":
                setHousesOptions(clone)
                console.log(housesOptions)
            case "diffrent":
                setDiffrentOptions(clone)
                console.log(diffrentOptions)
            default:
                break;
        }
        //console.log(apartmentOptions)
    };
    const locationGotPicked = () => {
        setLocationPicked(true)
    }
    return (
        <div className="searchBox not_mobile">
            <div className="searchBox_content">
                <div className="searchBox_title">
                    <h2>איזה נכס <span className="searchBox_title_type">{type}</span> תרצו לחפש?</h2>
                    <div className="mail">
                        <img alt="" className="png" src={bell}></img>
                        <p>קבלו התראה במייל על חיפוש</p>
                    </div>
                </div>
                <form>
                    <ul className="searchBox_inputs">
                        <li>
                            <div className="searchInput">
                                <p>חפשו אזור,עיר,שכונה או רחוב</p>
                                <input type="text" className="location_input" value={searchLocation} onChange={(e) => {
                                    if (locationPicked) {
                                        setLocationPicked(false)
                                    }
                                    setSearchLocation(e.target.value)
                                }} placeholder="לדוגמא:רחביה,ירושלים"></input>
                                {!locationPicked &&
                                    <SearchArea locationGotPicked={locationGotPicked} place={searchLocation} setSearchLocation={setSearchLocation} />
                                }
                            </div>
                        </li>
                        <li>
                            <div className="searchInput">
                                <p>סוג נכס</p>
                                <button className="propertyButton" onClick={(e) => {
                                    clickProprty(e)
                                }}> בחרו סוגי נכסים<i className={propertyButton ? "fas fa-chevron-up open" : "fas fa-chevron-up close"}></i></button>
                                {propertyButton &&
                                    <div className="dropdown">
                                        <ul className="propertyDropdown">
                                            <li>
                                                <div className="dropdown_search">
                                                    <div className="dropdown_search_right">
                                                        <input type="checkbox"></input>
                                                        <p>כל סוגי הנכסים</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="dropdown_search">
                                                    <div className="dropdown_search_right">
                                                        <input onChange={(e) => {
                                                            handleAllCheckedApartment(e, "apartment")
                                                        }} type="checkbox"></input>
                                                        <p>דירות</p>
                                                    </div>
                                                    <div>
                                                        <i onClick={() => {
                                                            clickSubApartment()
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
                                                                    onClick={(e) => { handleCheckChieldElement(e, "apartment") }}
                                                                />
                                                            )
                                                        })}
                                                    </ul>
                                                </div>
                                            }
                                            <li>
                                                <div className="dropdown_search">
                                                    <div className="dropdown_search_right">
                                                        <input onChange={(e) => {
                                                            handleAllCheckedApartment(e, "house")
                                                        }} type="checkbox"></input>
                                                        <p>בתים</p>
                                                    </div>
                                                    <div>
                                                        <i onClick={() => {
                                                            clickSubHouse()
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
                                                                    onClick={(e) => { handleCheckChieldElement(e, "house") }}
                                                                />
                                                            )
                                                        })}
                                                    </ul>
                                                </div>
                                            }
                                            <li>
                                                <div className="dropdown_search">
                                                    <div className="dropdown_search_right">
                                                        <input onChange={(e) => {
                                                            handleAllCheckedApartment(e, "diffrent")
                                                        }} type="checkbox"></input>
                                                        <p>סוגים נוספים</p>
                                                    </div>
                                                    <div>
                                                        <i onClick={() => {
                                                            clickSubDiffrent()
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
                                                                    onClick={(e) => { handleCheckChieldElement(e, "diffrent") }}
                                                                />
                                                            )
                                                        })}
                                                    </ul>
                                                </div>
                                            }
                                        </ul>
                                        <button className="chooseButton">בחירה</button>
                                    </div>
                                }
                            </div>
                        </li>
                        <li>
                            <div className="searchInput_rooms">
                                <p>חדרים</p>
                                <button className="roomButton left_rooms" onClick={(e) => {
                                    clickRooms(e)
                                }}> {fromRoomFilter && toRoomFilter ? toRoomFilter + "-" + fromRoomFilter : fromRoomFilter ? "מ-" + fromRoomFilter : toRoomFilter ? "עד-" + toRoomFilter : "חדרים"}<i className={roomsButton ? "fas fa-chevron-up open" : "fas fa-chevron-up close"}></i></button>
                                {roomsButton &&
                                    <div className="dropdownRooms">
                                        <div className="roomsDrop">
                                            <div className="roomsInput">
                                                <div className="buttonBackground1">
                                                    <button onClick={(e) => {
                                                        clickFromRoom(e)
                                                    }} className="roomButtonDrop">מ-<i className={fromRoom ? "fas fa-chevron-up open" : "fas fa-chevron-up close"}></i></button>
                                                </div>
                                                {fromRoom &&
                                                    <div className="roomsNumberFrom">
                                                        <ul onClick={(e) => {
                                                            console.log(getEventTarget(e))
                                                            if (getEventTarget(e) === "הכל") {
                                                                setFromRoomFilter("")
                                                            } else {
                                                                setFromRoomFilter(getEventTarget(e))
                                                            }
                                                            setFromRooms(false)
                                                        }} className="roomsNumberDropDown">
                                                            <li>הכל</li>
                                                            <li>1</li>
                                                            <li>1.5</li>
                                                            <li>2</li>
                                                            <li>2.5</li>
                                                            <li>3</li>
                                                            <li>3.5</li>
                                                            <li>4</li>
                                                            <li>4.5</li>
                                                            <li>5</li>
                                                            <li>5.5</li>
                                                            <li>6</li>
                                                            <li>6.5</li>
                                                            <li>7</li>
                                                            <li>7.5</li>
                                                            <li>8</li>
                                                            <li>8.5</li>
                                                            <li>9</li>
                                                            <li>9.5</li>
                                                            <li>10</li>
                                                            <li>10.5</li>
                                                            <li>11</li>
                                                            <li>11.5</li>
                                                            <li>12</li>
                                                        </ul>
                                                    </div>
                                                }
                                            </div>
                                            <div className="roomsInput">
                                                <div className="buttonBackground2">
                                                    <button onClick={(e) => {
                                                        clickToRoom(e)
                                                    }} className="roomButtonDrop">עד-<i className={toRoom ? "fas fa-chevron-up open" : "fas fa-chevron-up close"}></i></button>
                                                </div>
                                                {toRoom &&
                                                    <div className="roomsNumberFrom">
                                                        <ul onClick={(e) => {
                                                            console.log(getEventTarget(e))
                                                            if (getEventTarget(e) === "הכל") {
                                                                setToRoomFilter("")
                                                            } else {
                                                                setToRoomFilter(getEventTarget(e))
                                                            }
                                                            setToRooms(false)
                                                        }} className="roomsNumberDropDown">
                                                            <li>הכל</li>
                                                            <li>1</li>
                                                            <li>1.5</li>
                                                            <li>2</li>
                                                            <li>2.5</li>
                                                            <li>3</li>
                                                            <li>3.5</li>
                                                            <li>4</li>
                                                            <li>4.5</li>
                                                            <li>5</li>
                                                            <li>5.5</li>
                                                            <li>6</li>
                                                            <li>6.5</li>
                                                            <li>7</li>
                                                            <li>7.5</li>
                                                            <li>8</li>
                                                            <li>8.5</li>
                                                            <li>9</li>
                                                            <li>9.5</li>
                                                            <li>10</li>
                                                            <li>10.5</li>
                                                            <li>11</li>
                                                            <li>11.5</li>
                                                            <li>12</li>
                                                        </ul>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </li>
                        <li>
                            <div className="searchInput">
                                <p>מחיר</p>
                                <div className="priceInputsFilter">
                                    <input className="price_input" value={fromPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} onChange={(e) => {
                                        setFromPrice(e.target.value.replace(/[^\d]+/g, ''))
                                    }} placeholder="ממחיר"></input>
                                    <input className="price_input" value={toPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                        onChange={(e) => {
                                            setToPrice(e.target.value.replace(/[^\d]+/g, ''))
                                        }}
                                        placeholder="עד מחיר"></input>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className=" searchInput">
                                <p className="hidden">a</p>
                                <button onClick={(e) => {
                                    clickAdvanceSearch(e)
                                }} className="advanceSearchButton"><img alt="" src={plus} className="smallPng"></img> חיפוש מתקדם</button>
                            </div>
                        </li>
                        <li>
                            <div className=" searchInput">
                                <p className="hidden">a</p>
                                <button onClick={(e) => {
                                    clickSearch(e)
                                }} className="advanceSearchButton searchButton"><img alt="" src={glass} className="smallPng"></img> חיפוש</button>
                            </div>
                        </li>
                    </ul>
                </form>
            </div>
            {advanceSearch &&
                <div className="advanceSearchBox">
                    <div className="advanceSearchBox_content">
                        <span className="advanceSearch_title">מאפייני דירה</span>
                        <ul className="advanceSearch_row">
                            {propertyFeatures.map((feature, index) => {
                                return (
                                    <li key={index} className="advanceSearch_col">
                                        <div>
                                            <input onChange={() => handleOnChangeFeature(index)} checked={propertyFeaturesList[index]} type="checkbox"></input>
                                            <span>{feature}</span>
                                        </div>
                                    </li>
                                )
                            })}

                        </ul>
                        <ul className="advanceSearch_row">
                            <li className="advanceSearch_col2">
                                <div className="range_select_wrapper">
                                    <span>קומה</span>
                                    <div className="buttons_wrapper">
                                        <div className="fixedDrop">
                                            <button onClick={(e) => {
                                                clickFromFloor(e)
                                            }} className="fixedRoomButton right_element">מ-<i className={fromFloor ? "fas fa-chevron-up open" : "fas fa-chevron-up close"}></i></button>
                                            {fromFloor &&
                                                <div className="fixedDropDownContent">
                                                    <ul className="fixedDataList">
                                                        <li>הכל</li>
                                                        <li>מרתף/פרטר</li>
                                                        <li>0</li>
                                                        <li>1</li>
                                                        <li>2</li>
                                                        <li>3</li>
                                                        <li>4</li>
                                                        <li>5</li>
                                                        <li>6</li>
                                                        <li>7</li>
                                                        <li>8</li>
                                                        <li>9</li>
                                                        <li>10</li>
                                                        <li>11</li>
                                                        <li>12</li>
                                                        <li>13</li>
                                                        <li>14</li>
                                                        <li>15</li>
                                                        <li>16</li>
                                                        <li>17</li>
                                                    </ul>
                                                </div>
                                            }
                                        </div>
                                        <div className="fixedDrop">
                                            <button onClick={(e) => {
                                                clickToFloor(e)
                                            }} className="fixedRoomButton">עד-<i className={toFloor ? "fas fa-chevron-up open" : "fas fa-chevron-up close"}></i></button>
                                            {toFloor &&
                                                <div className="fixedDropDownContent">
                                                    <ul className="fixedDataList">
                                                        <li>הכל</li>
                                                        <li>מרתף/פרטר</li>
                                                        <li>0</li>
                                                        <li>1</li>
                                                        <li>2</li>
                                                        <li>3</li>
                                                        <li>4</li>
                                                        <li>5</li>
                                                        <li>6</li>
                                                        <li>7</li>
                                                        <li>8</li>
                                                        <li>9</li>
                                                        <li>10</li>
                                                        <li>11</li>
                                                        <li>12</li>
                                                        <li>13</li>
                                                        <li>14</li>
                                                        <li>15</li>
                                                        <li>16</li>
                                                        <li>17</li>
                                                    </ul>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="advanceSearch_col2">
                                <div className="range_select_wrapper">
                                    <span>גודל דירה(במ"ר)</span>
                                    <div className="inputs_wrapper">
                                        <input className="right_element input_text" placeholder="מ-"></input>
                                        <input className="input_text" placeholder="עד-"></input>
                                    </div>
                                </div>
                            </li>
                            <li className="advanceSearch_col2 ">
                                <div className="range_select_wrapper ">
                                    <span>תאריך כניסה</span>
                                    <div className="date_check ">
                                        <input onChange={(e) => {
                                            console.log(e.target.valueAsNumber)
                                            setEnteryDate(e.target.valueAsNumber)
                                        }} type="date" className="input_text"></input>
                                        {/* <input placeholder="החל מ- הזינו תאריך" className="right_element input_text" type="text" onfocus={this.type='date'} onblur={this.type='text'} id="date" /> */}
                                        {/* <input className="right_element input_text" type="date"></input> */}
                                        <div>
                                            <input className="checkbox" type="checkbox"></input>
                                            <span>כניסה מיידית</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul className="advanceSearch_row">
                            <li className="advanceSearch_col2 advance_text">
                                <div className="free_search">
                                    <span>חיפוש חופשי</span>
                                    <input className="input"></input>
                                </div>
                            </li>
                            <li className="advanceSearch_col2 align_checkbox">
                                <div className="checkbox_and_text">
                                    <input className="checkbox" type="checkbox"></input>
                                    <span>הצג רק מושבים וקיבוצים</span>
                                </div>
                            </li>
                        </ul>
                        <ul className="advanceSearch_row final_row">
                            <li className="hidden">
                                {/* <button className="advanceSearchButton searchButton hidden">חיפוש</button> */}
                            </li>
                            <li>
                                <button className="advanceSearchButton searchButton ">חיפוש</button>
                            </li>
                            <li>
                                <button className="advanceSearchButton cleanButton" onClick={() => {
                                    setEnteryDate(null)
                                }}>נקה</button>
                            </li>
                        </ul>
                    </div>
                </div>
            }
        </div >
    )
}

export default SearchBox