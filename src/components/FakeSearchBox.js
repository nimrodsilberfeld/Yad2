import React from "react"
import { useHistory } from "react-router-dom"

const FakeSearchBox = () => {
    const history = useHistory()
    return (
        <div className="fake_search_button" onClick={()=>{
            history.push("/filters")
        }}>
            <div>
                <i className="fas fa-search"></i>
                <span>נדל"ן למכירה</span>
            </div>
            <span className="orange">חיפוש</span>
        </div>
    )
}
export default FakeSearchBox