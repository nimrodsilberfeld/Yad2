import React, { createContext, useReducer } from 'react'
import authReducer, { initialLogin } from '../reducer/authReducer'

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
    const userFromLocalStorage = {
        user: JSON.parse(localStorage.getItem("user"))
    }


    const [auth, dispatchAuth] = useReducer(authReducer, userFromLocalStorage || initialLogin)

    return (
        <AuthContext.Provider value={{ auth, dispatchAuth }}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider

