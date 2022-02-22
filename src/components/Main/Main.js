import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import mask from "../assets/mask.png";
import {
  StyledMain,
  StyledBg,
} from "../styles/Main.styled";

const Main = () => {
  return (
    <StyledMain>
      <Container fluid>
        <div>
        <StyledBg>
        <Row>
          <Col sm={6}>
            <img src={mask} alt="" />
          </Col>
          
          <Col sm={6}>
            <div className="specification-right">
              <h4>Specification</h4>
            <table>
              <tbody>
                <tr>
                  <td>
                    <span>:</span>
                    Project Address
                  </td>
                  <td>Plot - 26. Road - 4, Block - C, Banani, Dhaka</td>
                </tr>
                <tr>
                  <td>
                    <span>:</span>
                    Project Nature
                  </td>
                  <td>Residential</td>
                </tr>
                <tr>
                  <td>
                    <span>:</span>
                    Facing
                  </td>
                  <td>West</td>
                </tr>
                <tr>
                  <td>
                    <span>:</span>
                    Storeys
                  </td>
                  <td>B + G + 7 ( 08 storied)</td>
                </tr>
                <tr>
                  <td>
                    <span>:</span>
                    Land Size
                  </td>
                  <td>7 Katha</td>
                </tr>

                <tr>
                  <td>
                    <span>:</span>
                    Apartment Size
                  </td>
                  <td>1800 sq ft</td>
                </tr>

                <tr>
                  <td>
                    <span>:</span>
                    Number of Units
                  </td>
                  <td>14</td>
                </tr>

                <tr>
                  <td>
                    <span>:</span>
                    Parking Spots
                  </td>
                  <td>14</td>
                </tr>
                <tr>
                  <td>
                    <span>:</span>
                    Unit Per Floor
                  </td>
                  <td>2</td>
                </tr>

                <tr>
                  <td>
                    <span>:</span>
                    Lifts
                  </td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>
                    <span>:</span>
                    Stairs
                  </td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>
                    <span>:</span>
                    Rooftop Facilities
                  </td>
                  <td>Rooftop Community Space, BBQ Pit & Garden</td>
                </tr>
                <tr>
                  <td>
                    <span>:</span>
                    Ground Floor Facilities
                  </td>
                  <td>Grand Reception, Reflection Pool, Gym, Association Room</td>
                </tr>

              </tbody>
            </table>
            </div>
          </Col>
        </Row>
        </StyledBg>
        </div>
      </Container>
    </StyledMain>
  );
};

export default Main;
