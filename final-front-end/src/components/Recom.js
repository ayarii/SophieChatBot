import React, { Component } from "react";
import { Card, Button, Container} from 'react-bootstrap';
import recom from "../recommendations.json"
import { withRouter } from 'react-router-dom'; 
import {Link} from 'react-router-dom';
import './Recommendation.css'

class Recom extends Component {
      
    render() {
    return ( 
        <div className="card-container">
        <div className="mx-5">
        <Card style={{ width: '18rem' }}>
        <div className="image-container">
        <Card.Img className="card-img-top" variant="top" src={this.props.recom.img} />
        </div>
        <Card.Body className="card-content">
            <Card.Title className="card-title">{this.props.recom.title}</Card.Title>
            <Card.Text>
            {this.props.recom.description}
            </Card.Text>
        </Card.Body>
        </Card>
        </div>
        </div>
        );
    }
}

export default Recom;