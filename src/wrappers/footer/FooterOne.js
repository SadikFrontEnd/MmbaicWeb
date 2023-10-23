import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";
import FooterCopyright from "../../components/footer/FooterCopyright";
import FooterNewsletter from "../../components/footer/FooterNewsletter";
import logoastro from "../../assets/img/logoastro.png";
import axiosConfig from "../../axiosConfig";

const FooterOne = ({
  backgroundColorClass,
  spaceTopClass,
  spaceBottomClass,
  spaceLeftClass,
  spaceRightClass,
  containerClass,
  extraFooterClass,
  sideMenu,
}) => {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);
  const [categoryList, setCategoryList] = useState([]);

  const [pages, setPages] = useState([]);

  useEffect(() => {
    getPages();
  }, []);

  const getPages = () => {
    axiosConfig
      .get(`/admin/getPages`)
      .then((res) => {
        // console.log(res.data.data);
        setPages(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axiosConfig
      .get(`/admin/getallCategory`)
      .then((response) => {
        setCategoryList(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <footer
      className={`footer-area ${
        backgroundColorClass ? backgroundColorClass : ""
      } ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      } ${extraFooterClass ? extraFooterClass : ""} ${
        spaceLeftClass ? spaceLeftClass : ""
      } ${spaceRightClass ? spaceRightClass : ""}`}
    >
      <div className={`${containerClass ? containerClass : "container"}`}>
        <div className="row">
          <div
            className={`${
              sideMenu ? "col-xl-3 col-sm-4" : "col-lg-3 col-sm-4"
            }`}
          >
            <FooterCopyright footerLogo={logoastro} spaceBottomClass="mb-30" />
          </div>

          <div
            className={`${
              sideMenu ? "col-xl-3 col-sm-4" : "col-lg-3 col-sm-6"
            }`}
          >
            <div
              className={`${
                sideMenu
                  ? "footer-widget mb-30 ml-145"
                  : "footer-widget mb-30 ml-75"
              }`}
            >
              <div className="footer-title">
                <h3>QUICK LINKS</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <ul className="submenu">
                      <li className="">
                        <Link to={process.env.PUBLIC_URL + "/zodicPage"}>
                          About Us
                        </Link>
                      </li>
                      <li className="">
                        <Link to={process.env.PUBLIC_URL + "/zodicPage"}>
                          Services
                        </Link>
                      </li>
                      <li className="">
                        <Link to={process.env.PUBLIC_URL + "/zodicPage"}>
                          Membership
                        </Link>
                      </li>
                      <li className="">
                        <Link to={process.env.PUBLIC_URL + "/zodicPage"}>
                          Opportunity
                        </Link>
                      </li>
                      <li className="">
                        <Link to={process.env.PUBLIC_URL + "/zodicPage"}>
                          Career
                        </Link>
                      </li>
                      {/* {categoryList?.map((item) => {
                        return (
                          <li className="" key={item._id}>
                            <Link to={process.env.PUBLIC_URL + "/zodicPage"}>
                              {item.title}
                            </Link>
                          </li>
                        );
                      })} */}
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* <div
            className={`${
              sideMenu ? "col-xl-3 col-sm-4" : "col-lg-3 col-sm-6"
            }`}
          >
            <div
              className={`${
                sideMenu
                  ? "footer-widget mb-30 ml-145"
                  : "footer-widget mb-30 ml-75"
              }`}
            >
              <div className="footer-list">
                <ul>
                  <li>
                    <ul className="submenu"></ul>
                  </li>
                </ul>
              </div>
              <div className="footer-title">
                <h3>Remedies</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <ul className="submenu">
                      <li className="">
                        <Link to={process.env.PUBLIC_URL + "/luckyGemstone"}>
                          Know your Lucky Gemstone
                        </Link>
                      </li>
                      <li className="">
                        <Link to={process.env.PUBLIC_URL + "/lalKitab"}>
                          Lal Kitab
                        </Link>
                      </li>
                      <li className="">
                        <Link to={process.env.PUBLIC_URL + "/lalkitabPlanets"}>
                          Lal Kitab Planets
                        </Link>
                      </li>

                      <li className="">
                        <Link to={process.env.PUBLIC_URL + "/bookEvent"}>
                          Book Online Puja
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}

          <div
            className={`${
              sideMenu ? "col-xl-3 col-sm-4" : "col-lg-3 col-sm-6"
            }`}
          >
            <div
              className={`${
                sideMenu
                  ? "footer-widget mb-30 ml-145"
                  : "footer-widget mb-30 ml-75"
              }`}
            >
              <div className="footer-title">
                <h3>SUPPORT</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <ul className="submenu">
                      <li className="">
                        <Link to={process.env.PUBLIC_URL + "/basicPanchang"}>
                          Become Member
                        </Link>
                      </li>
                      <li className="">
                        <Link to={process.env.PUBLIC_URL + "/todayPanchang"}>
                          Become Associates
                        </Link>
                      </li>
                      <li className="">
                        <Link to={process.env.PUBLIC_URL + "/shubhMuhurat"}>
                          My Account
                        </Link>
                      </li>
                      <li className="">
                        <Link to={process.env.PUBLIC_URL + "/todayFestival"}>
                          FAQs
                        </Link>
                      </li>
                      <li className="">
                        <Link to={process.env.PUBLIC_URL + "/todayFestival"}>
                          Refund Policy
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className={`${
              sideMenu ? "col-xl-3 col-sm-4" : "col-lg-3 col-sm-4"
            }`}
          >
            <div
              className={`${
                sideMenu
                  ? "footer-widget mb-30 ml-95"
                  : "footer-widget mb-30 ml-50"
              }`}
            >
              <div className="footer-title">
                <h3>CORPORATE OFFICE</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    {/* <h3>Dosh</h3> */}
                    <ul className="submenu">
                      <li className="">
                        <Link
                        //  to={process.env.PUBLIC_URL + "/pages/login"}
                        >
                          Office 000,2nd floor,
                        </Link>
                      </li>
                      <li className="">
                        <Link
                        // to={process.env.PUBLIC_URL + "/astrologersignup"}
                        >
                          Royal Garden,Arey Colony,
                        </Link>
                      </li>
                      <li className="">
                        <Link
                        // to={process.env.PUBLIC_URL + "/astrologersignup"}
                        >
                          Goregaon,East Mumbai.
                        </Link>
                      </li>
                      <li className="">
                        <Link
                        // to={process.env.PUBLIC_URL + "/astrologersignup"}
                        >
                          Email:info@mmbaic.com
                        </Link>
                      </li>
                      <li className="">
                        <Link
                        // to={process.env.PUBLIC_URL + "/astrologersignup"}
                        >
                          Phone No:+91 00000 00000
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/* <div className="footer-title">
          
                <h3>Useful Links</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <li>
                      <Link to={process.env.PUBLIC_URL + "/ourservice"}>
                        Our Services
                      </Link>
                    </li>

                    <li>
                      <Link to={process.env.PUBLIC_URL + "/freekundli"}>
                        Free Kundli
                      </Link>
                    </li>
                    <li>
                      <Link to={process.env.PUBLIC_URL + "/kundaliform"}>
                        Match Making
                      </Link>
                    </li>

                    <li>
                      <Link to={process.env.PUBLIC_URL + "/blog-no-sidebar"}>
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link to={process.env.PUBLIC_URL + "/aboutdetail"}>
                        About us
                      </Link>
                    </li>

                    <li>
                      <Link to={process.env.PUBLIC_URL + "/contact"}>
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link to={process.env.PUBLIC_URL + "#/"}></Link>
                    </li>
                    <Link to={process.env.PUBLIC_URL + "/TermsOfUse"}>
                      Terms of Use
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/privacyPolicy"}>
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/Faq"}>FAQs</Link>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>

          {/* <div
            className={`${
              sideMenu ? "col-xl-2 col-sm-8" : "col-lg-2 col-sm-6"
            }`}
          >
            <FooterNewsletter
              spaceBottomClass="mb-30"
              spaceLeftClass="ml-70"
              sideMenu={sideMenu}
            />
          </div> */}
        </div>
      </div>
      <button
        className={`scroll-top ${scroll > top ? "show" : ""}`}
        onClick={() => scrollToTop()}
      >
        <i className="fa fa-angle-double-up"></i>
      </button>
    </footer>
  );
};

FooterOne.propTypes = {
  backgroundColorClass: PropTypes.string,
  containerClass: PropTypes.string,
  extraFooterClass: PropTypes.string,
  sideMenu: PropTypes.bool,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
  spaceLeftClass: PropTypes.string,
  spaceRightClass: PropTypes.string,
};

export default FooterOne;
