import React from "react";
import Nav from "./components/Nav"
import Features from "./components/Features";
import About from "./components/About";

function App() {
  return (
    <div className="jobjot-entire-wrap">
      <Nav />
      <div className="jobjot-main-container">
        <Features />
        <About />
      </div>
      {/*insert footer goes here */}
    </div>
  );
}

export default App;
