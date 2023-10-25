import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
import textbottom from "../../assets/img/textbottom.png";
import computer from "../../assets/img/computer.png";
import "../../assets/scss/workflow.css";
import "../../assets/scss/main.css";
import { GrPersonalComputer } from 'react-icons/gr';
import SectionPooja from '../astrology/sectionpooja';
import Testimonials from "./Testimonials";
export default function Services() {
  return (
    <LayoutOne headerTop="visible">
      <section className="pt-0 pb-0 " style={{ backgroundColor: "#191a1f" }}>
        <div
          className=""
        >
          <Container className="py-5">
            <div className="d-flex  justify-content-between">
              <div className="">
                <h2 className="text-white">Scope Our Services</h2>
              </div>
              <div className="">
                <a
                  href="#"
                  className="text-white elementor-button elementor-button-link elementor-size-md"
                >
                  All Servicesgit 
                </a>
              </div>
            </div>
            <Row>
              <Col lg="12">
                <Row className="">
                  <Col className="allservicesmainheading" md="4" lg="4" sm="12">
                    <div className="serve-1">
                      <div>
                        <img
                          src={computer}
                          className="my-2 educationImg"
                          width={50}
                          height={50}
                          alt="laptop"
                        />
                      </div>
                      <h4 className="font-color"> E Learning</h4>
                      <p className="text-color font-color">
                        Explore High Quality Business skill-Up Courses.
                      </p>
                      <div className="enrollmenow">
                        <a
                          href="#"
                          className="font-color elementor-button elementor-button-link elementor-size-md"
                        >
                          ENROl NOW
                        </a>
                      </div>
                    </div>
                  </Col>
                  <Col className="allservicesmainheading" md="4" lg="4" sm="12">
                    <div className="serve-1">
                      <div>
                        <img
                          src={computer}
                          className="my-2 educationImg"
                          width={50}
                          height={50}
                          alt="laptop"
                        />
                      </div>
                      <h4 className="font-color"> E Learning</h4>
                      <p className="text-color font-color">
                        Explore High Quality Business skill-Up Courses.
                      </p>
                      <div className="enrollmenow">
                        <a
                          href="#"
                          className="font-color elementor-button elementor-button-link elementor-size-md"
                        >
                          ENROl NOW
                        </a>
                      </div>
                    </div>
                  </Col>
                  <Col className="allservicesmainheading" md="4" lg="4" sm="12">
                    <div className="serve-1">
                      <div>
                        <img
                          src={computer}
                          className="my-2 educationImg"
                          width={50}
                          height={50}
                          alt="laptop"
                        />
                      </div>
                      <h4 className="font-color"> E Learning</h4>
                      <p className="text-color font-color">
                        Explore High Quality Business skill-Up Courses.
                      </p>
                      <div className="enrollmenow">
                        <a
                          href="#"
                          className=" font-color elementor-button elementor-button-link elementor-size-md"
                        >
                          ENROl NOW
                        </a>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            </Container>
</div>
      </section>
      <section className="mb-4 mt-3">
        <Row>
          <Col>
            <div className="d-flex justify-content-center mt-4 mb-2">
              <h5>TESTIMONIALS</h5>
            </div>
            <div className="d-flex justify-content-center mb-2">
              <h2>What they say</h2>
            </div>
            <Testimonials />
          </Col>
        </Row>
      </section>
    </LayoutOne>
  );
}
