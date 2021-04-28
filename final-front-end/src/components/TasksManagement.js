import React,  { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container, Col, Card, Button, Modal, Image } from 'react-bootstrap'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTasks } from './redux/tasks/tasksActions'

import AddTaskForm from './partial/tasksManagement/AddTaskForm'
import TaskCard from './partial/tasksManagement/TaskCard'



const TasksManager = () => {
    const [isFormShown, setIsFormShown] = useState(false)
    // eslint-disable-next-line no-lone-blocks
    const showForm = () => {{!isFormShown? setIsFormShown(true) : setIsFormShown(false)}}
    const taskState = useSelector(state => state.task)
    const connectedUserState = useSelector(state => state.connectedUser)

    const dispatch = useDispatch()
    

    useEffect(() => {
        if(connectedUserState.connected){
            dispatch(fetchTasks())
        }
    },[dispatch, connectedUserState])

    return (
        <div>
            {/* The little banner in the top */}
            <section className="inner-page-banner" id="home"/>

            {/* Begin Return browsing */}
            <div class="breadcrumb-agile">
	            <ol class="breadcrumb mb-0">
		            <li class="breadcrumb-item">
			            <Link to='/'>Home</Link>
		            </li>
		            <li class="breadcrumb-item active" aria-current="page">Tasks Manager</li>
	            </ol>
            </div>
            {/* Return browsing end*/}

            {/* Show form space start */}
               <Container className="d-flex align-items-center flex-column mt-5">
                    <p>If you want to add a Task click the button below.</p>
                    <Button variant="warning" size="lg" onClick={showForm}>Show the form</Button>
                </Container>
            {/* show form space end*/}
            

  

            {/* Task cards space start*/}
            { connectedUserState.connected? (
                <Container className="d-flex align-items my-5" >
                <Col>
                        <Card.Header><PhaseSubTitle className="fa">ToDo</PhaseSubTitle></Card.Header>
                        {taskState.tasks.filter((task) => task.status === 'ToDo').map((task) => (
                            <TaskCard task={task} key={task._id}></TaskCard>
                        ))}
                </Col>
                <Col>
                        <Card.Header><PhaseSubTitle className="fa">InProgress</PhaseSubTitle></Card.Header>
                        {taskState.tasks.filter((task) => task.status === 'InProgress').map((task) => (
                            <TaskCard task={task} key={task._id}></TaskCard>
                        ))}
                </Col>
                <Col>
                        <Card.Header><PhaseSubTitle className="fa">Done</PhaseSubTitle></Card.Header>
                        {taskState.tasks.filter((task) => task.status === 'Done').map((task) => (
                            <TaskCard task={task} key={task._id}></TaskCard>
                        ))}
                </Col> 
                </Container>
            ) : (
               <Container>
                    <PhaseSubTitle className="my-5">
                        If you want to manipulate tasks you need to Sign-In first !
                        Or if you don't have an account talk to sophie Chatbot to Sign-Up. 
                        It has multiple methods for that ! 
                    </PhaseSubTitle>
                    <img src="./images/taskCardSpace.png"></img>
               </Container>
            )}
            {/* Task cards space end*/}


            <Modal
                show={isFormShown}
                onHide={() => setIsFormShown(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >   
              <Modal.Header closeButton>
                <Modal.Title >
                    Adding a new task
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <AddTaskForm unShowPopup={() => setIsFormShown(false)}></AddTaskForm>
                </Modal.Body>
            </Modal>
        </div>
    )
}


const PhaseSubTitle = styled.div`
    text-align : center;
    font-size : 2em;
    color : #FFC300;
    text-shadow: 2px 1px #72726A;
`

export default TasksManager
