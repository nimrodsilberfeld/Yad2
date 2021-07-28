import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { useHistory } from 'react-router-dom';
import apartmentsReducer, { initialApartmentState } from '../reducer/apartmentReducer';
import filterReducer, { initialFilters } from '../reducer/filterReducer';

export const ApartmentContext = createContext()

const ApartmentContextProvider = (props) => {
    const [apartments, dispatchApartment] = useReducer(apartmentsReducer, initialApartmentState)
    const [filters, dispatchFilters] = useReducer(filterReducer, initialFilters)
    const history = useHistory()

    // !!!על מנת לקבל את הדירות מהדטא בייס נשתמש בזה יותר מאוחר  
    //כרגע משמש כדוגמא

    // useEffect(() => {
    //     let isComponentExisit = true
    //     getRoomData(props.roomId, userData.token).then((roomData) => {
    //         if (isComponentExisit) chatroomDispatch(initRoomAction(roomData))
    //     },
    //         (err) => {
    //             if (err.message === "Room not found") {
    //                 history.push("*")
    //             }
    //         }
    //     );
    //     return () => {
    //         isComponentExisit = false
    //     }
    // }, [props.roomId, history, userData.token])
    return (
        <ApartmentContext.Provider value={{ apartments, dispatchApartment, filters, dispatchFilters }}>
            {props.children}
        </ApartmentContext.Provider>
    )
}
export default ApartmentContextProvider