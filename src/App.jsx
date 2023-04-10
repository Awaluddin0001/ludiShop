import { useState, Fragment } from "react";
import Navbar from "./components/Navbar.jsx";
import FirstLook from "./components/FirstLook.jsx";
import "./App.scss";

function App() {
  return (
    <Fragment>
      <Navbar />
      <FirstLook />
    </Fragment>
  );
}

export default App;
