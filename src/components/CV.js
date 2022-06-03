import React from 'react';
import '../portfolio.css';
import Footer from './Footer.js';
import Navbar from './Navbar.js';
export default function Portfolio() {
    return (
    <div>
        <body className="#">
        {/* <!-- Page Container --> */}
        <div className="content margin-top" style={{"max-width":"1400px"}}>

        {/* <!-- The Grid --> */}
        <div className="row-padding">

            {/* <!-- Left Column --> */}
            <div className="third">

            <div className="white text-grey card-4">
                <div className="display-container" id ="portImage">
                <img src={require("../Images/alok.jpg")} style={{width:"100%"}} alt="Avatar"/>
                <div className="display-bottomleft container text-black">
                    <h2>ALOK PATEL</h2>
                </div>
                </div>
                <div className="container">
                <hr/>
                <p><i className="fa fa-briefcase fa-fw margin-right large text-teal"></i>Web Developer</p>
                <p><i className="fa fa-home fa-fw margin-right large text-teal"></i>LKO, UP</p>
                <p><i className="fa fa-envelope fa-fw margin-right large text-teal"></i>alokpatel885@gmail.com</p>
                <p><i className="fa fa-phone fa-fw margin-right large text-teal"></i>+91 7897867722</p>
                <hr/>
                <p className="large"><b><i className="fa fa-education fa-fw margin-right text-teal"></i>Education</b></p>
                <p><i className="fa fa-school fa-fw margin-right large text-teal"></i>JKGPSVMIC, <strong>10ᵗʰ (87.5%) || 12ᵗʰ (90.4%)</strong></p>
                <p><i className="fa fa-university fa-fw margin-right large text-teal"></i>MMMUT, GKP || <strong>B.tech(71.6%)</strong></p>
                <hr/>

                <p className="large"><b><i className="fa fa-asterisk fa-fw margin-right text-teal"></i>Skills</b></p>
                <p>Python / C++</p>
                <div className="light-grey round-xlarge small">
                    <div className="container center round-xlarge teal" style={{width:"95%"}}>90%</div>
                </div>
                <p>React</p>
                <div className="light-grey round-xlarge small">
                    <div className="container center round-xlarge teal" style={{width:"85%"}}><div className="center text-white">80%</div>
                    </div>
                </div>
                <p>Django/DRF</p>
                <div className="light-grey round-xlarge small">
                    <div className="container center round-xlarge teal" style={{width:"75%"}}>75%</div>
                </div>
                <p>MongoDB/MySQL</p>
                <div className="light-grey round-xlarge small">
                    <div className="container center round-xlarge teal" style={{width:"55%"}}>50%</div>
                </div>
                <p>Git/Github/Heroku</p>
                <div className="light-grey round-xlarge small">
                    <div className="container center round-xlarge teal" style={{width:"60%"}}>60%</div>
                </div>
                <br/>

                <p className="large text-theme"><b><i className="fa fa-globe fa-fw margin-right text-teal"></i>Languages</b></p>
                <p>English</p>
                <div className="light-grey round-xlarge">
                    <div className="round-xlarge teal" style={{height:"24px" ,width:"70%"}} ></div>
                </div>
                <p>Hindi</p>
                <div className="light-grey round-xlarge">
                    <div className="round-xlarge teal" style={{height:"24px",width:"100%"}}></div>
                </div>
                <br/>
                </div>
            </div><br/>

            {/* <!-- End Left Column --> */}
            </div>

            {/* <!-- Right Column --> */}
            <div className="twothird">

            <div className="container card white margin-bottom">
                <h2 className="text-grey padding-16"><i className="fa fa-suitcase fa-fw margin-right xxlarge text-teal"></i>Work Experience</h2>
                <div className="container">
                <h5 className="opacity"><b>Front End Developer / w3schools.com</b></h5>
                <h6 className="text-teal"><i className="fa fa-calendar fa-fw margin-right"></i>Jan 2015 - <span className="tag teal round">Current</span></h6>
                <p>Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
                <hr/>
                </div>
                <div className="container">
                <h5 className="opacity"><b>Web Developer / something.com</b></h5>
                <h6 className="text-teal"><i className="fa fa-calendar fa-fw margin-right"></i>Mar 2012 - Dec 2014</h6>
                <p>Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
                <hr/>
                </div>
                <div className="container">
                <h5 className="opacity"><b>Graphic Designer / designsomething.com</b></h5>
                <h6 className="text-teal"><i className="fa fa-calendar fa-fw margin-right"></i>Jun 2010 - Mar 2012</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><br/>
                </div>
            </div>

            <div className="container card white">
                <h2 className="text-grey padding-16"><i className="fa fa-# fa-fw margin-right xxlarge text-teal"></i>Projects</h2>
                <div className="container">
                <h5 className="opacity"><b>www.coderpapa.org</b></h5>
                <h6 className="text-teal"><i className="fa fa-calendar fa-fw margin-right"></i>Forever</h6>
                <p>Web Development! All I need to know in one place</p>
                <hr/>
                </div>
                <div className="container">
                <h5 className="opacity"><b>alokknight.com</b></h5>
                <h6 className="text-teal"><i className="fa fa-calendar fa-fw margin-right"></i>2013 - 2015</h6>
                <p>Master Degree</p>
                <hr/>
                </div>
                <div className="container">
                <h5 className="opacity"><b>School of Coding</b></h5>
                <h6 className="text-teal"><i className="fa fa-calendar fa-fw margin-right"></i>2010 - 2013</h6>
                <p>Bachelor Degree</p><br/>
                </div>
            </div>

            </div>

        </div>

        </div>
        </body>
    </div>
    )
}
