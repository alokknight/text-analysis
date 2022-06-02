import React from 'react';
// import { Link } from 'react-router-dom';
import Semanticform from './Semanticform';
// import axios from 'axios';

class SemanticAnalysis extends React.Component {
    render (){
        return(
            <div>
                <div className="container">
                <Semanticform heading="Enter your text for Semantic Analysis." />
                </div>
            </div>
        )
    }
}

export default SemanticAnalysis;