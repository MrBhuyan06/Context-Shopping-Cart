import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client.js";
import Header from "./components/Header.js";
const App = () => {
  return (
    <>
      <Header />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
