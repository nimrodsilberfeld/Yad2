import React, { useCallback, useContext, useEffect, useRef, useState } from "react"
import { useHistory } from 'react-router-dom'
//import getVisibleApartment from "../selectors/getVisibleApartment"
import getVisibleApartment from "../selectors/getVisibleApartment"
import ApartmentDash from "./ApartmentDash"
import axios from "axios"
import hero from "../img/yad2_hero.jpg"
import SearchBox from "./SearchBox"
import SubFilter from "./SubFilter"
import Footer from "./Footer"
import { ApartmentContext } from "../context/apartmentContext"
import ImageSlideShow from "./ImageSlideShow"
import Header from "./Header"
import MobileHeader from "./MobileHeader"
import ApartmentDashMobile from "./ApartmentDashMobile"
import ApartmentMobile from "./ApartmentMobile"
import { getFiltersApartment } from "../fetchRequest/fetchRequest"
import { addApartmentAction, setApartmentAction } from "../action/apartmentAction"
import useWindowDimensions from "../selectors/getWindowDimension"


const ApartmentForSale = () => {

    const history = useHistory()
    const { apartments, dispatchApartment } = useContext(ApartmentContext)
    const { filters } = useContext(ApartmentContext)
    const [apartmentsToShow, setApartments] = useState([])
    const [params, setParams] = useState(false)
    const [hideForSale, setHideForSale] = useState(false)
    const [images, setImages] = useState([])
    const [openMobileApartment, setOpenMobileApartment] = useState(false)
    const [apartmentToOpenMobile, setApartmentToOpenMobile] = useState("")
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    const { width } = useWindowDimensions();
    const observer = useRef()
    const lastApartment = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setLoading(true)
                let clonePage = page + 1
                setPage(page + 1)
                getApartments(clonePage)
            }
        })
        if (node) observer.current.observe(node)
        // console.log(node)
    }, [loading, hasMore, filters])
    const getApartments = (currentPage) => {
        getFiltersApartment(filters, currentPage).then((data) => {
            // console.log(data.data)
            if (data.data.length === 0) {
                setHasMore(false)
                setLoading(false)
                return
            }
            dispatchApartment(setApartmentAction(data.data))
            setApartments(prev => {
                return [...prev, ...data.data]
            })
            setLoading(false)
            //setApartments(data.data)
        }, (err) => {
            console.log(err)
        })
    }

    useEffect(() => {

        setApartments([])
        setHasMore(true)
        setPage(1)
        getApartments()
        //     // url מהכתובת  id  שואב את ה 

        //     // const currentUrl = window.location.href
        //     // const url = new URL(currentUrl)
        //     // const idParam = parseInt(url.searchParams.get("id"))
        //     // if (idParam) {
        //     //     console.log(idParam)
        //     //     apartments.map((item) => {
        //     //         if (item.id === idParam) {
        //     //             openSlide(item)
        //     //         }
        //     //     })
        //     // }
    }, [filters])

    const closeSlide = () => {
        setParams(false)
    }
    const openSlide = (apartment) => {
        setImages(apartment.images)
        history.push(`forsale?id=${apartment.id}`)
        setParams(true)
    }
    const openSlideForMoblie = (apartment) => {
        setApartmentToOpenMobile(apartment)
        history.push(`forsale?id=${apartment.id}`)
        setOpenMobileApartment(true)
        console.log(apartment)
    }
    const closeSlideForMoblie = () => {
        history.push("/forsale")
        setOpenMobileApartment(false)
    }
    const hidingForSale = () => {
        console.log("")
    }
    return (
        <div >
            <Header />
            {width < 600 &&
                <div className="mobile_only">
                    <MobileHeader
                    />
                </div>
            }
            {params && <ImageSlideShow images={images} closeSlide={closeSlide} />}
            {openMobileApartment &&
                <ApartmentMobile
                    closeSlideForMoblie={closeSlideForMoblie}
                    apartment={apartmentToOpenMobile}
                    hidingForSale={hidingForSale}
                />}

            {!openMobileApartment &&
                <div className={params ? "diplay_hidden" : ""}>
                    {/* <Header /> */}
                    <div className="forsale">
                        <div className="forsale_content">
                            <p>ראשי \ נדל"ן למכירה</p>
                            <img alt="" className="hero" src={hero}></img>
                            <SearchBox type={"למכירה"} />
                            <div className="content_title">
                                <span className="page_section">נדל"ן למכירה</span>
                                <span className="num_of_apartment">מציג {apartmentsToShow.length} מודעות</span>
                            </div>
                            <SubFilter />
                            <div >
                                {width > 600 ?
                                    <div className="apartment_main not_mobile">
                                        {apartmentsToShow.map((apartment, index) => {
                                            if (apartmentsToShow.length === index + 1) {
                                                return (
                                                    <div key={index} ref={lastApartment}>
                                                        <ApartmentDash key={index} apartment={apartment} openSlide={openSlide} />
                                                    </div>
                                                )
                                            } else {
                                                return (
                                                    <ApartmentDash key={index} apartment={apartment} openSlide={openSlide} />
                                                )
                                            }
                                        })}
                                    </div>
                                    :
                                    <div className="apartment_main mobile_only">
                                        {apartmentsToShow.map((apartment, index) => {
                                            if (apartmentsToShow.length === index + 1) {
                                                return (
                                                    <div key={index} ref={lastApartment}>
                                                        < ApartmentDashMobile key={index} apartment={apartment} openSlideForMoblie={openSlideForMoblie} />
                                                    </div>
                                                )
                                            } else {
                                                return (
                                                    < ApartmentDashMobile key={index} apartment={apartment} openSlideForMoblie={openSlideForMoblie} />
                                                )
                                            }
                                        })}
                                    </div>
                                }
                            </div>
                            {loading &&
                                <div className="loader_wrapper">
                                    <div className="loader">Loading...</div>
                                </div>
                            }
                        </div>
                        <Footer />
                    </div>
                </div>
            }
        </div>
    )
}

export default ApartmentForSale