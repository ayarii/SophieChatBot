import React, { useState, useEffect } from 'react'
import { Container, Form } from 'react-bootstrap'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { AddTask } from '../../redux/tasks/tasksActions'
import moment from 'moment'


const AddTaskForm = (props) => {

    const connectedUserState = useSelector(state => state.connectedUser)
    const dispatch = useDispatch()
    const [task, setTask] = useState({userId : connectedUserState.user._id})
    const [isLoginRequiredShown, setIsLoginRequiredShown] = useState(false)
    const [taskToRender, setTaskToRender] = useState(task)

    useEffect(() => {
        console.log("connected User",connectedUserState)
    })
    
    const addTask = () => { 
         if(task.userId===""){
             setIsLoginRequiredShown(true)
         }
         else{
            dispatch(AddTask(taskToRender))
            console.log("The added task is : " + taskToRender)
            props.unShowPopup()
         }
    }
    
    return (
        <>
        <Container className="mt-2">  
             <Form>
                <FormSubTitle>Task title :</FormSubTitle>
                <Form.Control size="lg" type="text" onChange={
                    (e) => {
                        setTask({...task, title : e.target.value})
                        setTaskToRender({...taskToRender, title : e.target.value})
                    }
                } />
               <div className="d-flex justify-content-between mt-3">
                    <div >
                        <FormSubTitle>Begin date :</FormSubTitle>
                        <DatePicker className="form-control" 
                        selected = {task.beginDate}
                        onChange = { date => {
                            setTask({
                                ...task,
                                beginDate : date,
                                status : `${task.beginDate = new Date()? "InProgress" : "ToDo"}`
                            })
                            setTaskToRender({
                                ...taskToRender,
                                beginDate : moment(date).format("DD/MM/yyyy"),
                                status : `${moment(date).format("DD/MM/yyyy") === moment(new Date()).format("DD/MM/yyyy")? "ToDo" : "InProgress"}`
                            })
                        }}
                        dateFormat = "dd/MM/yyyy"
                        minDate={new Date()}
                        isClearable
                        showYearDropdown
                        />
                    </div>
                
                    <div>
                        <FormSubTitle>End date :</FormSubTitle>
                        <DatePicker className="form-control" 
                        selected = {task.endDate}
                        onChange = { date => {
                            setTask({...task, endDate : date})
                            setTaskToRender({...taskToRender, endDate : moment(date).format("DD/MM/yyyy")})
                        }}
                        dateFormat = "dd/MM/yyyy"
                        minDate={task.beginDate? task.beginDate : new Date()}
                        isClearable
                        showYearDropdown
                        />
                    </div>
               </div>
               
                <FormSubTitle className ="mt-3">Description :</FormSubTitle>
                <Form.Control size="lg" as="textarea"  rows={3} onChange={
                    (e) => {
                        setTask({...task, description : e.target.value})
                        setTaskToRender({...taskToRender, description : e.target.value})
                    }
                } />
                <div className="d-flex justify-content-center mt-3">
                    <Button variant="outline-warning" onClick={addTask}>Add Task</Button>{' '}
                </div>
            </Form>
        </Container>
        <Modal
                show={isLoginRequiredShown}
                onHide={() => setIsLoginRequiredShown(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"

            >   
                <Modal.Body>
                    <p>
                        If you want to add tasks please Sign-In first. 
                        Or if you don't have an account talk to sophie Chatbot to Sign-Up. 
                        It has multiple methods for that !  
                    </p>
                    <Container className="d-flex justify-content-center">
                    <Button  onClick={() => { 
                        setIsLoginRequiredShown(false)
                        props.unShowPopup()
                    }}>Okay</Button>  
                   </Container>
                </Modal.Body>
            </Modal>
        </>

    )
}
const FormSubTitle = styled.div`
font-family : Comic Sans Ms;
font-size : 1.35em;
font-weight : bolder;
color : #4F4F37;
`


export default AddTaskForm
