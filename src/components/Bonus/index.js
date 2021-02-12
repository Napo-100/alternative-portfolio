import React from "react";
import { Container } from "react-bootstrap";

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
      video: "https://player.vimeo.com/video/389339816",
      title: "The Heavy Promo",
      description:
        "Promo I filmed and edited for a special event at a local venue.",
    },
    {
      video: "https://player.vimeo.com/video/385716586",
      title: "David Lawrence Photography",
      description:
        "Promo I filmed for a photographer friend of mine during a pop-up event.",
    },
    {
      video: "https://player.vimeo.com/video/385716830",
      title: "Addiction",
      description:
        "A mockumentary about a man struggling with a ridiculous addiction.",
    },
    {
      video: "https://player.vimeo.com/video/389340075",
      title: "The Blind Date",
      description: "A short sketch starring yours truly.",
    },
    {
      video: "https://player.vimeo.com/video/386134768",
      title: "The Awkard Audition",
      description: "This was a fun one.",
    },
  ];

  return (
    <Container fluid  className="pb-5 pt-1 bg-light variant-light h-full">
      <div className="p-3 text-center">
        {" "}
        <h2 className="pt-3">
          In addition to coding I also enjoy filming promotional videos for
          local companies and making short comedy films.
        </h2>
      </div>
      <MDBRow className="justify-content-center pb-3 pt-2">
        {videoProjectData.map((vProject, i) => (
          <MDBCardGroup>
            <MDBCard
              style={{ width: "22rem" }}
              className="m-1 pb-5"
              key={vProject.title}
            >
              <MDBCardVideo
                style={{ height: "240px" }}
                className="video-fluid"
                src={vProject.video}
                height="360"
              />

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
