
import "./App.css";
import "./indexwhisky.css";
import Whisky from "./components/Whisky";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Apartment from './components/Apartment';
import Gallary from './components/Gallary';
// import Indexwhisky from "./components/Indexwhisky";
import Footer from "./components/Footer";
import Carprice from "./components/Carprice";
import TextAnalysis from "./components/TextAnalysis";
import SemanticAnalysis from "./components/SemanticAnalysis";
import Skill from './components/Skill';
// import {Routes,Router, Route } from 'react-router-dom';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
// import {Link, HashRouter } from 'react-router-dom';
function App() {
  return (
      <div>
        <Navbar/>

        <Router>
        <Switch>
          {/* <Routes> */}
            <Route exact path="/textanalysis" element = {<TextAnalysis/>} />
            <Route exact path="/whisky" element = {<Whisky/>} />
            <Route exact path="/carprice" element = {<Carprice />} />
            <Route exact path="/resume" element = {<Resume/>}/>/
            <Route exact path="/portfolio" element = {<Portfolio />} />
            <Route exact path="/apartment" element = {<Apartment />} />
            <Route exact path="/skill" element = {<Skill />} />
            <Route exact path="/gallary" element={<Gallary />}/>
            {/* <Route exact path="/signin" element = {<SignIn />} />
            <Route exact path='/signup' element = {<SignUp />} />
            <Route exact path='/signout' element = {<SignOut/>} /> */}
            <Route exact path="/semanticanalysis" element = {<SemanticAnalysis/>} />
            {/* <Route path='*' element = {<PNF/> }/> */}
          {/* </Routes> */}
        </Switch>
        </Router>

        <Footer/>
      <a target="_blank" href="https://alokknight.herokuapp.com/">visit alokknight's text analysis.</a>
    </div>
  );
}


export default App;
