import { CONNECT_USER, DISCONNECT_USER } from "./userType"

export const connectUser = (user)=> {
    return {
        type : CONNECT_USER,
        payload:user
    }
}

export const disconnectUser = ()=> {
    return {
        type : DISCONNECT_USER,
    }
}