import React from 'react'
// import textbottom from "../../assets/img/astro-4.jpg";
import videoImage from "../../assets/img/videoImage.jpg";
import "../../assets/scss/main.css";
import { Col, Container, Row } from 'reactstrap';
export default function VideoSection() {
  return (
 <>
  <div className='imgparent'>
  
  <div className='parentDiv'>
    <img
  className="mainVideo"
       style={{
         width: "100%",
         height:"550px"
           }}
         src={videoImage}
   alt="videoImage"
         />

</div>
<div className='btnsetup'>
<div class="video-play-btn ripple">
      <a href="#" class="play-btn">
            <i class="fa fa-play"></i>
      </a>
</div>
</div>


</div>
<div>
<Container>
  <Row className='my-5'>
      <Col lg="6" md="6" sm="12" >
          <h4 className='text-black py-2'>HOW IT WORKS </h4>
          <h2>Simple step to success</h2>
          <p>
              Acceess our powerfull and result oriented  online courses, personal mentor ship, financial advisory and many more... 
          </p>
      </Col>
      <Col lg="6" md="6" sm="12">
        <Row>
          <Col lg="2" md="2" sm="12">
            <div className='eael-feature-list-icon eael-feature-list-icon-inner bottom-line'>  
              <i class="fa fa-comments"></i>    
              </div>
          </Col>
          <Col lg="10" md="10" sm="12">
            <h4 className='progress-title'>Consultation</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed do eiusmod tempor incididunt ut abore et dolore magna</p>
          </Col>
        </Row>
        <Row className='progressRow  progress-top-margin'>
          <Col lg="2" md="2" sm="12">
            <div className='eael-feature-list-icon eael-feature-list-icon-inner bottom-line'>  
              <i class="fa fa-comments"></i>    
              </div>
          </Col>
          <Col lg="10" md="10" sm="12">
            <h4 className='progress-title'>Consultation</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed do eiusmod tempor incididunt ut abore et dolore magna</p>
          </Col>
        </Row>
        <Row className='progressRow  progress-top-margin'>
          <Col lg="2" md="2" sm="12">
            <div className='eael-feature-list-icon eael-feature-list-icon-inner bottom-line'>  
              <i class="fa fa-comments"></i>    
              </div>
          </Col>
          <Col lg="10" md="10" sm="12">
            <h4 className='progress-title'>Consultation</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed do eiusmod tempor incididunt ut abore et dolore magna</p>
          </Col>
        </Row>
        <Row className='progressRow  progress-top-margin'>
          <Col lg="2" md="2" sm="12">
            <div className='eael-feature-list-icon eael-feature-list-icon-inner'>  
              <i class="fa fa-comments"></i>    
              </div>
          </Col>
          <Col lg="10" md="10" sm="12">
            <h4 className='progress-title'>Consultation</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed do eiusmod tempor incididunt ut abore et dolore magna</p>
          </Col>
        </Row>
      </Col>
  </Row>
</Container>
</div>
 </>
  )
}
