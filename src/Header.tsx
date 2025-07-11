// Header.tsx
import React from "react";
import "./styling/Header.css";
import { Button } from "@progress/kendo-react-buttons";
import { AppBar, AppBarSection } from "@progress/kendo-react-layout";
const Header: React.FC = () => {
    const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header className="header">
      <AppBar className="header-bar">
        <AppBarSection className="nav-buttons">
          <Button fillMode="flat" onClick={() => scrollTo("about")}>
            About
          </Button>
          <Button fillMode="flat" onClick={() => scrollTo("photos")}>
            Photos
          </Button>
          <Button fillMode="flat" onClick={() => scrollTo("tech")}>
            Tech Stack
          </Button>
          <Button fillMode="flat" onClick={() => scrollTo("contact")}>
            Contact
          </Button>
        </AppBarSection>
      </AppBar>
    </header>
  );
};

export default Header;
