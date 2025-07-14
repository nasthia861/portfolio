import React, { useEffect } from "react";
import Layout from "./Layout";
import Home from "./pages/About"; 
import Loader from "./components/Loader";

function App() {

  return (
    <div className="App">
      <Loader />
      <Layout />
    </div>
  );
}

export default App;
