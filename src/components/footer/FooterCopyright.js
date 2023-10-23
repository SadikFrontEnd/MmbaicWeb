import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import fb from "../../assets/img/facebook.png";
import insta from "../../assets/img/insta.png";
import linkedin from "../../assets/img/linkedin.png";
import youtube from "../../assets/img/youtube.png";
import twitter from "../../assets/img/twitter.png";
import whatsapp from "../../assets/img/whatsapp.png";

const FooterCopyright = ({ footerLogo, spaceBottomClass, colorClass }) => {
  return (
    <div
      className={`copyright ${spaceBottomClass ? spaceBottomClass : ""} ${
        colorClass ? colorClass : ""
      }`}
    >
      <div className="footer-logo">
        <Link to={process.env.PUBLIC_URL + "/"}>
          <img
            alt=""
            src={process.env.PUBLIC_URL + footerLogo}
            style={{ width: 180 }}
          />
        </Link>
      </div>
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <a href="/" rel="noopener noreferrer" target="">
          MMBIC
        </a>
        .<br /> All Rights Reserved
      </p>
      <div className="headingsocialmediaimage">
        <img className="socialmediaimg" src={fb} />
        <img className="socialmediaimg" src={insta} />
        <img className="socialmediaimg" src={linkedin} />
        <img className="socialmediaimg" src={youtube} />
        <img className="socialmediaimg" src={twitter} />
        <img className="socialmediaimg" src={whatsapp} />
      </div>
    </div>
  );
};

FooterCopyright.propTypes = {
  footerLogo: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  colorClass: PropTypes.string,
};

export default FooterCopyright;
