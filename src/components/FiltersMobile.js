import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import UpperMobileHeader from "./UpperMoblieHeader"
import ad from "../img/second_ad.jpg"
import building from "../img/building.svg"
import house from "../img/Country-house.svg"
import fence from "../img/fence.svg"
import PopupApartmentType from "./PopupApartmentType"
import AdvanceSearchMobile from "./AdvanceSearchMobile"
import { ApartmentContext } from "../context/apartmentContext"
import SearchArea from "./SearchArea"
import { setNewFilters } from "../action/filtersAction"

const FiltersMobile = () => {
    const history = useHistory()
    const { filters, dispatchFilters } = useContext(ApartmentContext)
    const [search_cat, setSearch_cat] = useState(1)
    const [openPop, setOpenPop] = useState(false)
    const [countBuilding, setCountBuilding] = useState("")
    const [countHouses, setCountHouses] = useState("")
    const [countDifferent, setCountDifferent] = useState("")
    const [selectAllProperty, setSelectAllProperty] = useState([])
    const [citySearch, setCitySearch] = useState("")
    const [locationPicked, setLocationPicked] = useState(false)
    const [features, setFeatures] = useState([])
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
    const [fromPrice, setFromPrice] = useState("")
    const [toPrice, setToPrice] = useState("")
    const [fromRoom, setFromRoom] = useState("")
    const [toRoom, setToRoom] = useState("")
    const [options] = useState([
        { value: "הכל" }, { value: "1" }, { value: "1.5" },
        { value: "2" }, { value: "2.5" }, { value: "3" },
        { value: "3.5" }, { value: "4" }, { value: "4.5" },
        { value: "5" }, { value: "5.5" }, { value: "6" },
        { value: "6.5" }
    ])

    const [advanceSearch, setAdvanceSearch] = useState(false)
    const openPropertyRef = React.createRef()
    const scrollToBottom = () => {
        openPropertyRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    const updateFeatures = (newFeatures) => {
        setFeatures([...newFeatures])
        console.log("features from child",newFeatures)
    }

    const closePopup = () => { setOpenPop(false) }

    useEffect(() => {
        if (advanceSearch) {
            scrollToBottom()
        }
    }, [advanceSearch]);
    const countTypes = (type, object) => {
        let count = 0
        object.map((item) => {
            if (item.isChecked) {
                count += 1
            }
        })
        switch (type) {
            case "building":
                setCountBuilding(count > 0 ? count : "")
                break;
            case "houses":
                setCountHouses(count > 0 ? count : "")
                break;
            case "different":
                setCountDifferent(count > 0 ? count : "")
                break;
        }
    }
    const closeSlideForMoblie = () => {
        history.push("/")
    }
    const updateProperty = (propertyType, update) => {
        switch (propertyType) {
            case "building": setApartmentOptions(update)
                break;
            case "houses": setHousesOptions(update)
                break;
            case "different": setDiffrentOptions(update)
                break;
        }
    }

    const updateAllProperty = (propertyType, settingCountFunc, settingTypeOption) => {

        let selectClone = [...selectAllProperty]
        let clone = [...propertyType] //apartmentOption..houseOption..
        if (selectClone.includes((propertyType + ""))) {
            // clone.map((item) => { item.isChecked = false })
            clone.forEach((item) => { item.isChecked = false })
            selectClone = selectClone.filter((item) => item !== (propertyType + ""))
            settingCountFunc("")
        } else {
            clone.forEach((item) => { item.isChecked = true })
            selectClone.push((propertyType + ""))
            settingCountFunc(clone.length)
        }
        settingTypeOption(clone)
        setSelectAllProperty(selectClone)
    }

    const updatePrice = (from, to) => {
        setFromPrice(from)
        setToPrice(to)
    }
    const updateRooms = (from, to) => {
        setFromRoom(from)
        setToRoom(to)
    }
    const locationGotPicked = () => {
        setLocationPicked(true)
    }

    const clickSearch = (e) => {
        e.preventDefault()
        dispatchFilters(
            //setLocationFilter(searchLocation),
            setNewFilters({
                locationFilter: citySearch,
                apartmentOptions: apartmentOptions,
                housesOptions: housesOptions,
                diffrentOptions: diffrentOptions,
                fromRoomFilter: fromRoom,
                toRoomFilter: toRoom,
                priceFromFilter: fromPrice,
                priceToFilter: toPrice,
                featureOptions: features,
                // enteryDate: enteryDate
            })
        )
        history.push("/")
    }

    return (
        <div className="FiltersMobile">
            <div className="mobile_header mobile_only show_menu">
                <UpperMobileHeader closeSlideForMoblie={closeSlideForMoblie} backButton={true} />
            </div>
            <div className="filters_wrapper">
                <div className="second_ad_container">
                    <div className="ad_div">
                        <img src={ad} />
                    </div>
                </div>
                <div className="first_filter_mobile"></div>
                <ul className="mobile_apartment_type">
                    <li className="sub_cat_option">
                        <button className="sub_cat_btn primary_btn">
                            <span className="btn_content">מכירה</span>
                        </button>
                    </li>
                    <li className="sub_cat_option">
                        <button className="sub_cat_btn">
                            <span className="btn_content">השכרה</span>
                        </button>
                    </li>
                    <li className="sub_cat_option">
                        <button className="sub_cat_btn">
                            <span className="btn_content">שותפים</span>
                        </button>
                    </li>
                    <li className="sub_cat_option">
                        <button className="sub_cat_btn">
                            <span className="btn_content">מסחרי</span>
                        </button>
                    </li>
                    <li className="sub_cat_option">
                        <button className="sub_cat_btn">
                            <span className="btn_content">כונס נכסים</span>
                        </button>
                    </li>
                </ul>
                <div className="searchForm">
                    <button className="clrear_search">
                        <i className="far fa-trash-alt"></i>
                        <span>נקה הכל</span>
                    </button>
                    <div className="search_by">
                        <h3 className="search_title">חפשו לפי</h3>
                        <div className="search_by_buttons">
                            <button onClick={() => {
                                setSearch_cat(1)
                            }} className={search_cat === 1 ? "active" : ""}>עיר ושכונה</button>
                            <button onClick={() => {
                                setSearch_cat(2)
                            }} className={search_cat === 2 ? "active middle_btn" : "middle_btn"}>איזור</button>
                            <button onClick={() => {
                                setSearch_cat(3)
                            }} className={search_cat === 3 ? "active" : ""}>קרוב אלי</button>
                        </div>
                        {search_cat === 1 &&
                            <>
                                <div className="label">
                                    <h3 className="search_title">חפשו עיר</h3>
                                    <input value={citySearch} onChange={(e) => {
                                        if (locationPicked) {
                                            setLocationPicked(false)
                                        }
                                        setCitySearch(e.target.value)
                                    }} className="search_input" placeholder="לדוגמא: תל אביב יפו"></input>
                                    {!locationPicked &&
                                        <SearchArea locationGotPicked={locationGotPicked} place={citySearch} setSearchLocation={setCitySearch} />
                                    }
                                </div>
                                <div className="label">
                                    <h3 className="search_title">חפשו שכונה</h3>
                                    <input className="search_input" placeholder="הזינו שם של שכונה"></input>
                                </div>
                            </>
                        }
                        {search_cat === 2 &&
                            <>
                                <div className="label">
                                    <h3 className="search_title">איזור</h3>
                                    <select className="search_select">
                                        <option>הכל</option>
                                        <option>צפון</option>
                                        <option>דרום</option>
                                        <option>מזרח</option>
                                        <option>מערב</option>
                                    </select>
                                    <label className="label_checkbox">
                                        <input type="checkbox" />
                                        <span>הצגת מושבים וקיבוצים בלבד</span>
                                    </label>
                                </div>
                            </>
                        }
                    </div>
                </div>
                <div className="search_proprty">
                    <h3 className="search_title">סוג נכס</h3>
                    <div className="proprty_type_btns">
                        <button onClick={() => {
                            //updateAllProperty(1)
                            updateAllProperty(apartmentOptions, setCountBuilding, setApartmentOptions)
                        }} className={countBuilding ? "property_btn active_btn" : "property_btn"}>
                            <img src={building} />
                            <span className="propery_btn_title">דירות</span>
                            <span className="num_of_types">{countBuilding ? ` ${countBuilding} סוגים נבחרו` : "9 סוגי נכסים"}</span>
                        </button>
                        <button onClick={() => {
                            //updateAllProperty(2)
                            updateAllProperty(housesOptions, setCountHouses, setHousesOptions)
                        }} className={countHouses ? "property_btn active_btn" : "property_btn"}>
                            <img src={house} />
                            <span className="propery_btn_title">בתים</span>
                            <span className="num_of_types">{countHouses ? ` ${countHouses} סוגים נבחרו` : "4 סוגי נכסים"}</span>
                        </button>
                        <button onClick={() => {
                            //updateAllProperty(3)
                            updateAllProperty(diffrentOptions, setCountDifferent, setDiffrentOptions)
                        }} className={countDifferent ? "property_btn active_btn" : "property_btn"}>
                            <img src={fence} />
                            <span className="propery_btn_title">סוגים נוספים</span>
                            <span className="num_of_types">{countDifferent ? ` ${countDifferent} סוגים נבחרו` : "7 סוגי נכסים"}</span>
                        </button>
                    </div>
                    <div className="all_property_btn">
                        <h3 onClick={() => {
                            setOpenPop(true)
                        }}>להצגת כל סוגי הנכסים</h3>
                    </div>
                    {openPop &&
                        <PopupApartmentType
                            countTypes={countTypes}
                            closePopup={closePopup}
                            updateProperty={updateProperty}
                            apartmentOptions={apartmentOptions}
                            housesOptions={housesOptions}
                            diffrentOptions={diffrentOptions}
                            updateAllProperty={updateAllProperty}
                            setCountBuilding={setCountBuilding}
                            setCountHouses={setCountHouses}
                            setCountDifferent={setCountDifferent}
                            setApartmentOptions={setApartmentOptions}
                            setHousesOptions={setHousesOptions}
                            setDiffrentOptions={setDiffrentOptions}
                        />
                    }
                </div>
                <div className="range_wrapper">
                    <h3 className="search_title">מחיר</h3>
                    <div className="range_inputs_wrapper">
                        <input value={fromPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} onChange={(e) => {
                            setFromPrice(e.target.value)
                        }} className="range_input" placeholder="ממחיר"></input>
                        <div className="seperate">_</div>
                        <input value={toPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} onChange={(e) => {
                            setToPrice(e.target.value)
                        }} className="range_input" placeholder="עד מחיר"></input>
                    </div>
                    <div className="price_range_btn_wrapper">
                        <button onClick={() => {
                            updatePrice(0, 1500000)
                        }} className="price_range_btn">עד 1,500,000 ₪</button>
                        <button onClick={() => {
                            updatePrice(1500000, 2000000)
                        }} className="price_range_btn">1.5 עד 2 מיליון ₪</button>
                    </div>
                    <div className="price_range_btn_wrapper">
                        <button onClick={() => {
                            updatePrice(2000000, 3500000)
                        }} className="price_range_btn">2 עד 3.5 מיליון ₪</button>
                        <button onClick={() => {
                            updatePrice(3500000, 5000000)
                        }} className="price_range_btn">3.5 עד 5 מיליון ₪</button>
                    </div>
                </div>

                <div className="rooms_ranger">
                    <h3 className="search_title">חדרים</h3>
                    <div className="price_range_btn_wrapper">
                        <select value={fromRoom} onChange={(e) => {
                            if (e.target.value === "הכל") {
                                setFromRoom("")
                            } else {
                                setFromRoom(e.target.value)
                            }
                        }} className="search_select rooms_select">
                            {options.map((option, index) => {
                                return <option key={index}>{option.value}</option>
                            })}
                        </select>
                        <div className="seperate">_</div>
                        <select value={toRoom} onChange={(e) => {
                            if (e.target.value === "הכל") {
                                setToRoom("")
                            } else {
                                setToRoom(e.target.value)
                            }
                        }} className="search_select rooms_select">
                            {options.map((option, index) => {
                                return <option key={index} value={option.value}>{option.value}</option>
                            })}
                        </select>
                    </div>
                    <div ref={openPropertyRef}></div>
                    <div className="price_range_btn_wrapper">
                        <button onClick={() => {
                            updateRooms(2, 3)
                        }} className="price_range_btn">2-3 חדרים</button>
                        <button onClick={() => {
                            updateRooms(3, 4)
                        }} className="price_range_btn">3-4 חדרים</button>
                    </div>
                    <div className="price_range_btn_wrapper">
                        <button onClick={() => {
                            updateRooms(4, 5)
                        }} className="price_range_btn">4-5 חדרים</button>
                        <button onClick={() => {
                            updateRooms(5, 6)
                        }} className="price_range_btn">5-6 חדרים</button>
                    </div>
                </div>

                <div className={advanceSearch ? "advance_search_mobile" : "advance_search_mobile wide_advance"} >
                    <button onClick={() => {
                        setAdvanceSearch(!advanceSearch)

                    }}>{advanceSearch ? "- סגור חיפוש מתקדם" : "+ חיפוש מתקדם"}</button>
                </div>

                {advanceSearch &&
                    <>
                        <AdvanceSearchMobile updateFeatures={updateFeatures}/>
                    </>
                }
                <div className="button_wrapper">
                    <button onClick={(e) => {
                        clickSearch(e)
                    }} className="search_button_mobile">חיפוש</button>
                </div>
            </div>
        </div >
    )
}
export default FiltersMobile
