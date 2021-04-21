import { CONNECT_USER } from "./userType"



const initialState = {
    connected: false,
    user: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CONNECT_USER:
            return {
                connected: true,
                user: action.payload
            }
        default: return state
    }
}
export default reducer