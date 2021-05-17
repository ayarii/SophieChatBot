import {FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, DELETE_USER, ADD_USER,UPDATE_USER} from './userTypes'
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

export const updateUser = (user) =>{
    return {
        type : UPDATE_USER,
        payload : user
    }
}



export const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUsersRequest())
     axios.get('http://185.117.75.79:5000/users')
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
         axios.delete(`http://185.117.75.79:5000/users/${id}`)
        .then(
            dispatch(deleteUser(id))
        )
    }
}




export const AddUser = (user) =>{
   
    return function (dispatch){
        console.log("user : ",user)
         axios.post(`http://185.117.75.79:5000/users/`,user)
         .then((response) => {
            dispatch(addUser(response.data))
        }).catch((error)=>console.log("errorAddinng  : ", error.response));
    }
}





export const UpdateUser = (user) =>{
    console.log(user)
    return function (dispatch){
         axios.put(`http://185.117.75.79:5000/users/${user._id}`,user)
         .then(() => {
            dispatch(updateUser(user))
        }, (error) => {
            console.log({"error updating ": error});
        });
    }
}