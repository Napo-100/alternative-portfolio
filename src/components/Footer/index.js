import { React } from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const FooterPage = (props) => {
  return (
    <MDBFooter className="nav-background page-footer font-small pt-4 mt-0">
      <hr />
      <div className="text-center py-3">
     
      </div>
      <hr />
      <div className="text-center">
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <a
              className="btn-floating btn-sm btn-tw mx-1"
              href="https://github.com/napo-100"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github" style={{ fontSize: "35px" }}>
                {" "}
              </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a
              className="btn-floating btn-sm btn-li mx-1"
              href="https://www.linkedin.com/in/michael-napolitano-0a5b1094/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in" style={{ fontSize: "35px" }}>
                {" "}
              </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a
              className="btn-floating btn-sm btn-li mx-1"
              href="mailto:michaeljnapolitano@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="far fa-envelope" style={{ fontSize: "35px" }}>
                {" "}
              </i>
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
};

export default FooterPage;
