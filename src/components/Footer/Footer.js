import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { StyledFooter, Text } from "../styles/Footer.styled";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook-circular-logo.png";
import youtube from "../assets/youtube.png";

const Footer = () => {
  return (
    <StyledFooter>
      <MDBFooter className="font-small pt-5 footer-area">
        <MDBContainer className="text-center text-md-left">
          <MDBRow>
            <MDBCol className="col-sm-2">
              <ul className="footer-social">
                <li className="list-inline-item">
                  <img src={youtube} alt="" />
                </li>
                <li className="list-inline-item">
                  <img src={facebook} alt="" />
                </li>
                <li className="list-inline-item">
                  <img src={instagram} alt="" />
                </li>
              </ul>
            </MDBCol>

            <div className="pl-0 col-sm-7 offset-sm-1">
              <div className="footer-menu d-flex flex-wrap">
                <div className="col-sm-4">
                  <h4>Corporate Office</h4>
                  <p>Awal center (8th Floor) 
                  <br />
                  34 Kemal Ataturk Avenue 
                  <br />
                  Banani, Dhaka 1213 </p>
              </div>
              <div className="pl-30 col-sm-4">
                <h4>About Us</h4>
                <ul>
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/about">Our Team</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4">
                  <h4>Services</h4>
                  <ul>
                    <li>
                      <a href="/services">Landscaping</a>
                    </li>
                    <li>
                      <a href="/services">Contracting Maintenance</a>
                    </li>
                    <li>
                      <a href="/services">Consultancy</a>
                    </li>
                    <li>
                      <a href="/services">Civil Construction</a>
                    </li>
                  </ul>
              </div>
              <div className="contact-numbers col-sm-4">
                    <h4>Contact</h4>
                    <ul>
                      <li>
                        <a href="tel:02 222275610">02 222275018</a>
                      </li>
                      <li>
                        <a href="tel:02 222275610">02 222275610</a>
                      </li>
                      <li>
                        <a href="tel:02 222275612">02 222275612</a>
                      </li>
                      <li>
                        <a href="mailto:info@nhlbd.org">info@nhlbd.org</a>
                      </li>
                    </ul>
              </div>
              <div className="pl-30 col-sm-4">
              <h4>Projects</h4>
              <ul>
                <li>
                  <a href="!#">Ongoing</a>
                </li>
                <li>
                  <a href="!#">Upcoming</a>
                </li>
                <li>
                  <a href="!#">Completed</a>
                </li>
              </ul>
              </div>
              </div>
            </div>
            
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3 top">
          <MDBContainer>
            <MDBRow className="bottom-copyright">
              <div className="col-sm-3">
                <h4>© 2021 Nassa Holdings Limited.</h4>
              </div>
              <div className="d-flex justify-content-between col-sm-9">
                <p>All rights reserved.</p>
                <a href="https://dcastalia.com/" target="_blank">
                  Designed & Developed by 
                  <span> Dcastalia</span>
                </a>
              </div>
            </MDBRow>
          </MDBContainer>
        </div>
      </MDBFooter>
    </StyledFooter>
  );
};

export default Footer;
