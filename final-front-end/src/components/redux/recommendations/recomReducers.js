import {FETCH_RECOMS_REQUEST, FETCH_RECOMS_SUCCESS, FETCH_RECOMS_FAILURE, DELETE_RECOM, ADD_RECOM,UPDATE_RECOM} from './recomTypes'
const initialState = {
    loading: false,
    recoms: [],
    error: ''
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RECOMS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_RECOMS_SUCCESS:
            return {
                loading: false,
                recoms: action.payload,
                error: ''
            }
        case FETCH_RECOMS_FAILURE:
            return {
                loading: false,
                recoms: [],
                error: action.payload
            }
        case DELETE_RECOM:
            return {
                ...state,
                recoms: state.recoms.filter((recom) => recom._id !== action.payload)
            }
        case ADD_RECOM:
            return {
                ...state,
                recoms: [...state.recoms, action.payload],
            }
        case UPDATE_RECOM:
            return {
                ...state,
                recoms: state.recoms.map((recom)=> recom._id === action.payload._id ? action.payload : recom  )
            }


        default: return state
    }
}
export default reducer