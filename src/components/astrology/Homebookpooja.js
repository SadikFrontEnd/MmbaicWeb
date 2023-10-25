import React from "react";
import { Container, Row, Col, Button, Input } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
import textbottom from "../../assets/img/astro-4.jpg";
import "../../../src/assets/scss/style.scss";
import "../../assets/scss/astroteam.css"
import { BiTime } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import axiosConfig from "../../axiosConfig";
import swal from "sweetalert";
import { Link } from "react-router-dom";

import VideoSection from "./VideoSection";
class BookEvent extends React.Component {
  constructor({ props }) {
    super(props);
    this.state = {
      listofpooja: [],
    };
  }

  handlecheckpooja = value => {
    localStorage.setItem("poojaviewone", JSON.stringify(value));
    const userid = localStorage.getItem("user_id");
    if (userid !== null) {
      this.props.history.push(`/Poojadetailpage/${value?._id}`);
    } else swal("No User Found", "User Need to login First");
  };

  componentDidMount() {
    axiosConfig
      .get(`/admin/get_adminevent`)
      .then(res => {
        this.setState({ listofpooja: res.data.data.slice(0, 4) });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
     <>
      <section className="pt-0 pb-0">
        <div className="container mt-2">
          <Row>
            <div className="col-lg-12 col-md-12 mb-30">
              <div className="category-home">
                <section className="pt-0">
                  <div className="container">
                    <Row>
                    <Col  className="mt-3" md="4">
                              <div className="product-grid8">
                                <div class="product-image8 imageofpooja">
                                  <img
                                    className="imagepooja"
                                    style={{
                                      
                                      width: "100%",
                                    }}
                                    src={textbottom}
                                    alt="image"
                                  />
                                </div>
                                <div className="product-content">
                                  
                                  <div style={{color:"black"}}>Secret of Successful Teamwork</div>
                                  <div className="" style={{color:"green"}}>Management</div>
 <Row>
                                  <Col><ul>
                                    <li>
                                      <span  className="px-2"  style={{color:"black"}} ><i class="fa-solid fa-book"></i></span>
                                      <span className="px-2"   style={{color:"black"}}>12 Lessons</span>
                                      </li>
                                    <li>
                                      <span className="px-2"   style={{color:"black"}} ><i class="fa fa-play"></i></span>
                                      <span className="px-2"  style={{color:"black"}}>612 week</span>
                                      </li>
                                      </ul></Col>

                                      <Col>
                                      <Row>
                                        <Col lg="8" md="8"><span style={{color:"black"}}>271 Review</span></Col>
                                        <Col lg="4"  md="4"><span style={{color:"black"}}>*****</span></Col>
                                      </Row>
                                      </Col>
                                 </Row>

                                  <Row className="mt-1">
                                    <Link to={`/bookEvent`}>
                                      <Button
                                        style={{ width: "100%" }}
                                        // onClick={() =>
                                        //   this.handlecheckpooja(value)
                                        // }
                                        color="success"
                                      >
                                        Join CLass
                                      </Button>
                                    </Link>
                                  </Row>
                                </div>
                              </div>
                            </Col>
                    <Col  className="mt-3" md="4">
                              <div className="product-grid8">
                                <div class="product-image8 imageofpooja">
                                  <img
                                    className="imagepooja"
                                    style={{
                                      
                                      width: "100%",
                                    }}
                                    src={textbottom}
                                    alt="image"
                                  />
                                </div>
                                <div className="product-content">
                                  
                                  <div style={{color:"black"}}>Secret of Successful Teamwork</div>
                                  <div className="" style={{color:"green"}}>Management</div>
 <Row>
                                  <Col><ul>
                                    <li>
                                      <span  className="px-2"  style={{color:"black"}} ><i class="fa fa-book"></i></span>
                                      <span className="px-2"   style={{color:"black"}}>12k Lessons</span>
                                      </li>
                                    <li>
                                      <span className="px-2"   style={{color:"black"}} ><i class="fa fa-clock"></i></span>
                                      <span className="px-2"  style={{color:"black"}}>6 week</span>
                                      </li>
                                      </ul></Col>

                                      <Col>
                                      <Row>
                                        <Col lg="8" md="8"><span style={{color:"black"}}>271 Review</span></Col>
                                        <Col lg="4"  md="4"><span style={{color:"black"}}>*****</span></Col>
                                      </Row>
                                      </Col>
                                 </Row>

                                  <Row className="mt-1">
                                    <Link to={`/bookEvent`}>
                                      <Button
                                        style={{ width: "100%" }}
                                        // onClick={() =>
                                        //   this.handlecheckpooja(value)
                                        // }
                                        color="success"
                                      >
                                        Join CLass
                                      </Button>
                                    </Link>
                                  </Row>
                                </div>
                              </div>
                            </Col>
                    <Col  className="mt-3" md="4">
                              <div className="product-grid8">
                                <div class="product-image8 imageofpooja">
                                  <img
                                    className="imagepooja"
                                    style={{
                                      
                                      width: "100%",
                                    }}
                                    src={textbottom}
                                    alt="image"
                                  />
                                </div>
                                <div className="product-content">
                                  
                                  <div style={{color:"black"}}>Secret of Successful Teamwork</div>
                                  <div className="" style={{color:"green"}}>Management</div>
 <Row>
                                  <Col><ul>
                                    <li>
                                      <span  className="px-2"  style={{color:"black"}} >icon</span>
                                      <span className="px-2"   style={{color:"black"}}>12 Lessons</span>
                                      </li>
                                    <li>
                                      <span className="px-2"   style={{color:"black"}} ><i class="fa fa-clock"></i></span>
                                      <span className="px-2"  style={{color:"black"}}>68 week</span>
                                      </li>
                                      </ul></Col>

                                      <Col>
                                      <Row>
                                        <Col lg="8" md="8"><span style={{color:"black"}}>271 Review</span></Col>
                                        <Col lg="4"  md="4"><span style={{color:"black"}}>*****</span></Col>
                                      </Row>
                                      </Col>
                                 </Row>

                                  <Row className="mt-1">
                                    <Link to={`/bookEvent`}>
                                      <Button
                                        style={{ width: "100%" }}
                                        // onClick={() =>
                                        //   this.handlecheckpooja(value)
                                        // }
                                        color="success"
                                      >
                                        Join CLass
                                      </Button>
                                    </Link>
                                  </Row>
                                </div>
                              </div>
                            </Col>
                    
                   
                      </Row>
                  </div>
                </section>
              </div>
            </div>
          </Row>
        </div>
      </section>
        {/* <VideoSection /> */}
    </>
    );
  }
}
export default BookEvent;
