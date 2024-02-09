import React from 'react';
// import PropTypes from 'prop-types';
import {NavLink ,Link } from "react-router-dom";

export default class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
        show: true,
        scrollPos: 0,
        loggedIn: localStorage.getItem('userTokenTime')
        };
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    handleScroll = () => {
        // console.log(document.body.getBoundingClientRect());
        this.setState({
        scrollPos: document.body.getBoundingClientRect().top,
        show: document.body.getBoundingClientRect().top > this.state.scrollPos
        });
    };
render() {
    console.log(this.state);
    return <nav className={this.state.show ? "active" : "hidden"}>

        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid nav">
                    <Link herf="https://www.alokknight.com" class="#">
                    <img src={require("./Images/alokknight_logo_white.png")} style={{width:"60px",height:"50px"}} /></Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item">
                                <a className="nav-link" to="/">{props.aboutText}</a>
                            </li> */}

                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/textanalysis">TextAnalysis</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/carprice">CarPricePrediction</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/whisky">WhiskyQualityCheckup</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/semanticanalysis">SemanticAnalysis</NavLink>
                            </li>
                            <li className="nav-item">
                                <a       className="nav-link active" aria-current="page" href="https://www.alokknight.com/portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/apartment">Apartment</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/about">About</NavLink>
                            </li>

                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" to="/">Action</a></li>
                                    <li><a className="dropdown-item" to="/">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" to="/">Something else here</a></li>
                                </ul>
                            </li> */}
                            {/* <li className="nav-item">
                                <a className="nav-link disabled" to="/" tabIndex="-1" aria-disabled="true">Disabled</a>
                            </li> */}


                            {this.state.loggedIn ?
                                    <React.Fragment>
                                        <NavLink className="nav-item nav-link" to="/signout">Sign Out</NavLink>
                                    </React.Fragment>
                                    :
                                    <React.Fragment>
                                        <NavLink className="nav-item nav-link" to="/signup">Sign Up</NavLink>
                                        <NavLink className="nav-item nav-link" to="/signin">Sign In</NavLink>
                                    </React.Fragment>}





                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-primary" type="submit">Search</button>
                            {/* <button className="btn btn-primary" onClick={toggleStyle}> {btntext} </button> */}

                        </form>
                    </div>
                </div>
            </nav>
        </div>
        </nav>;
    }
}

// export default function Navbar(props) {
//     // const [loginBtn, setLoginbtn] = useState({
//     //     link:"/signIn"
//     // })
//     // const [btntext, loginBtnTxt] = useState("signIn")

//     // const toggleStyle = () => {
//     //     if (loginBtn.link === "/signIn") {
//     //         setLoginbtn({
//     //             link:"/signOut"
//     //         })
//     //         loginBtnTxt("login")
//     //     }
//     //     else {
//     //         setLoginbtn({
//     //             link:"/signIn"
//     //         })
//     //         loginBtnTxt("signOut")
//     //     }
//     // }


//     return (
//         <div>

//             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//                 <div className="container-fluid">
//                     <a href="https://www.alokknight.com" class="#">
//                     <img src={require("./Images/Strathisla.gif")} width={52} height={40} /></a>

//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <a className="navbar-brand" to="/">HOME</a>
//                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                             {/* <li className="nav-item">
//                                 <a className="nav-link" to="/">{props.aboutText}</a>
//                             </li> */}
//                             <li className="nav-item">
//                                 <a className="nav-link active" aria-current="page" to="/">Whisky</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link active" aria-current="page" to="/textanalysis">TextAnalysis</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link active" aria-current="page" to="/resume">Resume</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link active" aria-current="page" to="/portfolio">Portfolio</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link active" aria-current="page" to="/apartment">Apartment</a>
//                             </li>

//                             {/* <li className="nav-item dropdown">
//                                 <a className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                     Dropdown
//                                 </a>
//                                 <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                                     <li><a className="dropdown-item" to="/">Action</a></li>
//                                     <li><a className="dropdown-item" to="/">Another action</a></li>
//                                     <li><hr className="dropdown-divider" /></li>
//                                     <li><a className="dropdown-item" to="/">Something else here</a></li>
//                                 </ul>
//                             </li> */}
//                             {/* <li className="nav-item">
//                                 <a className="nav-link disabled" to="/" tabIndex="-1" aria-disabled="true">Disabled</a>
//                             </li> */}
//                         </ul>
//                         <form className="d-flex">
//                             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                             <button className="btn btn-primary" type="submit">Search</button>
//                             {/* <button className="btn btn-primary" onClick={toggleStyle}> {btntext} </button> */}

//                         </form>
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     )
// }

// Navbar.proptype = {
//     title: PropTypes.string.isRequired,
//     aboutText: PropTypes.string
// }
// Navbar.defaultProps = {
//     title: 'Set title here',
//     aboutText: 'about text here'
// }
