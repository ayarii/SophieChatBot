import React, { useState} from 'react'
import { Card, Modal, Button, Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import moment from 'moment'

import { DeleteTask } from '../../redux/tasks/tasksActions'
import UpdateTaskForm from './UpdateTaskForm'

const TaskCard = (props) => {

    const [detailShow, setDetailShow] = useState(false)
    const [updateShow, setUpdateShow] = useState(false)
    const [deleteShow, setDeleteShow] = useState(false)


    const dispatch = useDispatch()


    
    const deleteTask = () => {
        dispatch(DeleteTask(props.task._id))
        setDeleteShow(false)
    }


   // const [task, setTask] = useState(props.task)

//    const onUpdateButtonClick = () => {
//        setTask({
//            ...task, beginDate : new Date(task.beginDate), endDate : new Date(task.endDate)
//        })
//        console.log(typeof task.beginDate)
//        setUpdateShow(true)
//    }


    return (
        <>
        {/* Task card Style start */}
            <CardMiniSize>
                <div className="my-2">
                    <Card>
                        <Card.Body>
                            <img 
                            src="assets/images/closeImage.png" 
                            alt="close button" 
                            style={{float : "right"}}
                            onClick={() => setDeleteShow(true)}
                            />
                            <Card.Title>{props.task.title.substr(0,25).trim()}{props.task.title.length>10 && "..."}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                            <Card.Text>{props.task.description.substr(0,80)}{props.task.description.length>40 && "..."}</Card.Text>
                            <Button variant="outline-dark" onClick={() => setDetailShow(true)}>More info</Button>
                            <Button variant="outline-success ml-3" onClick={() => setUpdateShow(true)}>Update Task</Button>
                        </Card.Body>
                    </Card>
                </div>
            </CardMiniSize>
        {/* Task card Style end*/}

        {/* More info popup start */}
            <Modal
                show={detailShow}
                onHide={() => setDetailShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    {props.task.title}
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h6 style={{color : '#8A8A81'}}><span style={{color : '#424447'}}>Its date : </span>From {moment(props.task.beginDate).format("DD/MM/yyyy")} To {moment(props.task.endDate).format("DD/MM/yyyy")}</h6>
                    <p>{props.task.description}</p>
                </Modal.Body>
            </Modal>
        {/* More info popup end */}
        
        {/* Update popup start */}
            <Modal
                show={updateShow}
                onHide={() => setUpdateShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >   
              <Modal.Header closeButton>
                <Modal.Title >
                    Updating a new task
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <UpdateTaskForm task={props.task} unshowPopup={() => setUpdateShow(false)}></UpdateTaskForm>
                </Modal.Body>
            </Modal>
        {/* Update popup end */}

         {/* Update popup start */}
         <Modal
                show={deleteShow}
                onHide={() => setDeleteShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >   
                <Modal.Body>
                    <p>Do you want to delete the task with id : {props.task._id} ?</p>
                   <Container className="d-flex justify-content-center">
                    <Button onClick={deleteTask}>Yes</Button>
                    <Button onClick={() => setDeleteShow(false)}>No</Button>
                   </Container>
                </Modal.Body>
            </Modal>
        {/* Update popup end */}
           
        </>
    )

    
}


const CardMiniSize = styled.div`
    heigth : 30%
`
    

export default TaskCard
