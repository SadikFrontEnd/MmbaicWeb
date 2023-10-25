import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import textbottom from "../../assets/img/textbottom.png";
import axiosConfig from "../../axiosConfig";
import Homebookpooja from "./Homebookpooja.js";
import "../../assets/scss/main.css";
import VideoSection from "./VideoSection";
// import Swiper from "react-id-swiper";
class SectionPooja extends React.Component {
  state = {
    productList: [],
  };
  componentDidMount() {
    axiosConfig.get(`/admin/getProduct`).then(res => {
      this.setState({ productList: res.data.data });
    });
  }
  render() {
    const { productList } = this.state;
    return (
      <>
        <Container>
          <div className="heading mt-40">
            <h6>E-LEARNING</h6>
            <h2 className="elementor-heading-title elementor-size-default">Popular Lessons</h2>
           
          </div>
          <Homebookpooja />
        </Container>
        <VideoSection />
       </>
    );
  }
}
export default SectionPooja;
