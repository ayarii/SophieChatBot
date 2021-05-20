import React from "react";
import { Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Recommendation.css';
import { useSelector , useDispatch } from 'react-redux';
import {DeleteRecom} from './redux/recommendations/recomActions';
import { FaTimes } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Recommendation  = ({ recommendation}) => {
    const dispatch = useDispatch()  
    return ( 
        <div className="card-container">
        <div className="mx-5">
        <Card style={{ width: '18rem' }}>
        <div className="image-container">
        <FontAwesomeIcon icon="book" />
        <h3 className="clo"><FaTimes style={{  cursor: 'pointer' }} onClick={() => dispatch(DeleteRecom(recommendation._id))} width="150" height="150"/></h3>
        <Card.Img className="card-img-top" variant="top" src={recommendation.imgUrl} name="Recommendation-Image" alt="Recommendation" />
        </div>
        <Card.Body className="card-content">
            <Card.Title className="card-title">{recommendation.title}</Card.Title>
            {/*             <Card.Text>
            {recommendation.description.substr(0,100)}{recommendation.description.length>100 && " ..." }
            </Card.Text> */}
            <Card.Text>
            {recommendation.university}
            </Card.Text>
            <Card.Text>
            {recommendation.source}
            </Card.Text>
            <Card.Text>
            {recommendation.level}
            </Card.Text>
            <Card.Text>
            {recommendation.duree}
            </Card.Text>
            <Card.Text>
            {recommendation.description}
            </Card.Text>
            <Card.Text>
            {recommendation.date}
            </Card.Text>
            <Card.Text>
            {recommendation.mode}
            </Card.Text>
            <span>
                <a href= {recommendation.link}  > View More </a>
            </span>
        </Card.Body>
        </Card>
        </div>
        </div>
        );
    }

export default Recommendation;