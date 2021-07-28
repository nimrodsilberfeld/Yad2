export const initialLogin = {
    user: null,
}


const authReducer = (login, action) => {
    switch (action.type) {
        case "LOGIN":
            return { user: { ...action.user } }
        case "LOGOUT":
            return { user: null }
        default:
            return login
    }
}
export default authReducer