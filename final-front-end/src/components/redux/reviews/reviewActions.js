import {FETCH_REVIEWS_REQUEST, FETCH_REVIEWS_SUCCESS, FETCH_REVIEWS_FAILURE, DELETE_REVIEW, ADD_REVIEW,UPDATE_REVIEW} from './reviewTypes'
import axios from 'axios'

export const fetchReviewsRequest = () => {
    return {
        type : FETCH_REVIEWS_REQUEST
    }
}

export const fetchReviewsSuccess = reviews => {
    return {
        type : FETCH_REVIEWS_SUCCESS,
        payload : reviews
    }
}

export const fetchReviewsFailure = error => {
    return {
        type : FETCH_REVIEWS_FAILURE,
        payload : error
    }
}

export const deleteReview = (id) =>{
    return {
        type : DELETE_REVIEW,
        payload : id
    }
}

export const addReview = (review) =>{
    return {
        type : ADD_REVIEW,
        payload : review
    }
}

export const updateReview = (review) =>{
    return {
        type : UPDATE_REVIEW,
        payload : review
    }
}



export const fetchReviews = () => {
    return (dispatch) => {
        dispatch(fetchReviewsRequest)
     axios.get('http://localhost:5000/reviews')
     .then(response =>{
         //response.data is the array of reviews
         const reviews = response.data
         dispatch(fetchReviewsSuccess(reviews))
     })
     .catch(error=>{
         // error.message is the error description
         dispatch(fetchReviewsFailure(error.message))
     })
}
}

export const DeleteReview = (id) =>{
    return function (dispatch){
         axios.delete(`http://localhost:5000/reviews/${id}`)
        .then(
            dispatch(deleteReview(id))
        )
    }
}




export const AddReview= (review) =>{
   
    return function (dispatch){
        console.log("Review : ",review)
         axios.post(`http://localhost:5000/reviews/`,review)
         .then((response) => {
            dispatch(addReview(response.data))
        }).catch((error)=>console.log("errorAddinng  : ", error.response));
    }
}





export const UpdateReview = (review) =>{
    return function (dispatch){
         axios.put(`http://localhost:5000/reviews/${review._id}`,review)
         .then(() => {
            dispatch(updateReview(review))
        }, (error) => {
            console.log({"error updating ": error});
        });
    }
}