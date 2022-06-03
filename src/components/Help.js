import React, { Component } from 'react';
import './Help.css';
export default class Help extends Component {
    render() {
        return (
            <div className="topmargin">
                <section>
                    {/* <section id="team">
                    
                        <div className="container" data-aos="fade-up">
                            <div className="section-header">
                                <h2>Our Team</h2>
                                <p><i>Contact us if you encounter any technical problems.</i></p>
                            </div>
                        </div>

                        <div className="container text-center my-5">
                            <div className="row mt-40">
                                <div className="col-md-4 col-sm-12">
                                    <div className="box1 sample"> <img src={require('./Images/alok1.jpg')} alt="" />
                                        <h3 className="title">ALOK PATEL</h3>
                                        <ul className="icon">
                                            <li><a href="mailto:alokpatel885@gmail.com"><i className="fa fa-envelope rotate360"></i></a></li>
                                            <li><a href="https://www.alokknight.com"><i className="fa fa-facebook rotate360"></i></a></li>
                                            <li><a href="https://www.twitter.com/alokknight"><i className="fa fa-twitter rotate360"></i></a></li>
                                            <li><a href="https://www.linkedin.com/in/alokknight"><i className="fa fa-linkedin rotate360"></i></a></li>
                                            <li><a href="https://www.github.com/alokknight"><i className="fa fa-github rotate360"></i></a></li>
                                            <li><a href="https://coderpapa.herokuapp.com"><i className="fa fa-globe rotate360"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}

                    <section>
                        <div className="container py-5">
                            <div className="row h-100 align-items-center py-5">
                                <div className="col-lg-6">
                                    <h1 className="display-4">About us </h1>
                                    <p className="lead mb-0">Everything you want to know about the developers</p>
                                    <p className="lead mb-0">Always striving to be your first choice</p>
                                    <div className="box1 sample2 mt-5"> <img src={require('./Images/alok1.jpg')} alt="" />
                                        <h3 className="title">ALOK PATEL</h3>
                                        <ul className="icon">
                                            <li><a href="mailto:alokpatel885@gmail.com"><i className="fa fa-envelope rotate360"></i></a></li>
                                            <li><a href="https://www.alokknight.com"><i className="fa fa-facebook rotate360"></i></a></li>
                                            <li><a href="https://www.twitter.com/alokknight"><i className="fa fa-twitter rotate360"></i></a></li>
                                            <li><a href="https://www.linkedin.com/in/alokknight"><i className="fa fa-linkedin rotate360"></i></a></li>
                                            <li><a href="https://www.github.com/alokknight"><i className="fa fa-github rotate360"></i></a></li>
                                            <li><a href="https://coderpapa.herokuapp.com"><i className="fa fa-globe rotate360"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 d-lg-block my-3"><img src="https://bootstrapious.com/i/snippets/sn-about/illus.png" alt="" className="img-fluid" /></div>
                            </div>
                        </div>
                    </section>
                </section>
            </div>

        )
    }
}
