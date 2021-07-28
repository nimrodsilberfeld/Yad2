import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
// import { createBrowserHistory } from 'history'
//import ApartmentForRent from '../components/ApartmentForRent'
import ApartmentForSale from '../components/ApartmentForSale'
// import Header from '../components/Header'
// import ImageSlideShow from '../components/ImageSlideShow'
import AddApartmentDash from '../components/AddApartmentDash'
import AuthContextProvider from '../context/authContext'
import PrivateRoute from './PrivateRoute'
import ApartmentMobile from '../components/ApartmentMobile'
import FiltersMobile from '../components/FiltersMobile'


const AppRouter = () => {

    return (
        <BrowserRouter>
            <AuthContextProvider>
                {/* <Header /> */}
                <Switch>
                    <Route path="/" exact>
                        <Redirect to="/forsale" />
                    </Route>
                    <Route path="/forsale" component={ApartmentForSale} />
                    {/* <Route path="/forRent" component={ApartmentForRent} /> */}
                    <Route path="/apartment" component={ApartmentMobile} />
                    {/* <Route path="/slide/:id" component={ImageSlideShow} /> */}
                    <PrivateRoute path="/newApartment" component={AddApartmentDash} />
                    <PrivateRoute path="/filters" component={FiltersMobile} />
                </Switch>
            </AuthContextProvider>
        </BrowserRouter>
    )
}
export default AppRouter