import React from "react";
import { Container } from "react-bootstrap";
// import { DiGithubAlt } from "react-icons/di";
import theHeavy from "../../assets/files/video/The-Heavy-Promo-for-creative-square.mp4";
import davidLawrence from "../../assets/files/video/David-Lawrence-Photo.mp4";

import {
  MDBCard,
  MDBCardBody,
//   MDBCardImage,
  MDBCardVideo,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCardGroup,
} from "mdbreact";

function VideoProjects() {
  const videoProjectData = [
    {
      video: theHeavy,
      title: "The Heavy Promo",
      description:
        "Promo I filmed and edited for a special event at a local venue.",
    },
    {
      video: davidLawrence,
      title: "david Lawrence",
      description:
        "Promo I filmed and edited for a special event at a local venue.",
    },
  ];

  return (
    <Container fluid id="bonus">
      <MDBRow className="justify-content-center">
        {videoProjectData.map((vProject, i) => (
          <MDBCardGroup>
            <MDBCard
              style={{ width: "22rem" }}
              className="m-1"
              key={vProject.title}
            >
              <a href={vProject.githublink} target="_blank" rel="noreferrer">
                <MDBCardVideo
                  style={{ height: "200px" }}
                  className="video-fluid"
                  src={vProject.video}
                />
                {/* <DiGithubAlt
                  style={{
                    position: "absolute",
                    top: "0",
                    color: "#224e66",
                    fontSize: "45px",
                    opacity: "0.5",
                  }}
                /> */}
              </a>
              <MDBCardBody>
                <MDBCardTitle>{vProject.title}</MDBCardTitle>

                <MDBCardText style={{ height: "20px" }}>
                  {vProject.description}
                </MDBCardText>
                <div></div>
              </MDBCardBody>
            </MDBCard>
          </MDBCardGroup>
        ))}
      </MDBRow>
    </Container>
  );
}

export default VideoProjects;
