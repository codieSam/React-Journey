import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/about";

function App() {
  const [Mode, setMode] = useState("light");
  const [toggleText, setToggleText] = useState("Dark");
  const [navTextColor, setNavTextColor] = useState("dark");

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      setToggleText("Light");
      setNavTextColor("light");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      setMode("light");
      setToggleText("Dark");
      setNavTextColor("dark");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  return (
    <section>
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={Mode}
        toggleMode={toggleMode}
        toggleText={toggleText}
        navTextColor={navTextColor}
      />
      <TextForm heading="Enter the text to analyze" />
      {/* <About /> */}
    </section>
  );
}

export default App;
