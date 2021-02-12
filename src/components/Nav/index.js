import React from "react";
import {
  Navbar,
  Nav,
  // Jumbotron,
  // Container,
} from "react-bootstrap";
// import image from "../../assets/Full Stack Logo White.png";
import resume from "../../assets/files/Michael-Napolitano-updated-Dev-Resume-for-Portfolio.pdf";
function Header(props) {
  const tabs = ["About", "Projects", "Bonus"];
  return (
    <>
      <header>
        <Navbar
          sticky="top"
          variant="dark"
          expand="lg"
          className="nav-background p-5"
        >
          {/* <Navbar.Brand>
            <img
              src={image}
              width="60"
              height="60"
              className="d-none d-lg-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand> */}

          <Navbar.Brand
            href="/"
            style={{ fontSize: "4vw" }}
            className=""
            onClick={() => props.handlePageChange("#about")}
          >
           
            Michael Napolitano
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-flex justify-content-end w-100 mr-5 h2" style={{ fontSize: "2vw" }}>
              {tabs.map((tab) => (
                <li className="nav-item p-2" key={tab}>
                  <Nav.Link
                    href={"#" + tab.toLowerCase()}
                    onClick={() => props.handlePageChange(tab)}
                    className={
                      props.currentPage === tab ? "nav-link active" : "nav-link"
                    }
                  >
                    {tab}
                  </Nav.Link>
                </li>
              ))}
              <li className="nav-item p-2">
                <Nav.Link href={resume} target="_blank" rel="noreferrer">
                  Resume
                </Nav.Link>
              </li>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* <Jumbotron fluid className="bg m-0 d-none d-lg-block">
          <Container className="text-center"></Container>
        </Jumbotron> */}
      </header>
    </>
  );
}

export default Header;
