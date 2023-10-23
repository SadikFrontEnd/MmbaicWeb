import React from 'react'
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
import textbottom from "../../assets/img/textbottom.png";
import computer from "../../assets/img/computer.png";
import "../../assets/scss/workflow.css";
import "../../assets/scss/main.css";
// import { FaBeer } from 'react-icons/fa';
// import { GrPersonalComputer } from 'react-icons/Gr';
import { GrPersonalComputer } from 'react-icons/gr';
import SectionPooja from '../astrology/sectionpooja';
// 
export default function Services() {
  return (
    <LayoutOne headerTop="visible">
    <section className="pt-0 pb-0 " style={{backgroundColor: "#191a1f",}}>
      <div
        className=""
        // style={{
        //   float: "left",
        //   width: "100%",
        //   backgroundColor: "#272727",
        //   position: "relative",
        //   backgroundAttachment: "fixed",
        //   backgroundSize: "cover",
        //   color: "#ffffff",
        //   padding: " 50px 0px 50px 0px",
        //   backgroundImage: `url(${astrologinbg})`,
        //   backgroundPosition: "center center",
        //   backgroundRepeat: " no-repeat",
        //   textAlign: "center",
        // }}
   >
   
      <Container className='py-5'>
        <div className="d-flex  justify-content-between">
          <div className=''>
            <h2 className='text-white'>Scope Our Services</h2>
          </div>
          <div className=''>
            <a href="#" className='text-white elementor-button elementor-button-link elementor-size-md'>All Services</a>
          </div>
        </div>
        <Row>
          <Col lg="12">
            <Row className=''>
         <Col md="4" lg="4" sm="12">
                <div className="serve-1">
                    <div>
                       <img src={computer} className='my-2 educationImg'  width={50} height={50} alt="laptop"/>
                       </div>
                    <div> E Learning</div>
                   <p className='text-color'>
                     Explore High Quality Business skill-Up Courses.
                    </p>
                    <a href="#" className='elementor-button elementor-button-link elementor-size-md' >ENROl NOW</a>
                </div>
              </Col>
              <Col md="4" lg="4" sm="12">
                <div className="serve-1">
                    <div>
                       <img src={computer} className='my-2 educationImg'  width={50} height={50} alt="laptop"/>
                       </div>
                    <div> E Learning</div>
                   <p className='text-color'>
                     Explore High Quality Business skill-Up Courses.
                    </p>
                    <a href="#" className='elementor-button elementor-button-link elementor-size-md' >ENROl NOW</a>
                </div>
              </Col>
              <Col md="4" lg="4" sm="12" >
                <div className="serve-1">
                    <div>
                       <img src={computer} className='my-2 educationImg'  width={50} height={50} alt="laptop"/>
                       </div>
                    <div> E Learning</div>
                   <p className='text-color'>
                     Explore High Quality Business skill-Up Courses.
                    </p>
                    <a href="#" className='elementor-button elementor-button-link elementor-size-md' >ENROl NOW</a>
                </div>
              </Col>
              
            </Row>
           
          </Col>
        </Row>
      </Container>
 </div>
    </section>
    <SectionPooja />
</LayoutOne>
  )
}
