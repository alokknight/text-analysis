// import logo from "./logo.svg";
// import lamp from "./lomp.jpg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar title="TextAnalysis" aboutText="about-TextAnalysis" />

      <div className="container">
        <TextForm heading="Enter your text for Text Analysis." />
      </div>
      <About/>
      <div className="blank">alokknight</div>
    </>
  );
}


export default App;
