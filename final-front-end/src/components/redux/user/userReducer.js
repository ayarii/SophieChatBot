import { CONNECT_USER, DISCONNECT_USER } from "./userType"

const initialUserState = {
    "_id": "",
    "nom": "",
    "prenom": "",
    "email": "",
    "numtel": 0,
    "pays": "",
    "profession": "",
    "userName": "",
    "password": "",
    "image": ""
}

const initialState = {
    connected: false,
    user: initialUserState,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CONNECT_USER:
            return {
                connected: true,
                user: action.payload
            }
            case DISCONNECT_USER:
                return {
                    connected: false,
                    user: initialUserState
                }
        default: return state
    }
}
export default reducer