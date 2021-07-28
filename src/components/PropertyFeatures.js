import React, { useEffect, useState } from "react"

const PropertyFeatures = ({ updateFeatures }) => {
    const [propertyFeatures, setPropertyFeatures] = useState([
        "דלתות פנדור", "חניה", "מעלית", "מיזוג", "מרפסת", 'ממ"ד', "סורגים", "מחסן", "גישה לנכים", "משופצת", "מרוהטת", "בבלעדיות",
    ])
    const [propertyFeaturesList, setPropertyFeaturesList] = useState(
        new Array(12).fill(false)
    )
    const [filterFeature, setFilterFeature] = useState([])
    const handleOnChangeFeature = (position) => {
        let newList = [...propertyFeaturesList]

        for (let i = 0; i < newList.length; i++) {
            if (i === position) {
                newList[i] = !newList[i]
                if (newList[i]) {
                    console.log("adding")
                    updateFeatures([...filterFeature, propertyFeatures[i]])
                    setFilterFeature([...filterFeature, propertyFeatures[i]])
                } else {
                    let clone = [...filterFeature]
                    clone = clone.filter((item) => {
                        return item != propertyFeatures[position]
                    })
                    console.log("removed ", clone)
                    updateFeatures(clone)
                    setFilterFeature(clone)
                }
            }
        }
        // console.log(newList)
        // console.log(filterFeature)
        setPropertyFeaturesList(newList)

    }
    useEffect(() => {
        console.log(filterFeature)
    }, [filterFeature])
    return (
        <div className="property_features_wrapper">
            <ul className="advanceSearch_row mobile_advanceSearch_row">
                {propertyFeatures.map((feature, index) => {
                    return (
                        <li key={index} className="advanceSearch_col mobile_advanceSearch_col">
                            <div>
                                <input onChange={() => handleOnChangeFeature(index)} checked={propertyFeaturesList[index]} type="checkbox"></input>
                                <span>{feature}</span>
                            </div>
                        </li>
                    )
                })}

            </ul>
        </div>
    )
}
export default PropertyFeatures