import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NewStyled, StyledUpperBody, Text, Text2 } from "../styles/UpperBody.styled";
import { MdOutlineLocationOn } from "react-icons/md";

const UpperBody = () => {
  return (
    <StyledUpperBody>
      <NewStyled>
      <Container>
            
            <Text2>
              <MdOutlineLocationOn/>
              Plot - 26. Road -04, Block - C, Banani,Dhaka</Text2>
        <Row>
          <Col xs={12} md={8}>
            <Text>
              NHL Fortuna is a beacon to the World of luxury and comforts. This
              is the doorway to a life that you have always wished for-a trendy
              life mixed and matched with wholesome luxury and superb style.
              What draw both of your attention and admiration are the
              magnificence and beauty of the project. At the same time it
              mirrors the contemporary architecture trend that believes in
              creation of ornament using the structure and theme of the building
              rather than the exterior gaudy ornamentation.<br />
              <br />
              NHL Fortuna is a beacon to the World of luxury and comforts. This
              is the doorway to a life that you have always wished for-a trendy
              life mixed and matched with wholesome luxury and superb style.
              What draw both of your attention and admiration are the
              magnificence and beauty of the project.
            </Text>
          </Col>
          <Col xs={6} md={4}>
            
          </Col>
        </Row>
        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
        <Row>
          <Col xs={6} md={4}>
            <p>
            NHL Fortuna is located at Plot-26, Road-04, Block-C, Banani, Dhaka. It is a 8 storied residential complex consisting of 14 apartments. You can nest your cars easily at basement floor parking space. Along with its stylish layout and marvelous look. You can have a great provision of privacy and enjoy the maximum benefit of lobby areas. At NHL Fortuna, you can make a choice of your suitable home from apartments approximately 1800 sft. Areas. 
            </p>
          </Col>
          <Col xs={6} md={4}>
            <p>
            Perfectly planned spacious rooms promise your pleasure and peace of mind with affluent flow of fresh air and natural light. Here we state you the most exclusive offering of NHL Fortuna- the 40% of the total square feet area is left open. We feel proud to provide you with this opportunity as we all know how essential yet unattainable a little bit of green in front of your doorway is in our existing reality.
            </p>
          </Col>
          <Col xs={6} md={4}>
            <p>
            Besides exclusive features, the apartment dwellers will be privileged with the close proximity to meet up all the urban facilities. Thus, NHL Fortuna happens to be a residential space like no other and for once taking a decision becomes easy!
            </p>
          </Col>
        </Row>
      </Container>
      </NewStyled>
    </StyledUpperBody>
  );
};

export default UpperBody;
