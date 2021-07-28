import React, { useContext, useState } from "react"
import lightBulb from "../img/lightbulb.png"
import axios from "axios"
import camera from "../img/video-camera.png"
import AddImageBox from "./AddImageBox"
import pen from "../img/pen.png"
import { AuthContext } from "../context/authContext"
// import check from "../img/check.png"
const AddApartment5 = ({ AddApartment5Info, open, reOrderOpen }) => {
    const {auth}=useContext(AuthContext)
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(false)
    const [theImage, setImage] = useState("")
    const [theVideo, setVideo] = useState("")
    const [allImages, setImages] = useState([
        { id: 1, file: "" },
        { id: 2, file: "" },
        { id: 3, file: "" },
        { id: 4, file: "" },
        { id: 5, file: "" },
        { id: 6, file: "" },
        { id: 7, file: "" },
        { id: 8, file: "" },
        { id: 9, file: "" },

    ])
    let media = []
    
    const videoForm = React.useRef()
    const nextClick = async () => {
        setLoader(true)
        try {
            await Promise.all(allImages.map(async (photo) => {
                if (photo.file) {
                    await uploadImage(photo.file)
                }
            }))
            // if (theVideo) {
            //     await uploadImage(theVideo)
            // }
            setLoader(false)
            console.log("all media", media)
            AddApartment5Info(media)
        }
        catch (e) {
            setLoader(false)
            setError(true)
            return
        }
    }

    // const submitVideo = () => {
    //     videoForm.current.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))
    // }
    
    const hiddenFileInputVideo = React.useRef(null) //help us to trigger the input file function
    const handleClickVideo = event => { //trigger the input file 
        hiddenFileInputVideo.current.click();
    };

    const uploadImage = async (fileToUpload) => {
        console.log("triger")
        // e.preventDefault()
        
        let user=auth.user.user._id
        const fd = new FormData();
        fd.append("image", fileToUpload);
        await axios({
            url: `https://nim-yad2-back.herokuapp.com/save-image?user=${user}`,
            method: "POST",
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            },
            data: fd,
        }).then(res => {
            // setSrc(res.data.path)
            media.push(res.data.path)
            console.log(res.data.path)
        }).catch((err) => {
            throw new Error("oopes")
        })
    }

    const submitPhoto = (numOfPhoto, photo) => {
        let clone = [...allImages]
        clone[numOfPhoto].file = photo
        setImages(clone)
        console.log(clone)
    }
    return (
        <div className={open.open ? "step" : "closeStep"}>
            <div className="step_content">
                <div className="numIcon"><span className="number">{open.checked ? <i className="fas fa-check"></i> : "5"}</span></div>
                <div className={open.open?"step_title":"step_title close_title"}>
                    <h2>תמונות וסרטונים</h2>
                    {open.open
                        ?
                        <div className="recommendation recommendation_3">
                            <img alt="" className="lightbulb" src={lightBulb} />
                            <span className="lightBulb_span"> לא לדאוג, גם אם רואים את התמונה באופן לא ברור כעת, לאחר הפרסום הכל יראה כמו שצריך</span>
                        </div>
                        :
                        <div className="edit_type" onClick={() => {
                            reOrderOpen(4)
                        }}>
                            <img alt="" src={pen} />
                            <span>עריכה</span>
                        </div>
                    }
                </div>
                <div className="apartment_info">
                    <div className="apartment_long_title">
                        <h4>
                            ידעת שמודעות עם תמונות ברורות מקבלות פי 10 יותר פניות?
                        </h4>
                        <h4>לא להסס להעלות לפה תמונות (אפשר עד 10 + וידאו) ולהבליט את הצדדים הטובים ביותר של הנכס</h4>
                    </div>
                    <div className="top_media">
                        {/* // video form  
                        we give the form an ID for an outside button to Ref,i order to submit the form 
                        when needed 
                        */}
                        <form encType="multipart/form-data"
                            id="my-form"
                            onSubmit={(e) => {
                                uploadImage(e, theVideo)
                            }}
                            ref={videoForm}
                        >
                            <input
                                name="image"
                                type="file"
                                accept="video/mp4, video/mov,image/*"
                                style={{ display: "none" }}
                                ref={hiddenFileInputVideo}
                                onChange={(e) => {
                                    const file = e.target.files[0]
                                    setVideo(file)
                                    console.log(file)
                                }}
                            />
                        </form>
                        {/* <button form="my-form" type="submit">out-side</button> */}
                        <div onClick={handleClickVideo} className="video">
                            {theVideo ?
                                <>
                                    <video
                                        // width="250" height="240"
                                        // preload="none"
                                        controls
                                        src={URL.createObjectURL(theVideo)}
                                    />
                                </>
                                :
                                <>
                                    <div>
                                        <img alt="" src={camera} />
                                    </div>
                                    <span id="upload_video_span">העלאת סרטון</span>
                                </>
                            }
                        </div>
                        <div className="upload_main_photo">
                            <span>תמונה ראשית</span>
                            <div className="upload_main">
                                <i className="fas fa-plus"></i>
                                <span>העלאת תמונה</span>
                            </div>
                        </div>
                        {/* <button onClick={handleClick}>click</button> */}
                    </div>
                    <div className="bottom_border"></div>
                </div>
                <div className="bottom_media">
                    <h2>תמונות שיופיעו בגוף המודעה</h2>
                    <div className="bottom_media_image_box">
                        {[...Array(9)].map((item, index) => {
                            return (
                                <AddImageBox
                                    key={index}
                                    numOfPhoto={index}
                                    submitPhoto={submitPhoto}
                                />
                            )
                        })}
                    </div>
                </div>
                <div className="bottom_buttons">
                    <button className="btn"><span>חזרה</span></button>
                    {loader &&
                        <div className="loader">Loading...</div>
                    }
                    {error &&
                        <div>Ooops..</div>
                    }
                    <button className="next_button" onClick={() => {
                        nextClick()
                    }}>להמשיך לשלב הבא</button>
                </div>
            </div>
        </div>
    )
}
export default AddApartment5