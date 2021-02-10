import React, { useState } from 'react';
import Header from './Nav';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
function PortfolioContainer() {
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = (props) => {
    // Add a switch statement that will return the appropriate component of the 'currentPage'
    // YOUR CODE HERE
    //
    console.log(props)
    switch (props) {
      case 'About':
        return <About />;

      case 'Portfolio':
        return <Portfolio />;
      
        // case 'Contact':
        //   return <Contact />;

      default:
        return <About />;

    }

  };

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
     
        {
          // Render the component returned by 'renderPage()'
          // YOUR CODE HERE
          //
          renderPage(currentPage)
        }
     
    </div>
  );
}

export default PortfolioContainer;
