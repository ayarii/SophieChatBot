import React, { useState} from 'react'
import { Card, Modal, Button } from 'react-bootstrap'
import styled from 'styled-components'

const TaskCard = (props) => {

    const [show, setShow] = useState(false);

    return (
        <>
            <CardMiniSize>
                <div className="my-2">
                    <Card>
                        <Card.Body>
                            <Card.Title>{props.task.title.substr(0,25).trim()}{props.task.title.length>10 && "..."}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                            <Card.Text>{props.task.description.substr(0,80)}{props.task.description.length>40 && "..."}</Card.Text>
                            <Button variant="outline-dark" onClick={() => setShow(true)}>More info</Button>
                        </Card.Body>
                    </Card>
                </div>
            </CardMiniSize>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    {props.task.title}
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h6 style={{color : '#8A8A81'}}><span style={{color : '#424447'}}>Its date : </span>From {props.task.beginDate} To {props.task.endDate}</h6>
                    <p>{props.task.description}</p>
                </Modal.Body>
            </Modal>
        </>
    )

    
}


const CardMiniSize = styled.div`
    heigth : 30%
`
    

export default TaskCard
