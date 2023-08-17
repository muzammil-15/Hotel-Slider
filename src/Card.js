import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const BasicCard = ({ item }) => {
  return (
    <Card className="custom-card">
      <Row>
        <Col sm={12} md={6} className="left-section">
          <Card.Body>
            <Card.Title className="title">{item.title}</Card.Title>
            <Card.Text className="text">
              Discover an oasis of luxury at our exquisite hotel, nestled in the
              heart of Egypt. Experience unrivaled comfort in our elegantly
              designed rooms and suites. Explore the vibrant city with ease from
              our convenient central location. <br/> <br/> Book your stay today and let us
              create an unforgettable experience for you.
            </Card.Text>
            <div className="manager">
              <img src="https://img.freepik.com/free-photo/businessman_144627-34865.jpg?size=626&ext=jpg&ga=GA1.2.2067846834.1685203044&semt=country_rows_v1" alt="" />
              <h4>Hotel Manager <br />
                <span className="mng-name">George</span>
              </h4>
            </div>
          </Card.Body>
        </Col>
        <Col sm={12} md={6} className="right-section">
          <Card.Img variant="top" src={item.image} alt="Card Image" />
        </Col>
      </Row>
    </Card>
  );
};

export default BasicCard;
