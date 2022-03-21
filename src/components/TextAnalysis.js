import React from 'react';
// import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import About from './About';
import TextForm from './TextForm';
// import axios from 'axios';

class TextAnalysis extends React.Component {
    render (){
        return(
            <div>
                <Navbar title="TextAnalysis" aboutText="about-TextAnalysis" />

                <div className="container">
                <TextForm heading="Enter your text for Text Analysis." />
                </div>
                <About/>
                <Footer/>
            </div>
        )
    }
}

export default TextAnalysis;