import { FETCH_TASKS_REQUEST, FETCH_TASKS_SUCCESS, FETCH_TASKS_FAILURE, ADD_TASK, UPDATE_TASK, DELETE_TASK } from './taskType'
import axios from 'axios' 
import React from 'react'
import { Redirect } from 'react-router'

export const fetchTasksResquest = userId => {
    return {
        type : FETCH_TASKS_REQUEST
    }
}

export const fetchTasksSuccess = tasks => {
    return {
        type : FETCH_TASKS_SUCCESS,
        payload : tasks
    }
}

export const fetchTasksFailure = error => {
    return {
        type : FETCH_TASKS_FAILURE,
        payload : error
    }
}

export const addTask = (task) =>{
    return {
        type : ADD_TASK,
        payload : task
    }
}

export const updateTask = task => {
    return {
        type : UPDATE_TASK,
        payload : task
    }
}

export const deleteTask = id => {
    return {
        type : DELETE_TASK,
        payload : id
    }
}

export const  fetchTasks = (userId) => {
    return function(dispatch){
        dispatch(fetchTasksResquest())
        axios.get('http://185.117.75.79:5000/tasks')
        .then(res => {
            const tasks = res.data.filter(task => task.userId === userId)
            dispatch(fetchTasksSuccess(tasks))
        })
        .catch(error => {
            dispatch(fetchTasksFailure(error.message))
        })
    }
}

export const AddTask = (task) => {
    return function (dispatch){
         axios.post(`http://185.117.75.79:5000/tasks/`,task)
         .then((response) => {
            dispatch(addTask(response.data))
        }).catch((error)=>console.log("Error on adding the new Task  : ", error.response));
    }
}

export const UpdateTask = (task) => {
    return function (dispatch){
        axios.put(`http://185.117.75.79:5000/tasks/${task._id}`, task)
        .then(() => {
            dispatch(updateTask(task))
        })
        .catch(error => console.log("Error on updating the task with id " + task._id))
    }
}

export const DeleteTask = (id) => {
    return function (dispatch){
        axios.delete(`http://185.117.75.79:5000/tasks/${id}`)
        .then(
            dispatch(deleteTask(id))
        ).catch(error => console.log("Error on deleting the task :" +error.response))
    }
}

export const GoToTasksManagementInterface = () => {
    return <Redirect to="/tasksManager"/>
}