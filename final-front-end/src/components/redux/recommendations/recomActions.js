import {FETCH_RECOMS_REQUEST, FETCH_RECOMS_SUCCESS, FETCH_RECOMS_FAILURE, DELETE_RECOM, ADD_RECOM,UPDATE_RECOM} from './recomTypes'
import axios from 'axios'

export const fetchRecomsRequest = () => {
    return {
        type : FETCH_RECOMS_REQUEST
    }
}

export const fetchRecomsSuccess = recoms => {
    return {
        type : FETCH_RECOMS_SUCCESS,
        payload : recoms
    }
}

export const fetchRecomsFailure = error => {
    return {
        type : FETCH_RECOMS_FAILURE,
        payload : error
    }
}

export const deleteRecom = (id) =>{
    return {
        type : DELETE_RECOM,
        payload : id
    }
}

export const addRecom = (recom) =>{
    return {
        type : ADD_RECOM,
        payload : recom
    }
}

export const updateRecom = (recom) =>{
    return {
        type : UPDATE_RECOM,
        payload : recom
    }
}



export const fetchRecoms = () => {
    return (dispatch) => {
        dispatch(fetchRecomsRequest)
     axios.get('http://localhost:5000/recommendations')
     .then(response =>{
         //response.data is the array of recommendations
         const recoms = response.data
         dispatch(fetchRecomsSuccess(recoms))
     })
     .catch(error=>{
         // error.message is the error description
         dispatch(fetchRecomsFailure(error.message))
     })
}
}

export const DeleteRecom = (id) =>{
    return function (dispatch){
         axios.delete(`http://localhost:5000/recommendations/${id}`)
        .then(
            dispatch(deleteRecom(id))
        )
    }
}




export const AddRecom = (recom) =>{
   
    return function (dispatch){
        console.log("Recommendation : ",recom)
         axios.post(`http://localhost:5000/recommendations/`,recom)
         .then((response) => {
            dispatch(addRecom(response.data))
        }).catch((error)=>console.log("errorAddinng  : ", error.response));
    }
}





export const UpdateRecom = (recom) =>{
    return function (dispatch){
         axios.put(`http://localhost:5000/recommendations/${recom._id}`,recom)
         .then(() => {
            dispatch(updateRecom(recom))
        }, (error) => {
            console.log({"error updating ": error});
        });
    }
}