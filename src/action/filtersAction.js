export const setLocationFilter = (location) => ({
    type: "SET_LOCATION_FILTER",
    location
})
export const setTypeFilter = (type) => ({  //מכירה או השכרה
    type: "SET_TYPE_FILTER",
    text: type
})
export const setPropertyType = (text) => ({ //דירות ,בתים ,נוספים
    type: "SET_PROPERTY_FILTER",
    text
})
export const setSubProperty = (text) => ({
    type: "SET_SUBPROPERTY_FILTER",
    text
})
export const setApartmentOptions = (options) => ({
    type: "SET_APPARTEMENT_OPTIONS",
    options
})
export const setHousesOptions = (options) => ({
    type: "SET_HOUSES_OPTIONS",
    options
})
export const setDiffrentOptions = (options) => ({
    type: "SET_DIFFRENT_OPTIONS",
    options
})
export const setNewFilters = (newFilters) => ({
    type: "SET_FILTERS",
    newFilters
})