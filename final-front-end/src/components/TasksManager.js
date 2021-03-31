import React from 'react'
import { Link } from 'react-router-dom'
import Tasks from '../Tasks.json'
import TaskCard from '../components/TaskCard'
import { Container, Col, Card } from 'react-bootstrap'
import styled from 'styled-components'

const TasksManager = () => {
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
            {/* End Return browsing */}

            {/* Task cards space */}
            <Container className="d-flex align-items my-5" >
               <Col>
                    <Card.Header><PhasesSubTitle className="fa">ToDo</PhasesSubTitle></Card.Header>
                    {Tasks.filter((task) => task.status === 'ToDo').map((task) => (
                        <TaskCard task={task} key={task.id}></TaskCard>
                    ))}
               </Col>
               <Col>
                    <Card.Header><PhasesSubTitle className="fa">InProgress</PhasesSubTitle></Card.Header>
                    {Tasks.filter((task) => task.status === 'InProgress').map((task) => (
                        <TaskCard task={task} key={task.id}></TaskCard>
                    ))}
               </Col>
               <Col>
                    <Card.Header><PhasesSubTitle className="fa">Done</PhasesSubTitle></Card.Header>
                    {Tasks.filter((task) => task.status === 'Done').map((task) => (
                        <TaskCard task={task} key={task.id}></TaskCard>
                    ))}
               </Col>
            </Container>
        </div>
    )
}


const PhasesSubTitle = styled.div`
    text-align : center;
    font-size : 2em;
    color : #FFC300;
    text-shadow: 2px 1px #72726A;
`

export default TasksManager
