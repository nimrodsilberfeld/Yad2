import React, { useState } from "react"

const SubFilter = () => {
    const [filterBy, setFilterBy] = useState("לפי תאריך")
    const [clickFilter, setClickFilter] = useState(false)

    return (
        <div className="subfilter not_mobile">
            <div className="subfilter_item">
                <span>מיין לפי </span>
                <button className="button" onClick={() => {
                    setClickFilter(!clickFilter)
                }}>{filterBy}<i className={clickFilter ? "fas fa-chevron-up open y2i" : "fas fa-chevron-up close y2i"}></i></button>
                {clickFilter &&
                    <div className="feedfilter_dropdown">
                        <div className="feedfilter_dropdown_item">
                            <input type="radio" />
                            <span>לפי תאריך</span>
                        </div>
                        <div className="feedfilter_dropdown_item">
                            <input type="radio" />
                            <span>מחיר- מהזול ליקר</span>
                        </div>
                        <div className="feedfilter_dropdown_item">
                            <input type="radio" />
                            <span>מחיר- מהיקר לזול</span>
                        </div>
                    </div>
                }
            </div>
            <div className="subfilter_item">
                <span>הצג מודעות</span>
                <button className="button_icon"><i className="fas fa-shekel-sign"></i>עם מחיר</button>
                <button className="button_icon"><i className="far fa-images"></i>עם תמונה</button>
            </div>
            <div className="subfilter_item">
                <button className="button_icon"><i className="fas fa-map-marker-alt"></i>תצוגת מפה</button>
            </div>
        </div>
    )
}

export default SubFilter