import React from "react";
import Header from "./Header";
import Home from "./pages/Home";
import Loader from "./components/Loader";

const Layout: React.FC = () => {
  return (
    <section id="main-layout">
      <Header />
      <main>
        <Home />
        {/* Other sections */}
      </main>
    </section>
  );
};

export default Layout;

