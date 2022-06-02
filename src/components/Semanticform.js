import React, { useState } from 'react'
// const [count, setCount] = useState('Enter text here');
import semanticscore from './demodata'
export default function TextForm(props) {


    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }
    const semanticAnalysis=() =>{

    }

    const [text, setText] = useState('');
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label">TEXT FORM</label>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={semanticAnalysis} >Semantic Analysis</button>

            <div className="container my-3">
                <h2> Your semantic Scores are here</h2>
                <p>{text.split(" ").length - 1} words and {text.length} characters</p>
                <p>{0.008 * (text.split(" ").length - 1)} Min Read</p>


                <div className="container">
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 g-1">
                {/* {semanticscore.map((s) => {
                return ( */}
                    <div className="col">
                        <div className="card shadow-sm">
                            <h2>Preview</h2>
                            <h3 className="m-2">{text}</h3>

{/*
                            {% if s.POSITIVE_SCORE < 0.5  %}
                                <h4 className="text-center">Your text so sad. you should be happy!!!!</h4>
                                <img src="https://source.unsplash.com/600x500/?happy" height="400px"  className="d-block w-100" alt="...">
                            {% endif %}


                            {% if s.POSITIVE_SCORE > 0.5  %}
                                <h4 className="text-center" >Your text score is happy. Stay happy bro.
                                    Come on. Let's Party!!!</h4>
                                <img src="https://source.unsplash.com/600x500/?party" height="400px"  className="d-block w-100" alt="...">
                            {% endif %}
*/}


                            <div className="card-body">
                                <p className="card-text">POSITIVE SCORE              =     xyz{semanticscore.POSITIVE_SCORE                  }</p>
                                <p className="card-text">NEGATIVE SCORE              =     xyz{semanticscore.NEGATIVE_SCORE                  }</p>
                                <p className="card-text">POLARITY SCORE              =     xyz{semanticscore.POLARITY_SCORE                  }</p>
                                <p className="card-text">SUBJECTIVITY SCORE          =     xyz{semanticscore.SUBJECTIVITY_SCORE              }</p>
                                <p className="card-text">AVG SENTENCE LENGTH         =     xyz{semanticscore.AVG_SENTENCE_LENGTH             }</p>
                                <p className="card-text">FOG INDEX                   =     xyz{semanticscore.FOG_INDEX                       }</p>
                                <p className="card-text">COMPLEX WORD COUNT          =     xyz{semanticscore.COMPLEX_WORD_COUNT              }</p>
                                <p className="card-text">WORD COUNT                  =     xyz{semanticscore.WORD_COUNT                      }</p>
                                <p className="card-text">SYLLABLE PER WORD           =     xyz{semanticscore.SYLLABLE_PER_WORD               }</p>
                                <p className="card-text">PERSONAL PRONOUNS           =     xyz{semanticscore.PERSONAL_PRONOUNS               }</p>
                                <p className="card-text">AVG WORD LENGTH             =     xyz{semanticscore.AVG_WORD_LENGTH                 }</p>
                                <p className="card-text">PERCENTAGE OF COMPLEX_WORDS =     xyz{semanticscore.PERCENTAGE_OF_COMPLEX_WORDS     }</p>
                                <p className="card-text">AVG No.OF WORDS PER SENTENCE=     xyz{semanticscore.AVG_NUMBER_OF_WORDS_PER_SENTENCE}</p>

                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* );
                    })} */}
                </div>
                </div>


            </div>
        </div>
    )
}
