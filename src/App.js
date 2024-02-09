
import "./App.css";
import "./indexwhisky.css";
import Whisky           from "./components/Whisky"          ;
import Navbar           from "./components/Navbar"          ;
import FAQ              from "./components/FAQ"             ;
import PNF              from "./components/404"             ;
import Help             from "./components/Help"            ;
import About            from "./components/About"           ;
import Apartment        from "./components/Apartment"       ;
import Gallary          from "./components/Gallary"         ;
import Footer           from "./components/Footer"          ;
import Carprice         from "./components/Carprice"        ;
import TextAnalysis     from "./components/TextAnalysis"    ;
import SemanticAnalysis from "./components/SemanticAnalysis";
import Skill            from "./components/Skill"           ;
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import SignUp from './components/SignUp';
import {Routes,Router, Route } from 'react-router-dom';
// import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
// import {Link, HashRouter } from 'react-router-dom';
function App() {
  return (
      <div>
        <Navbar/>

          <Routes>
            <Route exact path="/semanticanalysis" element = {<SemanticAnalysis/>}   > </Route>
            <Route exact path="/textanalysis"     element = {<TextAnalysis/>}       > </Route>
            <Route exact path="/help"             element = {<Help/>}               > </Route>
            <Route exact path="/whisky"           element = {<Whisky/>}             > </Route>
            <Route exact path="/About"            element = {<About/>}              > </Route>
            <Route exact path="/carprice"         element = {<Carprice/>}           > </Route>
            <Route exact path="/apartment"        element = {<Apartment/>}          > </Route>
            <Route exact path="/gallary"          element = {<Gallary/>}            > </Route>
            <Route exact path="/FAQ"              element = {<FAQ/>  }              > </Route>
            <Route exact path="*"                 element = {<PNF/>}                > </Route>
            <Route exact path="/skill"            element = {<Skill />}             > </Route>
            <Route exact path="/gallary"          element = {<Gallary />}           > </Route>
            <Route exact path="/signin"           element = {<SignIn />}            > </Route>
            <Route exact path='/signup'           element = {<SignUp />}            > </Route>
            <Route exact path='/signout'          element = {<SignOut/>}            > </Route>
          </Routes>
        <Footer/>
    </div>
  );
}


export default App;
