import React from "react";
import "../App.css";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Box,Divider,Button,Link as MuiLink} from "@mui/material";

class footer extends React.Component {

  render() {
    return (
      <Box 
      style={{
        margin: "0 auto",
        backgroundColor: "#6C757D"
      }}>
        <Divider />
        <Container>
        <h1>Welcome to My Website</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          viverra, elit vel auctor dictum, dolor sapien varius nunc, sed
          bibendum velit urna quis neque. Aliquam erat volutpat.
        </p>
        <Button variant="primary">Learn More</Button>
      </Container>
      <Container fluid className="footer-custom">
        <Container>
          <Row>
            <Col md={6}>
              <p>&copy; 2023 My Website. All rights reserved.</p>
            </Col>
            <Col md={6}>
              <p className="text-end">Powered by React and Bootstrap</p>
            </Col>
          </Row>
        </Container>
      </Container>
      </Box>
    );
  }
}

export default footer;
