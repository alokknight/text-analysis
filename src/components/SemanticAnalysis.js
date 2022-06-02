import React from 'react';
// import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Semanticform from './Semanticform';
// import axios from 'axios';

class SemanticAnalysis extends React.Component {
    render (){
        return(
            <div>
                <Navbar title="SemanticAnalysis" aboutText="about-SemanticAnalysis" />
                <div className="container">
                <Semanticform heading="Enter your text for Semantic Analysis." />
                </div>
                <Footer/>
            </div>
        )
    }
}

export default SemanticAnalysis;