
import "./App.css";
import "./indexwhisky.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
// import Indexwhisky from "./components/Indexwhisky";
// import Footer from "./components/Footer";
import TextAnalysis from "./components/TextAnalysis";
import {Routes, Route } from 'react-router-dom';
// import {Link, HashRouter } from 'react-router-dom';
function App() {
  return (
      <>

          <Routes>
            <Route exact path="/" element = {<Home />} />
            <Route exact path="/resume" element = {<Resume/>}/>/
            <Route exact path="/portfolio" element = {<Portfolio />} />
            {/* <Route exact path="/signin" element = {<SignIn />} />
            <Route exact path='/signup' element = {<SignUp />} />
            <Route exact path='/signout' element = {<SignOut/>} /> */}
            <Route exact path="/textanalysis" element = {<TextAnalysis/>} />
            {/* <Route path='*' element = {<PNF/> }/> */}
          </Routes>

      <a target="_blank" href="https://alokknight.herokuapp.com/">visit alokknight's text analysis.</a>
    </>
  );
}


export default App;
