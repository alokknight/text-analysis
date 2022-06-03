import React from 'react';
import Help from './Help';
import TextForm from './TextForm';
// import axios from 'axios';

class TextAnalysis extends React.Component {
    render (){
        return(
            <div>
                <div className="container">
                <TextForm heading="Enter your text for Text Analysis." />
                </div>
                <Help/>
            </div>
        )
    }
}

export default TextAnalysis;