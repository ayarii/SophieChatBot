import {FETCH_REVIEWS_REQUEST, FETCH_REVIEWS_SUCCESS, FETCH_REVIEWS_FAILURE, DELETE_REVIEW, ADD_REVIEW,UPDATE_REVIEW} from './reviewTypes'
const initialState = {
    loading: false,
    reviews: [],
    error: ''
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REVIEWS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_REVIEWS_SUCCESS:
            return {
                loading: false,
                reviews: action.payload,
                error: ''
            }
        case FETCH_REVIEWS_FAILURE:
            return {
                loading: false,
                reviews: [],
                error: action.payload
            }
        case DELETE_REVIEW:
            return {
                ...state,
                reviews: state.reviews.filter((review) => review._id !== action.payload)
            }
        case ADD_REVIEW:
            return {
                ...state,
                reviews: [...state.reviews, action.payload],
            }
        case UPDATE_REVIEW:
            return {
                ...state,
                reviewq: state.reviews.map((review)=> review._id === action.payload._id ? action.payload : review  )
            }


        default: return state
    }
}
export default reducer