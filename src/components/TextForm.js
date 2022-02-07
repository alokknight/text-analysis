import React, { useState } from 'react'
// const [count, setCount] = useState('Enter text here');

export default function TextForm(props) {

    const handleOnClickUpper = () => {
        // console.log("Uppercase was clicked==>>\n" + text );
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnClickLower = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnClickClear = () => {
        let newText ='';
        setText(newText);
    }
    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);//////////--------------------
    }
    const handleCopy =() =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraspaces =() =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const [text, setText] = useState('');
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label">TEXT FORM</label>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleOnClickUpper} >Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleOnClickLower} >Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleOnClickClear} >Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraspaces} >Remove Extra Spaces</button>
            <div className="container my-3">
                <h2> your text summary is here</h2>
                <p>{text.split(" ").length - 1} words and {text.length} characters</p>
                <p>{0.008 * (text.split(" ").length - 1)} Min Read</p>
                {/* <p>{text.POSITIVE_SCORE}POSITIVE SCORE</p>
                <p>{text.NEGATIVE_SCORE}NEGATIVE SCORE</p>
                <p>{text.POLARITY_SCORE}POLARITY SCORE</p>
                <p>{text.SUBJECTIVITY_SCORE}SUBJECTIVITY SCORE</p>
                <p>{text.AVG_SENTENCE_LENGTH}AVERAGE SENTENCE LENGTH</p>
                <p>{text.PERCENTAGE_OF_COMPLEX_WORDS}PERCENTAGE OF COMPLEX WORDS</p>
                <p>{text.FOG_INDEX}FOG INDEX</p>
                <p>{text.AVG_NUMBER_OF_WORDS_PER_SENTENCE}AVERAGE NUMBER OF WORDS PER SENTENCE</p>
                <p>{text.COMPLEX_WORD_COUNT}COMPLEX WORD COUNT</p>
                <p>{text.WORD_COUNT}WORD COUNT</p>
                <p>{text.SYLLABLE_PER_WORD}SYLLABLE PER WORD</p>
                <p>{text.PERSONAL_PRONOUNS}PERSONAL PRONOUNS</p>
                <p>{text.AVG_WORD_LENGTH}AVERAGE WORD LENGTH</p> */}

                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}
