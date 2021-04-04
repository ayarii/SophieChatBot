import {FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, DELETE_USER, ADD_USER} from './userTypes'
import axios from 'axios'
export const fetchUsersRequest = () => {
    return {
        type : FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = users => {
    return {
        type : FETCH_USERS_SUCCESS,
        payload : users
    }
}

export const fetchUsersFailure = error => {
    return {
        type : FETCH_USERS_FAILURE,
        payload : error
    }
}

export const deleteUser = (id) =>{
    return {
        type : DELETE_USER,
        payload : id
    }
}

export const addUser = (user) =>{
    return {
        type : ADD_USER,
        payload : user
    }
}



export const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUsersRequest())
     axios.get('http://localhost:5000/users')
     .then(response =>{
         //response.data is the array of users
         const users = response.data
         dispatch(fetchUsersSuccess(users))
     })
     .catch(error=>{
         // error.message is the error description
         dispatch(fetchUsersFailure(error.message))
     })
    }
}


export const DeleteUser = (id) =>{
    return function (dispatch){
         axios.delete(`http://localhost:5000/users/${id}`)
        .then(
            dispatch(deleteUser(id))
        )
    }
}




export const AddUser = (user) =>{
    return function (dispatch){
         axios.post(`http://localhost:5000/users/`,user)
         .then((response) => {
            console.log(response);
            dispatch(addUser(user))
            //fetchUsers()
        }, (error) => {
            console.log(error);
        });
    }
}

