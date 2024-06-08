import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/about";

function App() {
  const [Mode, setMode] = useState("light");
  const [toggleText, setToggleText] = useState("Dark");
  const [navTextColor, setNavTextColor] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      setToggleText("Light");
      setNavTextColor("light");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark mode enabled successfully", "success");
      document.title = "TextUtild-Dark";
    } else {
      setMode("light");
      setToggleText("Dark");
      setNavTextColor("dark");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode enabled successfully", "success");
      document.title = "TextUtils-Light";
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
      <Alert alert={alert} />
      <TextForm heading="Enter the text to analyze" showAlert={showAlert} />
      {/* <About /> */}
    </section>
  );
}

export default App;
