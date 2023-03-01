import React from "react";
import Card from "./Components/Card";
import soft from "./assests/soft.jpeg";
import "./assests/app.css";

function App() {
  return (
    <>
      <div className="carddiv">
        <Card title="Card1" image={soft} />
        <Card title="Card2" image={soft} />
        <Card title="Card3" image={soft} />
        <Card title="Card4" image={soft} />
        <Card title="Card5" image={soft} />
      </div>
    </>
  );
}

export default App;
