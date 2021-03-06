import React, { useState } from "react"
import pen from "../img/pen.png"
import elevator from "../img/elevator2.png"


const AddApartment3 = ({ AddApartment3Info, open, reOrderOpen }) => {
    const [openNumRooms, setOpenNumRooms] = useState(false)
    const [rooms_number, setRooms_number] = useState("")
    const [highlightParking, setHighlightParking] = useState(0)
    const [highlightBalcony, setHighlightBalcony] = useState(0)
    const [propertyFeatures, setPropertyFeatures] = useState([])
    const [description, setDescription] = useState("")
    const getEventTarget = (e) => {
        e = e || window.event;
        if (e.target.children[1]) {
            console.log("enter 1")
            return e.target.children[1].innerHTML
        } else if (typeof e.target.innerHTML === 'string') {
            if (e.target.innerHTML) {
                console.log("enter 2")
                return e.target.innerHTML
            } else {
                console.log("enter 3")
                return e.target.nextSibling.innerHTML
            }
        }
    }
    const clickNext = () => {
        AddApartment3Info(rooms_number, highlightParking, highlightBalcony, propertyFeatures, description)
    }
    const clickProperty = (e) => {
        const property = getEventTarget(e)
        let clone = [...propertyFeatures]
        if (clone.includes(property)) {
            clone = clone.filter((item) => {
                return item !== property
            })
        } else {
            clone.push(property + '')
        }
        console.log(clone)
        // clone.forEach(x => {
        //     console.log(x)
        // })
        //console.log(propertyFeatures)
        setPropertyFeatures(clone)
    }

    const getEventTargetRooms = (e) => {
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
                <div className="numIcon"><span className="number">{open.checked ? <i className="fas fa-check"></i> : "3"}</span></div>
                <div className={open.open?"step_title":"step_title close_title"}>
                    <h2>???? ????????</h2>
                    {!open.open &&
                        <div className="edit_type" onClick={() => {
                            reOrderOpen(2)
                        }}>
                            <img alt="" src={pen} />
                            <span>??????????</span>
                        </div>
                    }
                </div>
                <div className="info_input rooms_number">
                    <span className="info_label">???????? ??????????</span>
                    <button onClick={() => {
                        setOpenNumRooms(!openNumRooms)
                    }}>
                        <span>{rooms_number ? rooms_number : "?????????? ???????? ??????????"}</span>
                        <i className={openNumRooms ? "fas fa-chevron-up close" : "fas fa-chevron-up "}></i>
                    </button>
                    {openNumRooms &&
                        <div className="drop_property_type">
                            <ul className="choose_num_rooms" onClick={(e) => {
                                console.log(getEventTargetRooms(e))
                                setRooms_number(getEventTargetRooms(e))
                                setOpenNumRooms(false)
                            }}>
                                <li>
                                    <span>0</span>
                                </li>
                                <li>
                                    <span>1</span>
                                </li>
                                <li>
                                    <span>1.5</span>
                                </li>
                                <li>
                                    <span>2</span>
                                </li>
                                <li>
                                    <span>2.5</span>
                                </li>
                                <li>
                                    <span>3</span>
                                </li>
                                <li>
                                    <span>3.5</span>
                                </li>
                                <li>
                                    <span>4</span>
                                </li>
                                <li>
                                    <span>4.5</span>
                                </li>
                                <li>
                                    <span>5</span>
                                </li>
                                <li>
                                    <span>5.5</span>
                                </li>
                                <li>
                                    <span>6</span>
                                </li>
                                <li>
                                    <span>6.5</span>
                                </li>
                                <li>
                                    <span>7</span>
                                </li>
                                <li>
                                    <span>8</span>
                                </li>
                                <li>
                                    <span>9</span>
                                </li>
                                <li>
                                    <span>10</span>
                                </li>
                                <li>
                                    <span>11</span>
                                </li>
                                <li>
                                    <span>12</span>
                                </li>
                            </ul>
                        </div>
                    }
                </div>
                <div className="field_select_wrapper">
                    <span className="field_label">????????</span>
                    <div className="switcher">
                        <div onClick={() => {
                            setHighlightParking(0)
                        }} className={highlightParking === 0 ? "switcher_item highlighted" : "switcher_item"} >
                            <div className="item">
                                <span>??????</span>
                            </div>
                        </div>
                        <div onClick={() => {
                            setHighlightParking(1)
                        }} className={highlightParking === 1 ? "switcher_item highlighted" : "switcher_item"}>
                            <div className="item">
                                <span>1</span>
                            </div>
                        </div>
                        <div onClick={() => {
                            setHighlightParking(2)
                        }} className={highlightParking === 2 ? "switcher_item highlighted" : "switcher_item"}>
                            <div className="item">
                                <span>2</span>
                            </div>
                        </div>
                        <div onClick={() => {
                            setHighlightParking(3)
                        }} className={highlightParking === 3 ? "switcher_item highlighted" : "switcher_item"}>
                            <div className="item">
                                <span>3</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="field_select_wrapper">
                    <span className="field_label">??????????</span>
                    <div className="switcher">
                        <div onClick={() => {
                            setHighlightBalcony(0)
                        }} className={highlightBalcony === 0 ? "switcher_item highlighted" : "switcher_item"} >
                            <div className="item">
                                <span>??????</span>
                            </div>
                        </div>
                        <div onClick={() => {
                            setHighlightBalcony(1)
                        }} className={highlightBalcony === 1 ? "switcher_item highlighted" : "switcher_item"}>
                            <div className="item">
                                <span>1</span>
                            </div>
                        </div>
                        <div onClick={() => {
                            setHighlightBalcony(2)
                        }} className={highlightBalcony === 2 ? "switcher_item highlighted" : "switcher_item"}>
                            <div className="item">
                                <span>2</span>
                            </div>
                        </div>
                        <div onClick={() => {
                            setHighlightBalcony(3)
                        }} className={highlightBalcony === 3 ? "switcher_item highlighted" : "switcher_item"}>
                            <div className="item">
                                <span>3</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="new_properties">
                    <div className="new_properties_title">?????????????? ????????</div>
                    <div className="all_properties" onClick={(e) => {
                        clickProperty(e)
                    }}>
                        <div className="properties_item">
                            <div className={propertyFeatures.includes("??????????") ? "checkbox_wrapper highlighted_feature" : "checkbox_wrapper"}>
                                <div className="checkbox_content">
                                    <i className="far fa-snowflake"></i>
                                    <span>??????????</span>
                                </div>
                            </div>
                        </div>
                        <div className="properties_item">
                            <div className={propertyFeatures.includes('????"??') ? "checkbox_wrapper highlighted_feature" : "checkbox_wrapper"}>
                                <div className="checkbox_content">
                                    <i className="fas fa-user-shield"></i>
                                    <span>????"??</span>
                                </div>
                            </div>
                        </div>
                        <div className="properties_item">
                            <div className={propertyFeatures.includes("????????") ? "checkbox_wrapper highlighted_feature" : "checkbox_wrapper"}>
                                <div className="checkbox_content">
                                    <i className="fas fa-archive"></i>
                                    <span>????????</span>
                                </div>
                            </div>
                        </div>
                        <div className="properties_item">
                            <div className={propertyFeatures.includes("?????????? ??????????") ? "checkbox_wrapper highlighted_feature" : "checkbox_wrapper"}>
                                <div className="checkbox_content">
                                    <i className="fas fa-door-closed"></i>
                                    <span>?????????? ??????????</span>
                                </div>
                            </div>
                        </div>
                        <div className="properties_item">
                            <div className={propertyFeatures.includes("??????????") ? "checkbox_wrapper highlighted_feature" : "checkbox_wrapper"}>
                                <div className="checkbox_content">
                                    <i className="fas fa-couch"></i>
                                    <span>??????????</span>
                                </div>
                            </div>
                        </div>
                        <div className="properties_item">
                            <div className={propertyFeatures.includes("???????? ??????????") ? "checkbox_wrapper highlighted_feature" : "checkbox_wrapper"}>
                                <div className="checkbox_content">
                                    <i className="fas fa-wheelchair"></i>
                                    <span>???????? ??????????</span>
                                </div>
                            </div>
                        </div>
                        <div className="properties_item">
                            <div className={propertyFeatures.includes("??????????") ? "checkbox_wrapper highlighted_feature" : "checkbox_wrapper"}>
                                <div className="checkbox_content">
                                    <img alt="" src={elevator}></img>
                                    <span>??????????</span>
                                </div>
                            </div>
                        </div>
                        <div className="properties_item">
                            <div className={propertyFeatures.includes("???????? ????????????") ? "checkbox_wrapper highlighted_feature" : "checkbox_wrapper"}>
                                <div className="checkbox_content">
                                    <i className="far fa-snowflake"></i>
                                    <span>???????? ????????????</span>
                                </div>
                            </div>
                        </div>
                        <div className="properties_item">
                            <div className={propertyFeatures.includes("????????????") ? "checkbox_wrapper highlighted_feature" : "checkbox_wrapper"}>
                                <div className="checkbox_content">
                                    <i className="fas fa-paint-roller"></i>
                                    <span>????????????</span>
                                </div>
                            </div>
                        </div>
                        <div className="properties_item">
                            <div className={propertyFeatures.includes("???????? ??????") ? "checkbox_wrapper highlighted_feature" : "checkbox_wrapper"}>
                                <div className="checkbox_content">
                                    <i className="fas fa-faucet"></i>
                                    <span>???????? ??????</span>
                                </div>
                            </div>
                        </div>
                        <div className="properties_item">
                            <div className={propertyFeatures.includes("?????? ??????") ? "checkbox_wrapper highlighted_feature" : "checkbox_wrapper"}>
                                <div className="checkbox_content">
                                    <i className="fas fa-solar-panel"></i>
                                    <span>?????? ??????</span>
                                </div>
                            </div>
                        </div>
                        <div className="properties_item">
                            <div className={propertyFeatures.includes("????????????") ? "checkbox_wrapper highlighted_feature" : "checkbox_wrapper"}>
                                <div className="checkbox_content">
                                    <i className="fas fa-border-all"></i>
                                    <span>????????????</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="property_description">
                    <div className="new_properties_title">???? ???????? ???? ?????????? ???? ?????????</div>
                    <div className="text_area">
                        <div className="text_area_title">
                            <span>???????? ????????</span>
                            <span>{description.length}/400</span>
                        </div>
                        <textarea maxLength="400" cols="5"
                            placeholder="???? ?????????? ???????? ???? ???????????? ??????????????, ????????, ?????? ???????? ?????????? ??????????, ???? ????????, ???????????? ??????????, ?????????????? ?????????? ??????'"
                            value={description}
                            onChange={(e) => {
                                setDescription(e.target.value)
                            }}
                        ></textarea>
                    </div>
                </div>
                <div className="bottom_buttons">
                    <button className="btn"><span>????????</span></button>
                    <button className="next_button" onClick={() => {
                        // console.log(propertyFeatures)
                        clickNext()
                    }}>???????????? ???????? ??????</button>
                </div>
            </div>
        </div>
    )
}
export default AddApartment3