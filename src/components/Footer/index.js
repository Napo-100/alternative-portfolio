import { React } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FaRegEnvelope } from 'react-icons/fa';
import { Nav } from "react-bootstrap";
const FooterPage = (props) => {
    return (
        <MDBFooter className="nav-background page-footer font-small pt-4 mt-0">
        
          <hr />
          <div className="text-center py-3">
            {/* <ul className="list-unstyled list-inline mb-0">
              <li className="list-inline-item">
                <h5 className="mb-1">Contact Me</h5>
              </li>
              <li className="list-inline-item">
                <Nav.Link href="#contact" className="btn btn-danger btn-rounded" 
                onClick={() => props.handlePageChange('Contact')}
              >
                <FaRegEnvelope style={{fontSize:"25px"}}/>
                </Nav.Link>
              </li>
            </ul> */}
          </div>
          <hr />
          <div className="text-center">
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item">
                <a className="btn-floating btn-sm btn-tw mx-1" href="https://github.com/napo-100" target='_blank'>
                  <i className="fab fa-github" style={{fontSize:"35px"}}> </i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn-floating btn-sm btn-li mx-1" href="https://www.linkedin.com/in/michael-napolitano-0a5b1094/" target='_blank'>
                  <i className="fab fa-linkedin-in" style={{fontSize:"35px"}}> </i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn-floating btn-sm btn-li mx-1" href="mailto:michaeljnapolitano@gmail.com" target='_blank'>
                  <i className="far fa-envelope" style={{fontSize:"35px"}}> </i>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright
            </MDBContainer>
          </div>
        </MDBFooter>
      );
}

export default FooterPage;