import React, { Component } from "react";
import { Card, Button, Container} from 'react-bootstrap';
import recom from "../recommendations.json"
import { withRouter } from 'react-router-dom'; 
import {Link} from 'react-router-dom';
import './Recommendation.css'

class Recommondation extends Component {
      
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
            {this.props.recom.description.substr(0,100)}{this.props.recom.description.length>100 && " ..." }
            </Card.Text>
            <span>
                <Link to={"/recommendations/" + this.props.recom.id}> View More </Link>
            </span>
        </Card.Body>
        </Card>
        </div>
        </div>
        /*<div className="mx-3 ">     
        <div className='card-container'>
            
            <div className='image-container'>
                <img className="card-img-top" src={this.props.recom.img} alt='' />
            </div>
            <div className='card-content'>
                <div className="card-title">
                    <h3>{this.props.recom.title}</h3>
                </div>
                <div className="card-discription">
                    {this.props.recom.description}
                </div>
            </div>
            <Card.Link href="#">View More</Card.Link>
        </div>
        </div>*/
        );
    }
}

export default withRouter(Recommondation );