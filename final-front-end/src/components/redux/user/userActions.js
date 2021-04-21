import { CONNECT_USER } from "./userType"

export const connectUser = (user)=> {
    return {
        type : CONNECT_USER,
        payload:user
    }
}