import React, { useContext, useState } from "react"
import SemiHeader from "./Semi_Header"
import AddApartment1 from "./AddApartment1"
import AddApartment2 from "./AddApartment2"
import AddApartment3 from "./AddApartment3"
import AddApartment4 from "./AddApartment4"
import AddApartment5 from "./AddApartment5"
import AddApartment6 from "./AddApartment6"
import AddApartment7 from "./AddApartment7"
import { ApartmentContext } from "../context/apartmentContext"
import { addApartmentAction } from "../action/apartmentAction"
import { addApartment } from "../fetchRequest/fetchRequest"
import { useHistory } from "react-router-dom"


const AddApartmentDash = () => {
    const history = useHistory()
    const { dispatchApartment } = useContext(ApartmentContext)
    const [openOrder, setOpenOrder] = useState([
        { open: true, checked: false },
        { open: false, checked: false },
        { open: false, checked: false },
        { open: false, checked: false },
        { open: false, checked: false },
        { open: false, checked: false },
        { open: false, checked: false }
    ])
    const [apartment_info, setApartment_info] = useState({
        id: "",
        owner: {
            name: "",
            phone: "",
            plan: "",
            //0=רגיל אפור
            //1=מודגש וורוד
            //2=vip צהוב
        },
        type: "", //מכירה,
        location: {
            city: "",
            street: "",
            number: 0,
            neighborhood: ""
        },
        propertyType: {
            type: "",
            subType: ""
        },
        propertyInfo: {
            rooms: 0,
            floor: 0,
            building_floor: 0,
            price: 0,
            size: 0,
            state: "",
            //חדש מקבלן\חדש\משופץ\במצב שמור\דרוש שיפוץ
            entryDate: "", //  14/6/21
            parking: "", //  0/1/2/3
            balcony: "", //  0/1/2/3
        },
        propertyFeatures: [],
        //מיזוג,ממ"ד,מחסן,דלתות פנדור
        //ריהוט,גישה לנכים,מעלית,מזגן תדיראו
        //משופצת,מטבח כשר,דוד שמש,סורגים
        description: '',
        images: []
    }
    )

    const reOrderOpen = (toOpen, toChecked) => {
        let clone = [...openOrder]
        clone.forEach((item, index) => {
            if (index === toOpen) {
                // item.open = true
                item.open = true
            } else if (item.open) {
                //item.open = false
                item.open = false
            }
        })
        // clone.map((item, index) => {

        //     if (index === toOpen) {
        //        // item.open = true
        //        return item.open = true
        //     } else if (item.open) {
        //         //item.open = false
        //         return item.open = false
        //     }

        // })
        if (toChecked) {
            clone[toOpen - 1].checked = true
        }
        console.log(clone)
        setOpenOrder(clone)
    }
    const AddApartment1Info = (info) => {
        let clone = { ...apartment_info }
        clone.type = info.type
        setApartment_info(clone)
        // console.log(apartment_info)
        reOrderOpen(1, true)
    }
    const AddApartment2Info = ({
        chosenApartmentType, apartmentGroup, apartmentState,
        city, street, houseNum, floor, totalFloors, neighborhood
    }) => {
        let clone = { ...apartment_info }
        clone.propertyType.type = apartmentGroup
        clone.propertyType.subType = chosenApartmentType
        clone.propertyInfo.state = apartmentState
        clone.location.city = city
        clone.location.street = street
        clone.location.number = houseNum
        clone.propertyInfo.floor = floor
        clone.propertyInfo.building_floor = totalFloors
        clone.location.neighborhood = neighborhood
        setApartment_info(clone)
        console.log(apartment_info)
        reOrderOpen(2, true)
    }
    const AddApartment3Info = (
        rooms, parking, balcony,
        propertyFeatures, description
    ) => {
        let clone = { ...apartment_info }
        clone.propertyInfo.rooms = rooms
        clone.propertyInfo.parking = parking
        clone.propertyInfo.balcony = balcony
        clone.propertyFeatures = propertyFeatures
        clone.description = description
        setApartment_info(clone)
        console.log(apartment_info)
        reOrderOpen(3, true)
    }
    const AddApartment4Info = (meter, price, enterDate) => {
        let clone = { ...apartment_info }
        clone.propertyInfo.size = meter
        clone.propertyInfo.price = price
        clone.propertyInfo.entryDate = enterDate
        setApartment_info(clone)
        console.log(apartment_info)
        reOrderOpen(4, true)
    }
    const AddApartment5Info = (media) => {
        let clone = { ...apartment_info }
        clone.images = media
        setApartment_info(clone)
        console.log(apartment_info)
        reOrderOpen(5, true)
    }
    const AddApartment6Info = ({ phone, name }) => {
        let clone = { ...apartment_info }
        clone.owner.name = name
        clone.owner.phone = phone
        setApartment_info(clone)
        console.log(apartment_info)
        reOrderOpen(6, true)
    }
    const AddApartment7Info = (plan) => {
        let clone = { ...apartment_info }
        clone.owner.plan = plan
        setApartment_info(clone)
        addApartment(clone).then((apartment) => {
            console.log(apartment.data.apartment._id)
            clone = { ...apartment_info }
            clone.id = apartment.data.apartment._id
            setApartment_info(clone)
            dispatchApartment(addApartmentAction(clone))
            history.push("/")
        }, (err) => {
            console.log(err)
        })
        console.log(clone)
    }
    return (
        <div>
            <SemiHeader />
            <div className="add_apartment_steps">
                <AddApartment1 reOrderOpen={reOrderOpen} AddApartment1Info={AddApartment1Info} open={openOrder[0]} />
                <AddApartment2 reOrderOpen={reOrderOpen} AddApartment2Info={AddApartment2Info} open={openOrder[1]} />
                <AddApartment3 reOrderOpen={reOrderOpen} AddApartment3Info={AddApartment3Info} open={openOrder[2]} />
                <AddApartment4 reOrderOpen={reOrderOpen} AddApartment4Info={AddApartment4Info} open={openOrder[3]} />
                <AddApartment5 reOrderOpen={reOrderOpen} AddApartment5Info={AddApartment5Info} open={openOrder[4]} />
                <AddApartment6 reOrderOpen={reOrderOpen} AddApartment6Info={AddApartment6Info} open={openOrder[5]} />
                <AddApartment7 reOrderOpen={reOrderOpen} AddApartment7Info={AddApartment7Info} open={openOrder[6]} />
            </div>
        </div>
    )
}
export default AddApartmentDash