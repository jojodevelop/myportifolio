import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Hom from "./components/Hom";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Futer from "./components/Futer";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Hom />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/skill" element={<Skills />} />
        <Route path="/contct" element={<Contact />} />
        <Route path="/projct" element={<Project />} />
        <Route path="/futer" element={<Futer />} />
      </Routes>
    </>
  );
}

export default App;
