import React, { useCallback, useEffect, useRef, useState } from "react"
import FakeSearchBox from "./FakeSearchBox"

import UpperMobileHeader from "./UpperMoblieHeader"

const MobileHeader = ({
      hidingForSale,
    stopHideForSale }) => {
    const [hide, setHide] = useState(false)

    const event = useRef()
    var prevScrollpos = window.pageYOffset;
    const scrollWindowFunc = useCallback(() => {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            setHide(false)
           
        } else {
            setHide(true)
          
        }
        prevScrollpos = currentScrollPos;

    })
    // const scrollWindowFunc = () => {
    // }

    // window.onscroll = function () {
    //     var currentScrollPos = window.pageYOffset;
    //     if (prevScrollpos > currentScrollPos) {
    //         setHide(false)
    //         console.log("exisit")
    //     } else {
    //         setHide(true)
    //         console.log("exisit")
    //     }
    //     prevScrollpos = currentScrollPos;
    // }
    useEffect(() => {
      //console.log("window")  
        window.removeEventListener("scroll", event.current, true)
        event.current = scrollWindowFunc
        window.addEventListener("scroll", event.current, true)
    }, [scrollWindowFunc])
    useEffect(() => {
        return () => {
            //console.log("unmount")
            window.removeEventListener("scroll", scrollWindowFunc, true)
        }
    })


    return (
        <div className={hide ? "mobile_header mobile_only  hide_menu" : "mobile_header mobile_only show_menu"}>
            <UpperMobileHeader backButton={false}
                 hidingForSale={hidingForSale}
                stopHideForSale={stopHideForSale} />

            <div className={hide ? "mobile_fake_search hide_fake" : "mobile_fake_search show_fake"}>
                <FakeSearchBox />
            </div>
        </div>
    )
}
export default MobileHeader;
