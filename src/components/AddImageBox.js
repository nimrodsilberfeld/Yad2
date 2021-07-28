import React, { useState } from "react"
import pen from "../img/pen.png"
const AddImageBox = ({ numOfPhoto, submitPhoto }) => {
    const [file, setFile] = useState("")

    const hiddenFileInputImage = React.useRef(null)

    const handleClickImage = event => { //trigger the input file 
        hiddenFileInputImage.current.click();
    };

    return (
        <div className={file ? "image_box_file" : "image_box"}>
            <div className={file ? "upload_main_with_photo" : "upload_main"}>

                {file ?
                    <div className="img_preview_box_container">
                        <div className="edit_image_preview">
                            <div onClick={() => {
                                setFile("")
                            }} className="edit_image">
                                <i className="far fa-trash-alt"></i>
                            </div>
                            <div onClick={() => {
                                handleClickImage()
                            }} className="edit_image">
                                <img alt="" src={pen} />
                            </div>
                        </div>
                        <div className="img_preview_box">
                            <img 
                                onClick={() => {
                                    handleClickImage()
                                }}
                                className="img_preview" alt="img_preview" src={URL.createObjectURL(file)} />
                        </div>

                        {/* <span onClick={() => {
                            setFile("")
                        }}>נקה</span> */}
                    </div>
                    :
                    <div className="upload_main" onClick={() => {
                        handleClickImage()
                    }}>
                        <i className="fas fa-plus"></i>
                        <span>העלאת תמונה</span>
                    </div>
                }
            </div>

            <form encType="multipart/form-data"
            >
                <input
                    name="image"
                    type="file"
                    accept="video/mp4, video/mov,image/*"
                    style={{ display: "none" }}
                    ref={hiddenFileInputImage}
                    onChange={(e) => {
                        if (e.target.files[0]) {
                            const file = e.target.files[0]
                            setFile(file)
                            console.log(file)
                            submitPhoto(numOfPhoto, file)
                        }
                    }}
                />
            </form>
            {/* <form encType="multipart/form-data"
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
            </form> */}


        </div>
    )
}
export default AddImageBox