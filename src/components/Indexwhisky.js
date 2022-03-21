import React from 'react'
// import logo from '../logo.svg'
// import logo from './Images/logo.jpg'
export default function Indexwhisky() {
    return (
        <>
        {/* <title>My WHISKY Company</title>
            <link rel="stylesheet" href='{% static "index.css"%}' type="text/css" />
            <link href="https://fonts.googleapis.com/css?family=Baloo+Bhai|Bree+Serif&display=swap" rel="stylesheet" /> */}


        <div>


            <nav id="navbar">
                <div id="logo">
                    <img src={require("./Images/logo.jpg")} alt="Logo" />

                </div>
                <ul>
                    <li className="item"><a href="">Home</a></li>
                    <li className="item"><a href="#form">Form</a></li>
                    <li className="item"><a href="#wines-container">Best WHISKY</a></li>
                    <li className="item"><a href="#client-section">Our Clients</a></li>

                </ul>
            </nav>

            <section id="home">
                <h1 className="h-primary" id ="heading1" >LIFE, MARRIAGE AND BUSSINESS ARE SO RISKY, SO TAKE WHISKY</h1>
                <h5 id="heading2">A portal to check the quality of WHISKY. </h5>
            </section>
        </div>
        </>
    )
}
