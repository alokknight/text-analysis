import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
    // const [loginBtn, setLoginbtn] = useState({
    //     link:"/signIn"
    // })
    // const [btntext, loginBtnTxt] = useState("signIn")

    // const toggleStyle = () => {
    //     if (loginBtn.link === "/signIn") {
    //         setLoginbtn({
    //             link:"/signOut"
    //         })
    //         loginBtnTxt("login")
    //     }
    //     else {
    //         setLoginbtn({
    //             link:"/signIn"
    //         })
    //         loginBtnTxt("signOut")
    //     }
    // }
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a href="https://www.alokknight.com" class="#">
                    <img src={require("./Images/Strathisla.gif")} width={52} height={40} /></a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <a className="navbar-brand" href="/">HOME</a>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item">
                                <a className="nav-link" href="/">{props.aboutText}</a>
                            </li> */}
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Whisky</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/textanalysis">TextAnalysis</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/resume">Resume</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/apartment">Apartment</a>
                            </li>

                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li> */}
                            {/* <li className="nav-item">
                                <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Disabled</a>
                            </li> */}
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
    )
}

Navbar.proptype = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}
Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'about text here'
}