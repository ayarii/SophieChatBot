import React,  { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container, Col, Card, Button, Modal } from 'react-bootstrap'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import { fetchTasks } from './redux/tasks/tasksActions'
import AddTaskForm from './partial/tasksManagement/AddTaskForm'
import TaskCard from './partial/tasksManagement/TaskCard'
import { UpdateTask } from './redux/tasks/tasksActions'



const TasksManager = () => {
    
    const [isFormShown, setIsFormShown] = useState(false)
    const [isChangingStateShown, setIsChangingStateShown] = useState(false)
    // eslint-disable-next-line no-lone-blocks
    const showForm = () => {{!isFormShown? setIsFormShown(true) : setIsFormShown(false)}}
    // eslint-disable-next-line no-lone-blocks
    const showChangingStateForm = () => {{!isChangingStateShown? setIsChangingStateShown(true) : setIsChangingStateShown(false)}}
    const taskState = useSelector(state => state.task)
    const connectedUserState = useSelector(state => state.connectedUser)
    const dispatch = useDispatch()

    const [tasksList, setTasksList] = useState([])
    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    const handleOnDragEnd = (result) => {
        if(!result.destination) return;
        console.log(result)

        const items = Array.from(tasksList)
        const [reorderedItem] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderedItem)

        showChangingStateForm()
        dispatch(UpdateTask({
            ...taskState.tasks.filter((task) => task._id === result.draggableId)[0],
            status : result.destination.droppableId
        }))
        sleep(5000)
        
        console.log(result)

        setTasksList(items)
    }

    useEffect(() => {
        if(connectedUserState.connected){
            dispatch(fetchTasks(connectedUserState.user._id))
        }
    },[dispatch, connectedUserState])

    useEffect(() => {
        setTasksList(taskState.tasks)
    }, [taskState.tasks])

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
            {/* Return browsing end */}

            {/* Show form space start */}
               <Container className="d-flex align-items-center flex-column mt-5">
                    <p>If you want to add a Task click the button below.</p>
                    <Button variant="warning" size="lg" onClick={showForm}>Show the form</Button>
                </Container>
            {/* show form space end */}
            

  

            {/* Task cards space start */}
            { connectedUserState.connected? (
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Container className="d-flex align-items my-5" >
                    <Col xs="6" sm="4">
                        <Droppable droppableId="ToDo">
                            {(provided) => ( 
                                <div {...provided.droppableProps} ref={provided.innerRef} >
                                    <Col>
                                        <Card.Header><PhaseSubTitle className="fa">ToDo</PhaseSubTitle></Card.Header>
                                        {tasksList.filter((task) => task.status === 'ToDo').map((task, index) => (
                                            <Draggable key={task._id} draggableId={task._id} index={index} >    
                                                {(provided) => ( 
                                                    <div
                                                        {...provided.draggableProps} 
                                                        {...provided.dragHandleProps} 
                                                        ref={provided.innerRef}>
                                                        <TaskCard task={task} key={task._id}></TaskCard>
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </Col>
                                    
                                </div>
                            )}
                        </Droppable>
                    </Col>
                    <Col xs="6" sm="4">
                        <Droppable droppableId="InProgress">
                            {(provided) => ( 
                                <div {...provided.droppableProps} ref={provided.innerRef}>
                                    <Col>
                                        <Card.Header><PhaseSubTitle className="fa">InProgress</PhaseSubTitle></Card.Header>
                                        {tasksList.filter((task) => task.status === 'InProgress').map((task, index) => (
                                        <Draggable key={task._id} draggableId={task._id} index={index} >    
                                            {(provided) => (
                                                <div
                                                    {...provided.draggableProps} 
                                                    {...provided.dragHandleProps} 
                                                    ref={provided.innerRef}>
                                                    <TaskCard task={task} key={task._id}></TaskCard>
                                                </div>
                                            )}
                                        </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </Col>
                                </div>
                            )}
                        </Droppable> 
                    </Col>

                    <Col sm="4">
                        <Droppable droppableId="Done">
                            {(provided) => ( 
                                <div {...provided.droppableProps} ref={provided.innerRef}>
                                    <Col>
                                        <Card.Header><PhaseSubTitle className="fa">Done</PhaseSubTitle></Card.Header>
                                        {tasksList.filter((task) => task.status === 'Done').map((task, index) => (
                                        <Draggable key={task._id} draggableId={task._id} index={index} >    
                                            {(provided) => (
                                                <div
                                                    {...provided.draggableProps} 
                                                    {...provided.dragHandleProps} 
                                                    ref={provided.innerRef}>
                                                    <TaskCard task={task} key={task._id}></TaskCard>
                                                </div>
                                            )}
                                        </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </Col>
                                </div>
                            )}
                        </Droppable>
                    </Col>
                      </Container>
                </DragDropContext>
            ) : (
               <Container>
                    <PhaseSubTitle className="my-5">
                        If you want to manipulate tasks you need to Sign-In first !
                        Or if you don't have an account talk to <h2>sophie Chatbot</h2> to Sign-Up. 
                        It has multiple methods for that ! 
                    </PhaseSubTitle>
                    <div className="justify-content-center">
                        <img 
                            src={require('../assets/images/taskCardSpace.png')} 
                            name="task-cards-space-exemple"
                            alt="task cards space exemple"
                        />
                    </div>
               </Container>
            )}
            {/* Task cards space end */}

            {/* Adding task Modal start */}
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
            {/* Adding task Modal end */}


            {/* Changing task Status start */}
                         <Modal
                show={isChangingStateShown}
                onHide={() => setIsChangingStateShown(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >   
                <Modal.Body>
                    <h4> You have changed a task status. </h4>
                    <div className="d-flex justify-content-center mt-3">
                        <Button variant="outline-success" onClick={showChangingStateForm}>Okay</Button>{' '}
                    </div>
                </Modal.Body>
            </Modal>
            {/* Adding task Modal end */}
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
