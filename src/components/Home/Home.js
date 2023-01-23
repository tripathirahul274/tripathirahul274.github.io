import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profile from "../../Assets/profile.jpg";
import ContectLogo from "./ContectLogo";
import Type from "./Type";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/Rahul_Tripathi_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
function Home() {
  return (
    <section id="scrollHome" className="activeNavlink">
      <Container fluid className="home-section" id="home">
        <Container className="home-content">

          <Row>
            <Col md={7} className="home-header">
              <h6 className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h6>

              <h6 className="heading-name">
                I am
                <strong className="main-name"> Rahul Tripathi</strong>
              </h6>
              <h6 className="sub-heading-name">
                <strong>FULL STACK WEB DEVELOPER</strong>
              </h6>
              <h4 className="sub-heading-name">
                From
                <strong className="main-name">Jaipur, Rajasthan</strong>
              </h4>
              <div style={{ paddingLeft: 45, textAlign: "left" }}>
                <Type />
              </div>
              <ContectLogo />
            </Col>

            <Col
              className="my-img-home-div"
              md={5}
              style={{ paddingBottom: 15 }}
            >
              <img
                style={{ border:"1px solid black",width: "70%", borderRadius:"10%"}}
                src={profile}
                alt="home pic"
                className="img-fluid my-img-home"
              />
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button variant="primary" href={pdf} target="_blank">
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Row>
        </Container>
      </Container>
    </section>
  );
}
export default Home;
