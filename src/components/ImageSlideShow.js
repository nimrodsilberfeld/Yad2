import React, { useEffect, useState } from "react"
// import {history} from '../routes/AppRouter'
import { useHistory } from 'react-router-dom'
import arrow from "../img/Arrow_right.png"
// import testPic from "../img/apartment_test.jpeg"
const ImageSlideShow = ({ closeSlide, images }) => {
    const history = useHistory()
    const [numOfPictures, setNumOfPictures] = useState(images.length)
    const [currentPictures, setCurrentPictures] = useState(0)
    const [loader, setLoader] = useState(true)
    // useEffect(() => {

    // }, [])
    //console.log(params)
    const clickNext = () => {
        setCurrentPictures(currentPictures + 1 >= numOfPictures ? 0 : currentPictures + 1)
    }
    const clickPrev = () => {
        setCurrentPictures(currentPictures - 1 < 0 ? numOfPictures - 1 : currentPictures - 1)
    }
    return (
        <div className="imageSlide">
            <div className="imageContainer">
                <div className="image_content">
                    <div className="image_content_wrapper">
                        <div className="right_content">
                            <div className="exit_images mobile_only" onClick={() => {
                                closeSlide()
                            }}>
                                <button>
                                    <i className="fas fa-times"></i>
                                    <span>חזרה למודעה</span>
                                </button>
                            </div>
                            <div className="swiper_container">
                                <div onClick={() => {
                                    clickNext()
                                }} className="button_next"><img alt="" src={arrow} /></div>
                                <div onClick={() => {
                                    clickPrev()
                                }} className="button_prev"><img alt="" src={arrow} /></div>
                                <div className="top_swiper_container not_mobile">
                                    <span>צריכים עזרה למצוא דירה? כל המתווכים במקום אחד</span>
                                </div>
                                <div className="swiper_content">
                                    <img alt="" src={images[currentPictures]} />
                                    <div className="num_img">
                                        <span>תמונה {currentPictures + 1} מתוך {numOfPictures}</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="left_content not_mobile">
                            <button className="go_back_button" onClick={() => {
                                history.push('/forsale')
                                closeSlide()

                            }}><i className="fas fa-times"></i> חזור למודעה</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ImageSlideShow