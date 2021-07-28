import React, { useEffect, useState } from 'react'

import { getGeoInfo } from '../fetchRequest/fetchRequest'

export default function SearchArea({ prevPlace, place, setSearchLocation, locationGotPicked }) {

    const [area, setArea] = useState("")
    const [suggestion, setSuggestion] = useState([])

    useEffect(() => {
        setSuggestion([])
        if (place.length > 0) {
            prevPlace ? getStreets() : getCities()
        }
        return () => {

        }

    }, [place])
    const pickePlace = (place) => {
        // setArea(place)
        // setSuggestion([])
        locationGotPicked()
        setSearchLocation(place)
    }
    const getCities = () => {
        getGeoInfo(place).then((data) => {
            let allSuggestions = data.data.result.records
            let array = []
            allSuggestions.forEach(option => {
                if (option.שם_ישוב.includes(place)) {
                    array.push(option.שם_ישוב.trim())
                }
                // console.log(option.שם_ישוב)
            });

            let filterdSuggetion = new Set(array)
            setSuggestion([...filterdSuggetion])
            console.log(filterdSuggetion)
        })
    }
    const getStreets = () => {
        console.log("prev", prevPlace)
        getGeoInfo(place).then((data) => {
            let allSuggestions = data.data.result.records
          
            let array = []
            allSuggestions.forEach(option => {
                if (option.שם_רחוב.trim().includes(place) && option.שם_ישוב.trim() === prevPlace) {
                    array.push(option.שם_רחוב.trim())
                }
                // console.log(option.שם_ישוב)
            });

            let filterdSuggetion = new Set(array)
            setSuggestion([...filterdSuggetion])
            console.log(filterdSuggetion)
        })
    }
    return (
        <div>
            {suggestion.length > 0 ?
                <ul className="suggestion_list">
                    {
                        suggestion.map((option, index) => {
                            return <li onClick={() => { pickePlace(option) }} key={index}>{option}</li>
                        })
                    }
                </ul>
                : ""
            }
        </div >
    )
}
