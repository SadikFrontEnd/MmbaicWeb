import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import textbottom from "../../assets/img/textbottom.png";
import swal from "sweetalert";
class OurService extends React.Component {
  handleAsk = () => {
    let userId = JSON.parse(localStorage.getItem("user_id"));
    if (userId !== "" && userId !== null) {
      // history.pushState("askQuestionList");
      this.props.history.push("/askQuestionList");
    } else {
      swal("Need To Login First");
    }
  };
  render() {
    return (
      <div>
        {/* <section className="ptb-30">
          <Container>
            <div className="heading">
              <h2>Free Astrologer Services</h2>
              <img src={textbottom} alt="" className="sb-img" />
            </div>
            <Row>
              <Col lg="12">
                <Row>
                  <Col md="2">
                    <div className="serve-1">
                      <Link to="/heroscopestwo">
                        <h3>Horoscopes</h3>
                        <p>
                          A horoscope is a forecast of a person's future,
                          typically...
                        </p>
                      </Link>
                    </div>
                  </Col>
                  <Col md="2">
                    <div className="serve-1">
                      <Link to="/kundaliform">
                        <h3> Match Making</h3>
                        <p>
                          Kundali Match Making is an important consideration...
                        </p>
                      </Link>
                    </div>
                  </Col>
                  <Col md="2">
                    <div className="serve-1">
                      <Link to="/manglikdosh">
                        <h3>Manglik Dosh</h3>
                        <p>
                          In Vedic astrology Manglik Dosh is to describe a
                          specific astrological...{" "}
                        </p>
                      </Link>
                    </div>
                  </Col>
                  <Col md="2">
                    <div className="serve-1">
                      <Link to="/pitraDosh">
                        <h3>Pitra Dosh</h3>
                        <p>
                          Pitra Dosh is a term used in Vedic astrology to
                          describe a specific...{" "}
                        </p>
                      </Link>
                    </div>
                  </Col>{" "}
                  <Col md="2">
                    <div className="serve-1">
                      <Link to="/kalsharpDosh">
                        <h3>Kalsharp Dosh</h3>
                        <p>
                          Kalasarpa Dosha, also known as Kalsharp Dosh, is a
                          condition in Vedic...{" "}
                        </p>
                      </Link>
                    </div>
                  </Col>
                  <Col md="2">
                    <div className="serve-1">
                      <Link to="/lalKitab">
                        <h3>Lal Kitab</h3>
                        <p>
                          Looking for your free Kundli from expert astrologers{" "}
                        </p>
                      </Link>
                    </div>
                  </Col>{" "}
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="ptb-30">
          <Container>
            <div className="heading">
              <h2>Paid Astrologer Services</h2>
              <img src={textbottom} alt="" className="sb-img" />
            </div>
            <Row>
              <Col lg="12">
                <Row>
                  <Col md="2">
                    <div className="serve-1">
                      <Link to="/allastrologerlist">
                        <h3>Chat with Astrologer</h3>
                        <p>
                          Chat with an astrologers online at Astrogyata! Chat
                          Now!
                        </p>
                      </Link>
                    </div>
                  </Col>
                  <Col md="2">
                    <div className="serve-1">
                      <Link to="/allastrologerlist">
                        <h3>Call Astrologer</h3>
                        <p>
                          Call with an astrologers online anytime at Astrogyata!
                          Call Now!
                        </p>
                      </Link>
                    </div>
                  </Col>
                  <Col md="2">
                    <div className="serve-1">
                      <Link to="/allastrologerlist">
                        <h3>Video Call Astrologer</h3>
                        <p>
                          Video Call with an astrologer online at Astrogyata!
                          Video Call Now!
                        </p>
                      </Link>
                    </div>
                  </Col>
                  <Col md="2">
                    <div className="serve-1" onClick={() => this.handleAsk()}>
                      <h3>Ask Question </h3>
                      <p>
                        Ask Question with an astrologers online anytime at
                        Astrogyata! Ask Question Now!
                      </p>
                    </div>
                  </Col>
                  <Col md="2">
                    <div className="serve-1">
                      <Link to="/allastrologerlist">
                        <h3>Talk Astrologer</h3>
                        <p>
                          Talk to experienced astrologers online anytime at
                          Astrogyata! Call Now!
                        </p>
                      </Link>
                    </div>
                  </Col>
                  <Col md="2">
                    <div className="serve-1">
                      <Link to="/bookEvent">
                        <h3>Book Puja </h3>
                        <p>
                          {" "}
                          Puja to experienced astrologers online anytime at
                          Astrogyata! Book Now!
                        </p>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section> */}
      </div>
    );
  }
}
export default OurService;
