// export async function saveImage(data={}){
//     const response=await fetch("http://localhost:5000/save-image",{
//         method
//     })

import axios from "axios"
let url="https://nim-yad2-back.herokuapp.com/"
export const loginToSite = async (email, password) => {
    try {
        const response = await axios.post(`user/login`, { email, password })
        return response
    } catch (err) {
        console.log(err)
        if (err.response && err.response.status === 400) {
            throw new Error(err.response.data.error.message)
        }
    }
}

export const logout = async (token) => {
    console.log(token)
    const body = {};
    try {
        const response = await axios.post(`${url}user/logout`, body,
            {
                headers: {
                    // 'Authorization': `${token}`,
                    // 'Content-Type': 'application/json',
                    // 'Acess-Control-Allow-Origin': '*',
                    'Authorization': `Bearer ${token}`,
                }
            }
        )
        return response
    } catch (err) {
        throw new Error(err.response.data.error.message)
        // console.log(err)
        // if (err.response && err.response.status === 400) {
        // }
    }
}

export const signUpToSite = async (userData) => {
    try {
        const response = await axios.post(`${url}user/create`, userData)
        return response
    } catch (err) {
        throw new Error(err.response.data.error.message)
    }
}

export const addApartment = async (apartmentData) => {
    try {
        const response = await axios.post(`${url}apartment/new`, apartmentData)
        return response
    } catch (err) {
        throw new Error(err.response.data.error.message)
    }
}

export const getFiltersApartment = async (filters, page) => {
    try {
        const response = await axios.post(`${url}filterApartment?page=${page}`, filters)
        return response
    } catch (err) {
        throw new Error(err.response.data.error.message)
    }
}

export const getGeoInfo = async (place) => {
    try {
        const response = await axios.post(`https://data.gov.il/api/3/action/datastore_search?resource_id=a7296d1a-f8c9-4b70-96c2-6ebb4352f8e3&q=${place}`)
        return response
    } catch (err) {
        throw new Error(err.response.data.error.message)
    }
}