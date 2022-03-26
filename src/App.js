
import "./App.css";
import "./indexwhisky.css";
import Home from "./components/Home"
import Navbar from "./components/Navbar";
import About from "./components/About";
// import Indexwhisky from "./components/Indexwhisky";
// import Footer from "./components/Footer";
import TextAnalysis from "./components/TextAnalysis";
import { HashRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
      <>
          <Routes>
            <Route exact path="/" element = {<Home />} />
            {/* <Route exact path="/signin" element = {<SignIn />} />
            <Route exact path='/signup' element = {<SignUp />} />
            <Route exact path='/signout' element = {<SignOut/>} /> */}
            <Route exact path="/textanalysis" element = {<TextAnalysis/>} />
            {/* <Route path='*' element = {<PNF/> }/> */}
          </Routes>

      <div className="blank">alokknight</div>
    </>
  );
}


export default App;
