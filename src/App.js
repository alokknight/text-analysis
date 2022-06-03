
import "./App.css";
import "./indexwhisky.css";
import Whisky from "./components/Whisky";
import Navbar from "./components/Navbar";
import FAQ from "./components/FAQ";
import PNF from './components/404';
import Help from './components/Help';
import About from "./components/About";
import CV from "./components/CV";
import Resume from "./components/Resume";
import Apartment from './components/Apartment';
import Gallary from './components/Gallary';
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

          {/* <Routes>
            <Route exact path="/textanalysis" element = {<TextAnalysis/>} />
            <Route exact path="/whisky"       element = {<Whisky/>} />
            <Route exact path="/carprice"     element = {<Carprice />} />
            <Route exact path="/semanticanalysis" element = {<SemanticAnalysis/>} />
            <Route exact path="/resume"       element = {<Resume/>}/>/
            <Route exact path="/portfolio"    element = {<Portfolio />} />
            <Route exact path="/apartment"    element = {<Apartment />} />
            <Route exact path="/skill"        element = {<Skill />} />
            <Route exact path="/gallary"      element = {<Gallary />}/>
          </Routes> */}

            {/* <Route exact path="/signin" element = {<SignIn />} />
            <Route exact path='/signup' element = {<SignUp />} />
            <Route exact path='/signout' element = {<SignOut/>} /> */}
            {/* <Route path='*' element = {<PNF/> }/> */}

          <Switch>
            <Route path="/semanticanalysis"exact><SemanticAnalysis/></Route>
            <Route path="/textanalysis" exact><TextAnalysis/></Route>

            <Route path="/help"       exact><Help/>          </Route>
            <Route path="/whisky"       exact><Whisky/>      </Route>
            <Route path="/About"       exact><About/>        </Route>
            <Route path="/carprice"     exact><Carprice />   </Route>
            <Route path="/resume"       exact><Resume/>      </Route>
            <Route path="/cv"           exact><CV />         </Route>
            <Route path="/apartment"    exact><Apartment />  </Route>
            <Route path="/skill"        exact><Skill />      </Route>
            <Route path="/gallary"      exact><Gallary />    </Route>
            <Route path="*"             exact><PNF/>         </Route>
        </Switch>

        <Footer/>
      <a className="text-center" target="_blank" href="https://alokknight.herokuapp.com/">visit alokknight's text analysis.</a>
    </div>
  );
}


export default App;
