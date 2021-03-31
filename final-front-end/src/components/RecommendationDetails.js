import React, { Component } from "react";
import styled from "styled-components";
import recom from "../recommendations.json";
import Rec from "./Recom";
import {Link} from 'react-router-dom';
import './Recommendation.css'

export default class RecommendationDetails extends Component {
render() {
    const id = this.props.match.params.id;
    const toRender = recom.filter((recom) => recom.id === id)[0];
    return (

        <div className="detail">
        <div className="container">
        <section class="inner-page-banner" id="home">
        </section>
        <div class="breadcrumb-agile">
                    <ol class="breadcrumb mb-0">
                        <li class="breadcrumb-item">
                        <Link to='/recommendations'>Recommendations</Link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Recommendation</li>
                    </ol>
        </div>  
            {toRender ? (
            <Rec recom={toRender}></Rec>
            ) : (
            <p>Recommendation not found</p>
            )}
        </div>
        </div>
    );
}
}
const ProductsWrapper = styled.div`
text-align: center;
display: flex;
`;