import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Features, StyledButton, StyledSlide } from "../styles/Slide.styled";
import group from '../assets/group.png'

export default class Slide extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      infinite: true,
      fade: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };
    return (
      <StyledSlide>
        <Container>
          <div className="left-content">
          <Features>Features and Amenities</Features>
          <Row>
            <Slider ref={(c) => (this.slider = c)} {...settings}>
              <div key={1}>
                <Row>
                  <Col xs={7}>
                    <h2>Main Apartment</h2>
                    <ul>
                      <li>
                        Floor - Floors are imported 24" x 24" mirror polish
                        homogeneous tiles.
                      </li>
                      <li>
                        Painting - Smooth finish plastic paint on all walls and
                        ceiling in soft colors (Berger/Asian paint).
                      </li>
                      <li>
                        Main Door - Solid teak decorative main entrance door
                        with door chain, check viewer, door knocker & apartment
                        number plate.
                      </li>
                      <li>
                        Internal Door - Internal doors of strong and durable
                        veneer flush door (Teak chamble) shutter and solid
                        chowkath (Teak chamble) with French polish.
                      </li>
                      <li>
                        Window - Sliding windows with tinted/clear glass
                        complete with mohair lining and rain water barrier in 4"
                        aluminum sections. Safety grills in windows.
                      </li>
                      <li>
                        Electrical features - MK electrical switches & plug
                        points. Electrical distribution box with circuit
                        breaker. All power outlets with earthing connection.
                        Provision for air conditioner in two bedrooms & living
                        room. Verandahs with suitable light points.
                      </li>
                      <li>
                        Cable connection - Cable TV line provision in one
                        bedroom and living room and family living.
                      </li>
                    </ul>
                  </Col>
                  <Col xs={5}>
                    <div>
                    <img
                      src={group} alt=""
                    />
                    <h3>Apartment</h3>
                    </div>
                  </Col>
                </Row>
              </div>
              <div key={2}>
                <Row>
                  <Col xs={7}>
                    <h2>Bathroom</h2>
                    <ul>
                      <li>
                        <strong>Door</strong>
                         - All bathrooms with inner-side laminated veneered flash door.
                      </li>
                      <li>
                      <strong>Sanitary Wares</strong>
                      - Good quality sanitary wares in all bathrooms (COTTO / CHINESE /Equivalent)
                      </li>
                      <li>
                        <strong>Main Door</strong>
                         - Solid teak decorative main entrance door
                        with door chain, check viewer, door knocker & apartment
                        number plate.
                      </li>
                      <li>
                        <strong>Wall</strong>
                        - All bathroom walls will be glazed ceramic tiles (CHINESE/RAK  /Equivalent) up to 7” height.
                      </li>

                      <li>
                        <strong>Cable connection</strong>
                         - Cable TV line provision in one
                        bedroom and living room and family living.
                      </li>
                      <li>
                        <strong>Mirror</strong>
                        - All mirrors in bathrooms with overhead lamps.
                      </li>
                    </ul>
                  </Col>
                  <Col xs={5}>
                  <img
                      src="https://nhlbd.org/dev/admin/uploads/product/nddl-imams-heritage/1635748571RjG7s.jpg" alt=""
                    />
                    <h3>Bathroom</h3>
                  </Col>
                </Row>
              </div>
            </Slider>
            <div>
              <StyledButton onClick={this.previous}>
                <FaArrowLeft />
              </StyledButton>
              <StyledButton onClick={this.next}>
                <FaArrowRight />
              </StyledButton>
            </div>
          </Row>
          </div>
        </Container>
      </StyledSlide>
    );
  }
}
