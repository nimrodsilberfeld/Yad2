import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { AuthContext } from '../context/authContext'
// import { LoginContext } from '../context/LoginContex'

const PrivateRoute = ({ component: Component, ...rest }) => {

    const { auth } = useContext(AuthContext)
    console.log(auth)
    return (
        <Route
            {...rest}
            component={(props) => (
                !!auth.user ?
                    <Component {...props} /> :
                    <Redirect to={{ pathname: "/" }} />
            )}
        />
    )
}

export default PrivateRoute