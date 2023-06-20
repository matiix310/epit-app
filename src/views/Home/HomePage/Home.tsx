import React from "react";
import "./Home.css";
import RightPanel from "@components/RightPanel/RightPanel";
import Title from "@components/Title/Title";

function App() {
  return (
    <div className="Home">
      <RightPanel />
      <Title name="NEWS" />
    </div>
  );
}

export default App;
