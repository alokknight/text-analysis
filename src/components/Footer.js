import React from 'react'

export default function Footer() {
    return (
        <>
<div>
            {/* <div className="center">
                <a href="https://www.coderpapa.org">coderpapa</a>
                No Copyright &copy;  My Company. Only htmlFor Educational Purposes!
            </div> */}


    <footer id="footer" >
        <div className="footer-top">
        <div className="container">
            <div className="row">

            <div className="col-lg-3 col-md-6 footer-info">
                <img src={require("./Images/eandj.jpg")} alt="Our Client" />
                <p>Website to show details of all events.</p>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                <li><i className="fa fa-angle-right"></i> <a href="#">Home</a></li>
                <li><i className="fa fa-angle-right"></i> <a href="#">About us</a></li>
                <li><i className="fa fa-angle-right"></i> <a href="#">Services</a></li>
                <li><i className="fa fa-angle-right"></i> <a href="#">Terms of service</a></li>
                <li><i className="fa fa-angle-right"></i> <a href="#">Privacy policy</a></li>
                </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                <li><i className="fa fa-angle-right"></i> <a href="#">Home</a></li>
                <li><i className="fa fa-angle-right"></i> <a href="#">About us</a></li>
                <li><i className="fa fa-angle-right"></i> <a href="#">Services</a></li>
                <li><i className="fa fa-angle-right"></i> <a href="#">Terms of service</a></li>
                <li><i className="fa fa-angle-right"></i> <a href="#">Privacy policy</a></li>
                </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-contact">
                <h4>Contact Us</h4>
                <p>
                MMMUT <br/>
                Gorakhpur<br/>
                India<br/>
                <strong>Phone:</strong> +91 789 786 7722<br/>
                <strong>Email:</strong> alokpatel885@gmail.com<br/>
                </p>

                <div className="social-links">
                <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
                <a href="#" className="google-plus"><i className="fa fa-google-plus"></i></a>
                <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
                </div>

            </div>

            </div>
        </div>
        </div>

        <div className="container">
            <div className="copyright">
                &copy; Copyright <strong>CODERPAPA</strong>. All Rights Reserved
            </div>
            <div className="credits">
                {/* <!--
                All the links in the footer should remain intact.
                You can delete the links only if you purchased the pro version.
                Licensing information: https://bootstrapmade.com/license/
                Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=TheEvent --> */}
                Made with 💖
            </div>
        </div>
        <a href="#" className="back-to-top"><i className="fa fa-angle-up"></i></a>
</footer>


</div>
</>
    )
}
