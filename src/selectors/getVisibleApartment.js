
const getVisibleApartment = (apartments, { typeFilter, locationFilter, propertyTypeFilter, propertySubFilter, fromRoomFilter, toRoomFilter, priceFromFilter, priceToFilter, featureOptions, apartmentOptions, housesOptions, diffrentOptions, enteryDate }) => {
    return apartments.filter((apartment) => {
        const type = typeFilter ? apartment.type === typeFilter : true
        const location = locationFilter ? apartment.location.city.includes(locationFilter) : true
        const propertyType = propertyTypeFilter ? apartment.propertyType.type === propertyTypeFilter : true
        const propertytypeSub = propertySubFilter ? apartment.propertyType.subType === propertySubFilter : true
        const fromRooms = fromRoomFilter ? apartment.propertyInfo.rooms >= fromRoomFilter : true
        const toRooms = toRoomFilter ? apartment.propertyInfo.rooms <= toRoomFilter : true
        const priceFrom = priceFromFilter ? apartment.propertyInfo.price >= priceFromFilter : true
        const priceTo = priceToFilter ? apartment.propertyInfo.price <= priceToFilter : true
        const entery = enteryDate ? apartment.propertyInfo.entryDate === enteryDate : true
        let features = true
        if (featureOptions.length > 0) {
            // features = false
            for (let i = 0; i < featureOptions.length; i++) {
                if (!apartment.propertyFeatures.includes(featureOptions[i])) {
                    features = false
                    break;
                }
            }
        }
    
        let foundFilter = false
        let pass = false //pass filter by subType
        let apartmentOption = true
        for (let i = 0; i < apartmentOptions.length; i++) {
            if (apartmentOptions[i].isChecked) {
                apartmentOption = false
                foundFilter = true
            }
            if (!apartmentOption && apartmentOptions[i].isChecked && apartmentOptions[i].value === apartment.propertyType.subType) {
                apartmentOption = true
                pass = true
                break;
            }
        }
        let housesOption = true
        for (let i = 0; i < housesOptions.length; i++) {
            if (housesOptions[i].isChecked) {
                housesOption = false
                foundFilter = true
            }
            if (!housesOption && housesOptions[i].isChecked && housesOptions[i].value === apartment.propertyType.subType) {
                housesOption = true
                pass = true
                break;
            }
        }
        let diffrentOption = true
        for (let i = 0; i < diffrentOptions.length; i++) {
            if (diffrentOptions[i].isChecked) {
                diffrentOption = false
                foundFilter = true
            }
            if (!diffrentOption && diffrentOptions[i].isChecked && diffrentOptions[i].value === apartment.propertyType.subType) {
                diffrentOption = true
                pass = true
                break;
            }
        }
        if (!foundFilter) { pass = true }
        //console.log(pass,features)
        return type && location && propertyType && propertytypeSub && fromRooms && toRooms && priceFrom && priceTo && entery && features && pass
    })
}

export default getVisibleApartment