import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import relience from "../../Assets/Projects/relience.png";
import toggle from "../../Assets/Projects/toggletrack.png";
 import basket from "../../Assets/Projects/bigbasket.png";
 import movie from "../../Assets/Projects/toggletrack.png";
 import resta from "../../Assets/Projects/resta.png";
// import meanBuy from "../../Assets/Projects/meanBuy.png";
// import countryDetails from "../../Assets/Projects/countryDetails.png";
// import fitnessClub from "../../Assets/Projects/fitnessClub.png";

function Projects() {
  return (
    <div className="project-background activeNavlink" id="scrollProjects">
      {/* <Particle2 /> */}
      <Container fluid className="project-section">
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Projects </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

            {/* Toggle-Track Clone -------------------------------------------------------------------*/}
            <Col md={6} className="project-card">
              <ProjectCard
                imgPath={basket}
                isBlog={false}
                title="Travelocity Clone"
                tool=" React,Chakra-Ui, JavaScript, HTML, CSS,Redux"
                description="Travelocity.com is an online travel agency owned by Expedia Group"
                link="https://github.com/tripathirahul274/sole-hour-5710"
                demoLink="https://velvety-bubblegum-60e422.netlify.app/"
              />
            </Col>


            {/* greenhouse Clone -------------------------------------------------------------------*/}
            <Col md={6} className="project-card">
              <ProjectCard
                imgPath={relience}
                isBlog={false}
                title="Lifestylestore Clone"
                tool= "React,Redux,Chakra-Ui,JavaScript, CSS"
                description="A lifestyle store is a retail store selling a wide variety of product categories under a single brand."
                link="https://github.com/Sagar1079/ultra-field-1415"
                demoLink="https://awake-fashion.netlify.app/"
              />
            </Col>

            {/* movie 2.0 ------------------------------------------------------------- */}

{/*


                  {/* movie 2.0 ------------------------------------------------------------- */}
                  <Col md={6} className="project-card">
              <ProjectCard
                imgPath={movie}
                isBlog={false}
                title="OLX Clone"
                tool="  JavaScript,API,Local-Storage HTML, CSS"
                description="OLX is part of OLX Group, a network of leading marketplaces present in 30+ countries with 20+ brands."
                link="https://github.com/Bishwajit0759/-likeable-air-3346"
                demoLink="https://legendary-fenglisu-a8f60a.netlify.app/"
              />
            </Col>
            <Col md={6} className="project-card">
              <ProjectCard
                imgPath={resta}
                isBlog={false}
                title="Kickstarter Clone"
                tool="  JavaScript,HTML, CSS"
                description="Kickstarter is an American public benefit corporation based in Brooklyn, New York, that maintains a global crowdfunding platform focused on creativity."
                link="https://github.com/sudarshan441/mammoth-zoo-7517"
                demoLink="https://symphonious-genie-ba7aaf.netlify.app/"
              />
            </Col>





          </Row>
        </Container>
      </Container>

    </div>
  );
}

export default Projects;
