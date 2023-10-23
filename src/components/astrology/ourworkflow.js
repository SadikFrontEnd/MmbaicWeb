import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import textbottom from "../../assets/img/textbottom.png";
import "../../assets/scss/workflow.css";
class OurWorkFlow extends React.Component {
  render() {
    return (
      <div className="col-lg-12 col-md-12 mb-30">
        {/* <div className="category-home">
          <section className="stt-2">
            <Container>
              <div className="heading">
                <h2>Connect to Astrologers</h2>
                <img src={textbottom} alt="" />
              </div>
              <Row>
                <Col md="4">
                  <div
                    className="process-box process-left"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    <Row>
                      <Col md="5">
                        <div className="process-step">
                          <i class="fa fa-commenting-o" aria-hidden="true"></i>
                        </div>
                      </Col>
                      <Col md="7">
                        <Link to="/allastrologerlist">
                          <h5 className="bt-txt">Chat with Astrologer</h5>
                        </Link>{" "}
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col md="4">
                  <div
                    className="process-box process-left"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    <Row>
                      <Col md="5">
                        <div className="process-step">
                          <i
                            className="fa fa-phone-square"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </Col>
                      <Col md="7">
                        <Link to="/allastrologerlist">
                          <h5 className="bt-txt">Talk to Astrologer</h5>
                        </Link>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col md="4">
                  <div
                    className="process-box process-left"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    <Row>
                      <Col md="5">
                        <div className="process-step">
                          <i class="fa fa-file-video-o" aria-hidden="true"></i>
                        </div>
                      </Col>
                      <Col md="7">
                        <Link to="/liveAstrologer">
                          <h5 className="bt-txt">Live Astrologer</h5>
                        </Link>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </div> */}
      </div>
    );
  }
}

export default OurWorkFlow;
