export const initialFilters = {

    typeFilter: "",  //מכירה או השכרה
    locationFilter: "",
    // propertyTypeFilter:""//
    // propertySubFilter: "",
    fromRoomFilter: "",
    toRoomFilter: "",
    // roomsFilter: "",
    priceFromFilter: "",
    priceToFilter: "",
    featureOptions: [],
    apartmentOptions:
        [
            { value: "דירה", isChecked: false },
            { value: "דירת גן", isChecked: false },
            { value: "גג/פנטהאוז", isChecked: false },
            { value: "דופלקס", isChecked: false },
            { value: "דירת נופש", isChecked: false },
            { value: "מרתף/פרטר", isChecked: false },
            { value: "טריפלקס", isChecked: false },
            { value: "יחידת דיור", isChecked: false },
            { value: "סטודיו/לופט", isChecked: false },

        ],
    housesOptions: [
        { value: "בית פרטי/קוטג'", isChecked: false },
        { value: "דו משפחתי", isChecked: false },
        { value: "משק חקלאי/נחלה", isChecked: false },
        { value: "משק עזר", isChecked: false },
    ],
    diffrentOptions:
        [
            { value: "מגרשים", isChecked: false },
            { value: "דיור מוגן", isChecked: false },
            { value: "בניין מגורים", isChecked: false },
            { value: "מחסן", isChecked: false },
            { value: "חניה", isChecked: false },
            { value: "קב' רכישה/זכות לנכס", isChecked: false },
            { value: "כללי", isChecked: false },
        ]

}

const filterReducer = (filter, action) => {
    switch (action.type) {
        case "SET_TYPE_FILTER":
            return {
                ...filter,
                typeFilter: action.text
            }
        case "SET_LOCATION_FILTER":
            console.log("location change", action.location)
            return {
                ...filter,
                locationFilter: action.location
            }

        case "SET_PROPERTY_FILTER":
            return {
                ...filter,
                propertyTypeFilter: action.text
            }
        case "SET_SUBPROPERTY_FILTER":
            return {
                ...filter,
                propertySubFilter: action.text
            }
        case "SET_FROMROOM_FILTER":
            return {
                ...filter,
                fromRoomFilter: action.rooms
            }
        case "TO_ROOM_FILTER":
            return {
                ...filter,
                toRoomFilter: action.rooms
            }
        case "SET_PRICEFROM_FILTER":
            return {
                ...filter,
                priceFromFilter: action.price
            }
        case "SET_PRICETO_FILTER":
            return {
                ...filter,
                priceToFilter: action.price
            }
        case "SET_APPARTEMENT_OPTIONS":
            return {
                ...filter,
                apartmentOptions: action.options
            }
        case "SET_HOUSES_OPTIONS":
            return {
                ...filter,
                housesOptions: action.options
            }
        case "SET_DIFFRENT_OPTIONS":
            return {
                ...filter,
                diffrentOptions: action.options
            }
        case "SET_FILTERS":
            return {
                ...filter,
                ...action.newFilters
            }
        default:
            return { ...filter }
    }
}
export default filterReducer