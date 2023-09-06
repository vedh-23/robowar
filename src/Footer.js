import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { faFacebook,faTwitter,faInstagram,faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer()
{
    return (
      <>
        <div className="container">
          <Container>
            
            <div className="singleCol social-media-icons-white d-flex justify-content-evenly">
              <a href="https://www.facebook.com/robovitics/">
                {" "}
                <FontAwesomeIcon icon={faFacebook} />{" "}
              </a>
              <a href="https://twitter.com/robo_vit">
                {" "}
                <FontAwesomeIcon icon={faTwitter} />{" "}
              </a>
              <a href="https://www.instagram.com/robovitics/">
                {" "}
                <FontAwesomeIcon icon={faInstagram} />{" "}
              </a>
              <a href="https://www.linkedin.com/company/robovitics?originalSubdomain=in">
                {" "}
                <FontAwesomeIcon icon={faLinkedin} />{" "}
              </a>
              <a href="https://robovitics.in/">
                  Official website
              </a>
            </div>
          </Container>
        </div>
      </>
    );
}
export default Footer