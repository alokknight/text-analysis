import React from 'react'

export default function Inputform() {
    return (
    <div>
        
        <section id="form">
            <h2 className="h-primary center"> Fill the details</h2>
            <div id="form-box">
                <form action="/" method="post">
                    {/* {% csrf_token %} */}
                    <div className="form-group">
                        <label htmlFor="alchohol_content">Alchohol Content: </label><br />
                        <input type="Number" name="alchohol_content" id="alchohol_content" placeholder="Enter a Number" step="0.01" min="0" max="1000" required="true" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="malic_acid">Malic Acid: </label><br />
                        <input type="Number" name="malic_acid" id="malic_acid" placeholder="Enter a Number" step="0.01" min="0" max="1000" required="true" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Ash">Amount of Ash: </label><br />
                        <input type="number" name="Ash" id="Ash" placeholder="Enter a Number" step="0.01" min="0" max="1000" required="true" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="alc_ash">Alchoholic Ash: </label><br />
                        <input type="Number" name="alc_ash" id="alc_ash" placeholder="Enter a Number" step="0.01" min="0" max="1000" required="true" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Magnesium">Amount of Magnesium: </label><br />
                        <input type="Number" name="Magnesium" id="Magnesium" placeholder="Enter a Number" step="0.01" min="0" max="1000" required="true" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Phenols">Amount of Phenols: </label><br />
                        <input type="Number" name="Phenols" id="Phenols" placeholder="Enter a Number" step="0.01" min="0" max="1000" required="true" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Flavanoid">Flavanoid Content: </label><br />
                        <input type="Number" name="Flavanoid" id="Flavanoid" placeholder="Enter a Number" step="0.01" min="0" max="1000" required="true" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="NFPhelons">Amount of Non-Flavanoid Phenols: </label><br />
                        <input type="Number" name="NFPhelons" id="NFPhelons" placeholder="Enter a Number" step="0.01" min="0" max="10000" required="true" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Cyacnins">Amount of Cyanins: </label><br />
                        <input type="Number" name="Cyacnins" id="Cyacnins" placeholder="Enter a Number" step="0.01" min="0" max="1000" required="true" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Intensity">Color Intensity: </label><br />
                        <input type="Number" name="Intensity" id="Intensity" placeholder="Enter a Number" step="0.01" min="0" max="1000" required="true" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Hue">Hue: </label><br />
                        <input type="Number" name="Hue" id="Hue" placeholder="Enter a Number" step="0.01" min="0" max="1000" required="true" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="OD280">Amount of OD280: </label><br />
                        <input type="Number" name="OD280" id="OD280" placeholder="Enter a Number" step="0.01" min="0" max="1000" required="true" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Proline">Proline Content: </label><br />
                        <input type="Number" name="Proline" id="Proline" placeholder="Enter a Number" step="0.01" min="0" max="1000" required="true" />
                    </div>

                    <input className="submit-button" type="submit" />
                </form>
            </div>
        </section>
    </div>
    )
}
