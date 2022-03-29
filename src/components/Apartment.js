import React, {useEffect, useState } from 'react';
import Footer from './Footer.js';
import './Apartment.css';
import Navbar from './Navbar';
export default function Apartment(props) {
        // {/* // Script to open and close sidebar when on tablets and phones */ }

        const open=()=>{
            document.getElementById("mySidebar").style.display = "block";
            document.getElementById("myOverlay").style.display = "block";
        }

        const close=()=> {
            document.getElementById("mySidebar").style.display = "none";
            document.getElementById("myOverlay").style.display = "none";
        }
        const openNav=()=> {
            document.getElementById("mySidebar").style.width = "250px";
        }

        const closeNav=()=> {
            document.getElementById("mySidebar").style.width = "0";
        }


        // // Slideshow Apartment Images
        var slideIndex = 1;
        // showDivs(slideIndex);
        const getbyId=(element,setvalue)=>{
            // onclick={()=>document.getElementById('subscribe').style.display='block'}
            document.getElementById(element).style.display=setvalue;
        }
        const plusDivs=(n)=> {
            showDivs(slideIndex += n);
        }

        const currentDiv=(n)=> {
            showDivs(slideIndex = n);
        }

        const showDivs=(n)=> {
            var i;
            var x = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("demo");
            if (n > x.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = x.length }
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" opacity-off", "");
            }
            x[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " opacity-off";
        }
        useEffect(() => {
            showDivs(slideIndex);
        }, [])

    return (
        <div>
            <Navbar/>
            <body className="content border-left border-right">

                {/* <!-- Sidebar/menu --> */}
                <nav className="sidebar light-grey collapse top"  id="mySidebar">
                    <div className="container display-container padding-16">
                        <i onclick={close} className="fa fa-remove hide-large button transparent bdisplayTopright"></i>
                        <h3>Rental</h3>
                        <h3>from $99</h3>
                        <h6>per night</h6>
                        <hr />
                        <form action="/action_page.php" target="_blank">
                            <p><label><i className="fa fa-calendar-check-o"></i> Check In</label></p>
                            <input className="input border" type="text" placeholder="DD MM YYYY" name="CheckIn" required />
                            <p><label><i className="fa fa-calendar-o"></i> Check Out</label></p>
                            <input className="input border" type="text" placeholder="DD MM YYYY" name="CheckOut" required />
                            <p><label><i className="fa fa-male"></i> Adults</label></p>
                            <input className="input border" type="number" value="1" name="Adults" step="1" min="1" max="6" />
                            <p><label><i className="fa fa-child"></i> Kids</label></p>
                            <input className="input border"  type="number" value="1" name="Kids" step="1" min="0" max="6" />
                            <p><button className="button block green left-align" type="submit">
                                <i className="fa fa-search margin-right"></i> Search availability</button></p>
                        </form>
                    </div>
                    <div className="bar-block">
                        <a href="#apartment" className="bar-item button padding-16"><i className="fa fa-building"></i> Apartment</a>
                        <a
                        href="javascript:void(0)"
                        className="bar-item button padding-16"
                        // onclick={()=>document.getElementById('subscribe').style.display='block'}
                        // onclick={()=>getbyId('subscribe','block')}
                        >
                        <i className="fa fa-rss"></i>
                            Subscribe
                        </a>
                        <a href="#contact" className="bar-item button padding-16"><i className="fa fa-envelope"></i> Contact</a>
                    </div>
                </nav>

                {/* <!-- Top menu on small screens --> */}
                <header className="bar top hide-large black xlarge">
                    <span className="bar-item">Rental</span>
                    <a href="javascript:void(0)" className="right bar-item button" onclick={open}><i className="fa fa-bars"></i></a>
                </header>

                {/* <!-- Overlay effect when opening sidebar on small screens --> */}
                <div className="overlay hide-large" onclick={close}  title="close side menu" id="myOverlay"></div>

                {/* <!-- !PAGE CONTENT! --> */}
                <div className="main white" >

                    {/* <!-- Push down content on small screens --> */}
                    <div className="hide-large" ></div>

                    {/* <!-- Slideshow Header --> */}
                    <div className="container" id="apartment">
                        <h2 className="text-green">The Apartment</h2>
                        <div className="display-container mySlides">
                            <img src={require("./Images/Eradour_Distillery.jpg")} alt="" />
                            <div className="display-bottomleft container black">
                                <p>Living Room</p>
                            </div>
                        </div>
                        <div className="display-container mySlides">
                            <img src={require("./Images/Eradour_Distillery.jpg")} alt="" />
                            <div className="display-bottomleft container black">
                                <p>Dining Room</p>
                            </div>
                        </div>
                        <div className="display-container mySlides">
                            <img src={require("./Images/Eradour_Distillery.jpg")} alt="" />
                            <div className="display-bottomleft container black">
                                <p>Bedroom</p>
                            </div>
                        </div>
                        <div className="display-container mySlides">
                            <img src={require("./Images/Eradour_Distillery.jpg")} alt="" />
                            <div className="display-bottomleft container black">
                                <p>Living Room II </p>
                            </div>
                        </div>
                    </div>

                    <div className="row-padding section">
                        <div className="col s3">
                            <img className="demo opacity hover-opacity-off"
                            src={require("./Images/Eradour_Distillery.jpg")}
                            onclick={()=>currentDiv(1)}
                            title="Living room" />
                        </div>
                        <div className="col s3">
                            <img className="demo opacity hover-opacity-off"
                            src={require("./Images/Eradour_Distillery.jpg")}
                            onclick={()=>currentDiv('2')}
                            title="Dining room" />
                        </div>
                        <div className="col s3">
                            <img className="demo opacity hover-opacity-off"
                            src={require("./Images/Eradour_Distillery.jpg")}
                            onclick={()=>currentDiv(3)}
                            title="Bedroom" />
                        </div>
                        <div className="col s3">
                            <img className="demo opacity hover-opacity-off"
                            src={require("./Images/Eradour_Distillery.jpg")}
                            onclick={()=>currentDiv(4)}
                            title="Second Living Room/" />
                        </div>
                    </div>

                    <div className="container">
                        <h4><strong>The space</strong></h4>
                        <div className="row large">
                            <div className="col s6">
                                <p><i className="fa fa-fw fa-male"></i> Max people: 4</p>
                                <p><i className="fa fa-fw fa-bath"></i> Bathrooms: 2</p>
                                <p><i className="fa fa-fw fa-bed"></i> Bedrooms: 1</p>
                            </div>
                            <div className="col s6">
                                <p><i className="fa fa-fw fa-clock-o"></i> Check In: After 3PM</p>
                                <p><i className="fa fa-fw fa-clock-o"></i> Check Out: 12PM</p>
                            </div>
                        </div>
                        <hr />

                        <h4><strong>Amenities</strong></h4>
                        <div className="row large">
                            <div className="col s6">
                                <p><i className="fa fa-fw fa-shower"></i> Shower</p>
                                <p><i className="fa fa-fw fa-wifi"></i> WiFi</p>
                                <p><i className="fa fa-fw fa-tv"></i> TV</p>
                            </div>
                            <div className="col s6">
                                <p><i className="fa fa-fw fa-cutlery"></i> Kitchen</p>
                                <p><i className="fa fa-fw fa-thermometer"></i> Heating</p>
                                <p><i className="fa fa-fw fa-wheelchair"></i> Accessible</p>
                            </div>
                        </div>
                        <hr />

                        <h4><strong>Extra Info</strong></h4>
                        <p>Our apartment is really clean and we like to keep it that way. Enjoy the lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p>We accept:
                            <i className="fa fa-credit-card large" ></i>
                            <i className="fa fa-cc-mastercard large"></i>
                            <i className="fa fa-cc-amex large"></i>
                            <i className="fa fa-cc-cc-visa large"></i>
                            <i className="fa fa-cc-paypal large"></i>
                        </p>
                        <hr />

                        <h4><strong>Rules</strong></h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p>Subscribe to receive updates on available dates and special offers.</p>
                        <p><button className="button green third" onclick={()=>getbyId('subscribe','block')}>Subscribe</button></p>
                    </div>
                    <hr />

                    {/* <!-- Contact --> */}
                    <div className="container" id="contact">
                        <h2>Contact</h2>
                        <i className="fa fa-map-marker" ></i> Chicago, US<br />
                        <i className="fa fa-phone" ></i> Phone: +00 151515<br />
                        <i className="fa fa-envelope" > </i> Email: mail@mail.com<br />
                        <p>Questions? Go ahead, ask them:</p>
                        <form action="/action_page.php" target="_blank">
                            <p><input className="input border" type="text" placeholder="Name" required name="Name" /></p>
                            <p><input className="input border" type="text" placeholder="Email" required name="Email" /></p>
                            <p><input className="input border" type="text" placeholder="Message" required name="Message" /></p>
                            <button type="submit" className="button green third">Send a Message</button>
                        </form>
                    </div>
                    <hr/>

                    <Footer/>
                    {/* <!-- End page content --> */}
                </div>


                {/* <!-- Subscribe Modal --> */}
                <div id="subscribe" className="modal">
                    <div className="modal-content animate-zoom padding-large">
                        <div className="container white center">
                            <i onclick={()=>getbyId('subscribe','none')} className="fa fa-remove button xlarge right transparent"></i>
                            <h2 className="wide">SUBSCRIBE</h2>
                            <p>Join our mailing list to receive updates on available dates and special offers.</p>
                            <p><input className="input border" type="text" placeholder="Enter e-mail" /></p>
                            <button type="button" className="button padding-large green margin-bottom" onclick={()=>getbyId('subscribe','none')}>Subscribe</button>
                        </div>
                    </div>
                </div>

            </body>

        </div>
    )
}
