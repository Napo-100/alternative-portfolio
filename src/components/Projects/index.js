import React from "react";
import { Container } from "react-bootstrap";
import { DiGithubAlt } from "react-icons/di";
import tourVidImg from "../../assets/tourVid.png";
import mspImg from "../../assets/MSP.png";
import weatherImg from "../../assets/weatherDashboard.png";
// import budgetImg from "../../assets/budgetTracker.png";
import creativeSquare from "../../assets/creativesquare2.png";
import passGenImg from "../../assets/password-generator.jpg"

import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCardGroup,
} from "mdbreact";

function Projects() {
  const projectData = [
    {
      img: creativeSquare,
      githublink: "https://github.com/Napo-100/creative-square.git",
      titlelink: "https://creative-square.herokuapp.com/",
      title: "Creative Square",
      description:
        "MERN stack portfolio web application with social media flair. Designed to take the most engaging and direct approach for content creators to have their posts be consumed and financially contributed to.",
    },
    {
      img: mspImg,
      githublink: "https://github.com/jrsparl/UCF-mystudioportal.git",
      titlelink: "https://pacific-river-56030.herokuapp.com/",
      title: "My Studio Portal",
      description:
        "Online music lesson web app designed for a robust one-on-one teacher/student experience. Demo email: demoTeacher@test.com, Demo PW: root"
    },
    {
      img: weatherImg,
      githublink: "https://github.com/Napo-100/weather-dashboard",
      titlelink: "https://napo-100.github.io/weather-dashboard/",
      title: "Weather Dashboard",
      description:
        "An RESTful API application designed to pull weather conditions for all cities queried. Each city is stored locally to be retrieved on load.",
    },
    {
      img: passGenImg,
      githublink: "https://github.com/Napo-100/challenge-three-password-generator",
      titlelink: "https://napo-100.github.io/challenge-three-password-generator/",
      title: "Password Generator",
      description:
        "A quick and easy secure password generator app.",
    },
    {
      img: tourVidImg,
      githublink: "https://github.com/Napo-100/Covid-travel-safety-app",
      titlelink: "https://napo-100.github.io/Covid-travel-safety-app/",
      title: "TourVid Travel Safety App",
      description:
        "A RESTful API application compiling multiple sources to provide Covid-19 statistics, local news and tourism info for your desired destination.",
    },
  ];

  return (
    <Container fluid id="projects">
      <MDBRow className="justify-content-center">
        {projectData.map((project, i) => (
          <MDBCardGroup>
            <MDBCard style={{ width: "22rem" }} className="m-1" key={project.title}>
              <a href={project.githublink} target="_blank" rel="noreferrer">
                <MDBCardImage
                  style={{ height: "24rem" }}
                  className="img-fluid"
                  src={project.img}
                  waves
                />
                <DiGithubAlt
                  style={{
                    position: "absolute",
                    top: "0",
                    color: "#224e66",
                    fontSize: "45px",
                    opacity: "0.5",
                  }}
                />
              </a>
              <MDBCardBody>
                <MDBCardTitle>{project.title}</MDBCardTitle>

                <MDBCardText style={{ height: "100px" }}>
                  {project.description}
                </MDBCardText>

                <a
                  type="button"
                  class="btn text-light"
                  style={{ backgroundColor: "#224e66" }}
                  href={project.titlelink}
                  target="_blank" rel="noreferrer"
                >
                  See This Live
                </a>
              </MDBCardBody>
            </MDBCard>
          </MDBCardGroup>
        ))}
      </MDBRow>
    </Container>
  );
}

export default Projects;
