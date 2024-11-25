import React from "react";
import Features from "./components/Features";

function App() {
  return (
    <div className="jobjot-entire-wrap">
      {/*insert Navbar goes here */}
      <div className="jobjot-main-container">
        <Features />
      </div>
       {/*insert footer goes here */}
    </div>
  );
}

export default App;
