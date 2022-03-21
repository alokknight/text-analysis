
import "./App.css";
import "./indexwhisky.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Indexwhisky from "./components/Indexwhisky";
import Footer from "./components/Footer";
import Inputform from "./components/Inputform";
import Sponsers from "./components/Sponsers";

function App() {
  return (
      <>
      <Indexwhisky/>
      <Navbar title="Whishky " aboutText="Quality predicition"/>
      <Inputform/>
      <Sponsers/>
      <Footer/>

      <Navbar title="TextAnalysis" aboutText="about-TextAnalysis" />

      <div className="container">
        <TextForm heading="Enter your text for Text Analysis." />
      </div>

      <About/>
      <Footer/>
      <div className="blank">alokknight</div>
    </>
  );
}


export default App;
