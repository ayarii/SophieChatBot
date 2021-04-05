import { ADD_USER, DELETE_USER, FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, UPDATE_USER } from "./userTypes"

const initialState = {
    loading: false,
    users: [],
    error: ''
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter((user) => user._id !== action.payload)
            }
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload],
            }
        case UPDATE_USER:
            return {
                ...state,
                users: state.users.map((user)=> user._id === action.payload._id ? action.payload : user  )
            }


        default: return state
    }
}
export default reducer