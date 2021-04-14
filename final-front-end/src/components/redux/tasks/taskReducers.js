import { FETCH_TASKS_REQUEST, FETCH_TASKS_SUCCESS, FETCH_TASKS_FAILURE, ADD_TASK, UPDATE_TASK, DELETE_TASK } from './taskType'
 
const initialState = {
    loading : false,
    tasks : [],
    error : ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_TASKS_REQUEST:
            return{
                ...state,
                laoding : true
            }
        case FETCH_TASKS_SUCCESS:
            return{
                loading : false,
                tasks : action.payload,
                error : ''
            }
        case FETCH_TASKS_FAILURE:
            return{
                loading : false,
                tasks : [],
                error : action.payload
            }
            case ADD_TASK:
                return {
                    ...state,
                    tasks: [...state.tasks, action.payload],
                }
        case UPDATE_TASK:
            return{
                ...state,
                tasks : state.tasks.map(task => task._id === action.payload._id ? action.payload : task)
            }
        case DELETE_TASK:
            return{
                ...state,
                tasks : state.tasks.filter(task => task._id !== action.payload)
            }
        default: return state
    }
}

export default reducer;