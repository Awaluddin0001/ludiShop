import { useState, Fragment } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/sections/Hero.jsx";
import MainContent from "./components/MainContent.jsx";
import "./App.scss";

function App() {
  return (
    <Fragment>
      <Hero />
      <Navbar />
      <MainContent />
    </Fragment>
  );
}

export default App;
