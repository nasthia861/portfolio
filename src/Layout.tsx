import React from "react";
import Header from "./Header";
import Loader from "./components/Loader";
import Tech from "./pages/Tech";
import Project from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";

const Layout: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <section id="main-layout" className="main-layout">
        <main>
          <About />
          <Tech />
          <Project />
          <Contact />
        </main>
      </section>
    </div>
  );
};

export default Layout;

