import React from "react";
import { Container, Nav } from "react-bootstrap";

function Footer() {
  return (
    <>
      <div className="py-3 fw-light"  style={{backgroundColor:"#eaeaea8f", fontFamily: "Poppins"}} >
        <Container>
        <Nav className="justify-content-center text-center pt-5 text-xl text-purple">
            Our Sponsors
        </Nav>
          <Nav className=" hover:text-purple justify-content-center text-center pt-3">
            <Nav.Link
              className="mx-1 mx-md-4"
              href="https://www.microsoft.com/en-ng"
              style={{ color: "#4d4d4d" }}
            >
              Microsoft
            </Nav.Link>
            <Nav.Link
              className="mx-1 mx-md-4"
              href="https://www.isdb.org/"
              style={{ color: "#4d4d4d" }}
            >
              IsBD
            </Nav.Link>
            <Nav.Link
              className="mx-1 mx-md-4"
              href="https://fintech-egypt.com/#:~:text=12%20Jan%202023%20%E2%80%9CFinTech%20Egypt,FinTech%20and%20Innovation%20Strategy%20..."
              style={{ color: "#4d4d4d" }}
            >
              Fintech Egypt
            </Nav.Link>
            <Nav.Link
              className="mx-1 mx-md-4"
              href="https://accelerateher.co.uk/"
              style={{ color: "#4d4d4d" }}
            >
              Accelerate Her
            </Nav.Link>
            <Nav.Link
              className="mx-1 mx-md-4"
              href="https://prunedge.com/"
              style={{ color: "#4d4d4d" }}
            >
              Prunedge
            </Nav.Link>
            <Nav.Link
              className="mx-1 mx-md-4"
              href="https://wemabank.com/alat/"
              style={{ color: "#4d4d4d" }}
            >
              Alat
            </Nav.Link>
          </Nav>
          <p className="text-center pt-3">Built by Team Intel</p>
          <p className="text-center pt-3">
            © 2023 TeamIntel. All rights reserved.
          </p>
        </Container>
      </div>
    </>
  );
}

export default Footer;