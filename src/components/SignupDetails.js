import React, { useEffect, useState } from "react"

const SignupDetails = ({ getLastSignUpDetails }) => {

    const [name, setName] = useState("")
    const [last_name, setLastName] = useState("")
    const [phone, setPhone] = useState("")
    const [prePhone, setPrePhone] = useState("050")
    const [checkedTerm, setCheckedTerm] = useState(false)
    const [validSend, setValidSend] = useState(false)

    const onChangePhone = (e) => {
        let cloneNum = e.target.value
        if (cloneNum.length <= 7) {
            setPhone(cloneNum)
        }
    }

    const checkValidSend = () => {
        if (name.length > 0 && last_name.length > 0 && phone.length > 0 && checkedTerm) {
            setValidSend(true)
        } else {
            setValidSend(false)
        }
    }
    const submitForm = (e) => {
        e.preventDefault()
        // console.log({
        //     name: name,
        //     last_name,
        //     phone: prePhone + phone
        // })
        const theNum = prePhone + phone
        getLastSignUpDetails(name, last_name, theNum)
    }
    useEffect(() => {
        checkValidSend()
    }, [name, last_name, phone, checkedTerm])
    return (
        <div className="inner-wrapper">
            <div className="header_login">
                <h3>הרשמה</h3>
                <p>הזן את הפרטים כדי להירשם</p>
            </div>
            <div className="inner-wrapper_content">
                <form onSubmit={(e) => {
                    submitForm(e)
                }}>
                    <div className="input_wrapper">
                        <p>שם פרטי</p>
                        <input value={name} onChange={(e) => {
                            setName(e.target.value)

                            //checkValidSend()
                        }} className="login_input" type="text" placeholder="הקלד שם פרטי"></input>
                        <p>שם משפחה</p>
                        <input value={last_name} onChange={(e) => {
                            setLastName(e.target.value)

                            //checkValidSend()
                        }} className="login_input" type="text" placeholder="הקלד שם משפחה"></input>
                        <p>מספר טלפון</p>
                        <div className="phone_inputs_container">
                            <input value={phone} onChange={(e) => {
                                onChangePhone(e)
                                //checkValidSend()
                            }} className="right-phone" autoComplete="tel-local"></input>
                            <select className="left-phone" value={prePhone} onChange={(e) => {
                                setPrePhone(e.target.value)

                            }}>
                                <option value="050">050</option>
                                <option value="051">051</option>
                                <option value="052">052</option>
                                <option value="053">053</option>
                                <option value="054">054</option>
                                <option value="055">055</option>
                                <option value="058">058</option>
                            </select>
                        </div>
                        <p>תאריך לידה</p>
                        <input type="date" className="login_input date_input" />
                        <div className="checkbox_info signup_checkbox">
                            <input checked={checkedTerm} onChange={() => {
                                setCheckedTerm(!checkedTerm)
                            }} type="checkbox" />
                            <span>קראתי ומשאר את <span className="orange">תקנון</span> האתר</span>
                        </div>
                        <div className="checkbox_info signup_checkbox">
                            <input type="checkbox" />
                            <span>מאשר קבלת דיוור פרסומי כללי מיד2</span>
                        </div>

                    </div>
                    <div className="bottom_login">
                        <button type="submit" disabled={!validSend} className={validSend ? "login_button valid_button" : "login_button"}>שלח</button>
                    </div>
                </form>
            </div>
        </div >
    )
}
export default SignupDetails