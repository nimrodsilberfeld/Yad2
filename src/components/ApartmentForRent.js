// import React, { useEffect, useReducer, useState } from "react"
// // import { setApartmentAction } from "../action/apartmentAction"
// import apartmentsReducer, { initialApartmentState } from "../reducer/apartmentReducer"
// import getVisibleApartment from "../selectors/getVisibleApartment"
// import ApartmentDash from "./ApartmentDash"

// import hero from "../img/yad2_hero.jpg"
// import SearchBox from "./SearchBox"
// import SubFilter from "./SubFilter"
// const ApartmentForRent = () => {
//     const [apartments, dispatchApartment] = useReducer(apartmentsReducer, initialApartmentState)
//     const [apartmentsToShow, setApartments] = useState([])
//     useEffect(() => {
//         if (apartments) {
//             const filtterd = getVisibleApartment(apartments, { locationFilter: "" })
//             setApartments(filtterd)
//         }
//     }, [])
//     console.log(apartments)
//     return (
//         <div className="forsale">
//             <div className="forsale_content">
//                 <p>ראשי \ נדל"ן להשכרה</p>
//                 <img alt="" className="hero" src={hero}></img>
//                 <SearchBox type={"להשכרה"}/>
//                 <div className="content_title">
//                     <span className="page_section">נדל"ן למכירה</span>
//                     <span className="num_of_apartment">מציג {apartmentsToShow.length} מודעות</span>
//                 </div>
//                 <SubFilter />
//                 <div className="apartment_main">
//                     {apartmentsToShow.map((apartment, index) => (
//                         <ApartmentDash key={index} apartment={apartment} />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ApartmentForRent