import React, { Component } from "react";
import {Link} from 'react-router-dom';
import Recommandation from "./Recommendation"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import recom from "../recommendations.json";
import styled from "styled-components";

export default class Recommandations extends Component {
    render() {
        const Rec= recom.filter(recom => recom.category == "Events").slice(0, 3);
        return ( 
            <div>
                <section class="inner-page-banner" id="home">
                </section>
                <div class="breadcrumb-agile">
                <ol class="breadcrumb mb-0">
                    <li class="breadcrumb-item">
                    <Link to='/'>Home</Link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Recommendations</li>
                </ol>
            </div>
                
                <div className="mt-5">
                <div className="mb-5">
                <div className="container">
                <div className="rec-container">
                <div className="row">
                <h2>Events :</h2>
                <Link className="View" to={"/recommendations/events"}> View More </Link>
                </div>
                    <div className="container">
                    <div className="row">
                        {Rec.map((recom, index) => (
                                <Recommandation recom={recom} key={index}></Recommandation>                  
                            ))}
                    </div>
                </div>
                </div>
                <div className="rec-container">
                <div className="row">
                <h2>Courses :</h2>
                <Link className="View" to={"/recommendations/courses"}> View More </Link>
                </div>
                    <div className="container">
                    <div className="row">
                        {recom.filter(recom => recom.category == "Courses").map((recom, index) => (
                                <Recommandation recom={recom} key={index}></Recommandation>                  
                            ))}
                    </div>
                </div>
                </div>
                <div className="rec-container">
                <div className="row">
                <h2>News :</h2>
                <Link className="View" to={"/recommendations/news"}> View More </Link>
                </div>
                    <div className="container ">
                    <div className="row">
                        {recom.filter(recom => recom.category == "News").map((recom, index) => (
                                <Recommandation recom={recom} key={index}></Recommandation>                  
                            ))}
                    </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                

    )
    }
}


     
