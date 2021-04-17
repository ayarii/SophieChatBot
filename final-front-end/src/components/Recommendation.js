import React from "react";
import { Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Recommendation.css';
import { useSelector , useDispatch } from 'react-redux';
import {DeleteRecom} from './redux/recommendations/recomActions';
import { FaTimes } from 'react-icons/fa';

const Recommendation  = ({ recommendation}) => {
    const dispatch = useDispatch()  
    return ( 
        <div className="card-container">
        <div className="mx-5">
        <Card style={{ width: '18rem' }}>
        <div className="image-container">
        <h3><FaTimes style={{  cursor: 'pointer' }} onClick={() => dispatch(DeleteRecom(recommendation._id))} /></h3>
        <Card.Img className="card-img-top" variant="top" src={recommendation.img} />
        </div>
        <Card.Body className="card-content">
            <Card.Title className="card-title">{recommendation.title}</Card.Title>
            <Card.Text>
            {recommendation.description.substr(0,100)}{recommendation.description.length>100 && " ..." }
            </Card.Text>
            <span>
                <a href={recommendation.link} > View More </a>
            </span>
        </Card.Body>
        </Card>
        </div>
        </div>
        );
    }

export default Recommendation;