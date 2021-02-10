import React, { useState } from 'react';
import Header from './Nav';
import About from './About';
import Portfolio from './Portfolio';
function PortfolioContainer() {
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = (props) => {
    
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
          
          renderPage(currentPage)
        }
     
    </div>
  );
}

export default PortfolioContainer;
