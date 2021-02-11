import React, { useState } from "react";
import Header from "./Nav";
import About from "./About";
import Projects from "./Projects";
import Bonus from "./Bonus";
function PortfolioContainer() {
  const [currentPage, handlePageChange] = useState("About");

  const renderPage = (props) => {
    console.log(props);
    switch (props) {
      case "About":
        return <About />;

      case "Projects":
        return <Projects />;

      case "Bonus":
        return <Bonus />;

      // case 'Contact':
      //   return <Contact />;

      default:
        return <About />;
    }
  };

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />

      {renderPage(currentPage)}
    </div>
  );
}

export default PortfolioContainer;
